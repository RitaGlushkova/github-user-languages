import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./moledules/Header";
import { Input } from "./atoms/Input";
import { Button } from "./atoms/Button";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");
  
  //get all repos, make array of repos names
  let arrayOfReposNames = [];
  let arrayOfAllLanguagesForEachRepo = [];
  //array of objects, where one object is a list of languages used in a repo
  //with number of bite per language
  const getResult = () => {
    axios({
      headers: {
        Authorization: `token ${process.env.REACT_APP_GH}`,
      },
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then((response) => {
      arrayOfReposNames = response.data.map((el) => el.name);
      arrayOfReposNames.forEach((el) => {
        //get all languages used in each repo, add them all in one array
        axios({
          headers: {
            Authorization: `token ${process.env.REACT_APP_GH}`,
          },
          method: "get",
          url: `https://api.github.com/repos/${username}/${el}/languages`,
        }).then((res) => {
          arrayOfAllLanguagesForEachRepo.push(res.data);
        });
      });
    });
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
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button btnName="Get Result" handleClick={getResult} />
      <Button btnName="Reset" handleClick={handleReset} />
      <div>
        {username}'s favourite languages is {language}
      </div>
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
