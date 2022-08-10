import React from "react";
import "../../App.css";
interface InputProps {
  label: string;
  value: string;
  onChange: (e: any) => void;
  id: string;
}
export const Input = ({ label, value, onChange, id }:InputProps) => {
  return (
    <div className="input-field col s6">
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
