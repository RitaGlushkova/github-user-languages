import React from "react";

export const Input = ({ label, placeholderText, value, onChange }) => {
  return (
    <div>
      <label forhtml="username">{label}</label>
      <input
        value={value}
        //ref={forwardRef}
        type="text"
        id="username"
        onChange={onChange}
        placeholder={placeholderText}
      />
    </div>
  );
};
