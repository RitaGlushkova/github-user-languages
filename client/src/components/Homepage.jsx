import * as React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import Header from "./moledules/Header";
import { Input } from "./atoms/Input";
import { Button } from "./atoms/Button";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");
  //const inputRef = useRef(null);

  // const handleClick = () => {
  //   inputRef.current.focus();
  //   setUsername(inputRef.current.value);
  //   if (username.length) getResults(username);
  // };
  const handleClick = () => {
    getResults(username)
  }

  const getResults = (input) => {
    let endPoints = [];
    axios({
      headers: {
        Authorization: `token ${process.env.REACT_APP_GH}`,
      },
      method: "get",
      url: `https://api.github.com/users/${input}/repos?per_page=10`,
    })
      .then((response) => {
        console.log(response.data)
        endPoints = response.data.map((el) => el.languages_url);
      })
      .then(() =>
        axios
          .all(
            endPoints.map((endpoint) =>
              axios({
                headers: {
                  Authorization: `token ${process.env.REACT_APP_GH}`,
                },
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
            setLanguage(`${winner[0]}: ${winner[1]}%`);
          })
      );
  };
  const handleReset = () => {
    setUsername("");
    setLanguage("");
  };

  return (
    <>
      <Header />
      <Input
        value={username}
        label="GitHub Username"
        placeholderText="write GitHub Username"
        //forwardRef={inputRef}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button btnName="Get Result" handleClick={handleClick} />
      <Button btnName="Reset" handleClick={handleReset} />
      {/* {username && language && ( */}
      <div>
        {username}'s favourite languages is {language}
      </div>
      {/* )} */}
    </>
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
