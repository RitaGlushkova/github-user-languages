import React from "react";
import "../../App.css";

export const Input = ({ label, value, onChange, placeholder, id }) => {
  return (
    <div className="input-field col s6">
      <input
        placeholder={placeholder}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
      />
      <label forhtml="username">{label}</label>
    </div>
  );
};
