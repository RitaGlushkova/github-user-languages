import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { Input } from "./atoms/Input";
import { Button } from "./atoms/Button";
import Footer from "./molecules/footer";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");
  const handleClick = () => {
    getResults(username);
  };
  const handleReset = () => {
    setUsername("");
    setLanguage("");
  };
  const getResults = (input) => {
    let endPoints = [];
    axios({
      method: "get",
      url: `http://localhost:8080/github_api/users/${username}/repos`,
    })
      .then((response) => {
        endPoints = response.data.map(
          (el) =>
            "http://localhost:8080/github_api/repos/" +
            username +
            "/" +
            el.name +
            "/languages"
        );
      })
      .then(() =>
        axios
          .all(
            endPoints.map((endpoint) =>
              axios({
                method: "get",
                url: endpoint,
              })
            )
          )
          .then((result) => {
            const arrayOfAllLanguagesForEachRepo = result.map((el) => el.data);
            const winner = Object.entries(
              findMostUsedLanguageByBites(arrayOfAllLanguagesForEachRepo)
            )[0];
            setLanguage(
              `${username}'s favourite languages is ${winner[0]}: ${winner[1]}%`
            );
          })
      )
      .catch((error) => {
        setLanguage("Couldn't find this user");
        console.error(`Error: ${error}`);
      });
  };

  return (
    <div className="screen-height">
      <div className="resize">
        <h2 className="header">Make a Guess!</h2>
        <h6 className="header">
          Input GitHub username and find out which language they use most often.
        </h6>
        <div className="card">
          <div className="card-stacked">
            <div className="card-content">
              <form className="col s12">
                <Input
                  value={username}
                  label="GitHub Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </form>
              {language ? (
                <p>{language}</p>
              ) : (
                <div className="resize">
                  <img
                    style={{ width: "100%" }}
                    src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/18/29/18-29-202L-Black/Cat-Laura-Graves-Poster-in-Standard-Frame.jpg"
                    alt="curious cat"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="card-action">
            <Button btnName="Start again" handleClick={handleReset} />
            <Button btnName="Get Result" handleClick={handleClick} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

const findMostUsedLanguageByBites = (array) => {
  const object = {};
  let language = {};
  array.forEach((repoLanguages) => {
    Object.keys(repoLanguages).forEach((l) => {
      if (l in object) object[l] = object[l] + repoLanguages[l];
      else object[l] = repoLanguages[l];
    });
  });
  const totalSumOfBites = Object.values(object).reduce((a, b) => a + b, 0);
  for (let i in object) {
    object[i] = Math.floor((object[i] / totalSumOfBites) * 100);
  }
  for (let i in object) {
    if (object[i] === Math.max(...Object.values(object)))
      language[i] = object[i];
  }
  return language;
};

export default Homepage;
