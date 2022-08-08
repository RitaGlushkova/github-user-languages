import React from "react";
import "../../App.css";


export const Button = ({ btnName, handleClick }) => {
  return (
    <button
      className="waves-effect waves-light btn"
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};
