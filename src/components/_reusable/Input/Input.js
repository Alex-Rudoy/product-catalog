import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Input({ type, name, value, label, onChange }) {
  return (
    <div className="input-container">
      {type === "input" ? (
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          required
        />
      ) : type === "password" ? (
        <input
          type="password"
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          required
        />
      ) : (
        <TextareaAutosize
          minRows="1"
          maxRows="5"
          name="details"
          id="details"
          spellCheck="false"
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          required
        />
      )}
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
