import React from "react";

export default function Button({ type, size, onClick, text }) {
  return (
    <button className={`button button--${type} button--${size}`} onClick={onClick}>
      {text}
    </button>
  );
}
