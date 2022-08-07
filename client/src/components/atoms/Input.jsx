import React from "react";

export const Input = ({ value, label, placeholderText, onChange }) => {
  return (
    <div>
      <label forhtml="username">
        {label}
      </label>
      <input
        value={value}
        type="text"
        id="username"
        onChange={onChange}
        placeholder={placeholderText}
      />
    </div>
  );
};
