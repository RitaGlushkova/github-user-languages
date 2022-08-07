import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./moledules/Header";
import { Input } from "./atoms/Input";
import { Button } from "./atoms/Button";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");

  const handleClick = () => {
    getResults(username);
  };

  const getResults = (input) => {
    axios({
      headers: {
        Authorization: `token ${process.env.REACT_APP_GH}`,
      },
      method: "get",
      url: `https://api.github.com/users/${input}/repos?per_page=100`,
    }).then((response) => {
      const languagesArray = response.data
        .map((el) => el.language)
        .filter((v) => v);
      const winner = Object.entries(
        findMostUsedLanguageByBites(languagesArray)
      )[0];
      setLanguage(`${winner[0]}: ${winner[1]}%`);
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
  let language = {};
  let object = {};
  array.forEach((l) => {
    if (l in object) object[l] = object[l] + 1;
    else object[l] = 1;
  });
  const total = Object.values(object).reduce((a, b) => a + b, 0);
  for (let i in object) {
    object[i] = Math.floor((object[i] / total) * 100);
  }
  for (let i in object) {
    if (object[i] === Math.max(...Object.values(object)))
      language[i] = object[i];
  }
  return language;
};

export default Homepage;
