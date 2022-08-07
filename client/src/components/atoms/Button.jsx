import React from "react";

export const Button = ({ btnName, handleClick }) => {
  return (
    <button
      onClick={() => {
        handleClick();
      }}
    >
      {btnName}
    </button>
  );
};
