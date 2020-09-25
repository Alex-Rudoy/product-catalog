import React from "react";

export default function AuthModalTab({ text, active, onClick }) {
  return (
    <div className={`auth-modal-tab ${active ? "auth-modal-tab--active" : ""}`} onClick={onClick}>
      {text}
    </div>
  );
}
