import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { Input } from "./atoms/Input";
import { Button } from "./atoms/Button";
import Footer from "./molecules/footer";
import findMostUsedLanguageByRepos from "./findMostUsedLanguageByRepos";

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
  const getResults = (input: string) => {
    axios({
      headers: {
        Authorization: `token ${process.env.REACT_APP_GH}`,
      },
      method: "get",
      url: `https://api.github.com/users/${input}/repos?per_page=100`,
    })
      .then((response) => {
        const languagesArray = response.data
          .map((el: any) => el.language)
          .filter((v: string | null) => v);
        const winner = Object.entries(
          findMostUsedLanguageByRepos(languagesArray)
        )[0];
        setLanguage(
          `${username}'s favourite languages is ${winner[0]}: ${winner[1]}%`
        );
      })
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
                  id="username"
                  value={username}
                  label="GitHub Username"
                  onChange={(e: any) => setUsername(e.target.value)}
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

export default Homepage;
