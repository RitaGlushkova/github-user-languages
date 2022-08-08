import React from "react";
import "../../App.css";


export const Button = ({ btnName, handleClick }) => {
  return (
    <button
      className="btn"
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};
