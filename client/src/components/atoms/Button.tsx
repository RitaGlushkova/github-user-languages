import React from "react";
import "../../App.css";

interface ButtonProps {
  btnName: string;
  handleClick: () => void;
}
export const Button = ({ btnName, handleClick }: ButtonProps) => {
  return (
    <button
      className="btn"
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};
