import React, { useContext } from "react";
import DispatchContext from "../../reducer/DispatchContext";

export default function AuthModal({ tab, children }) {
  const appDispatch = useContext(DispatchContext);

  function closeAuthModal(e) {
    if (e.target.classList.contains("auth-modal__blackout")) appDispatch({ type: "closeAuthModal" });
  }

  function showLoginModal() {
    appDispatch({ type: "showLoginModal" });
  }

  function showRegisterModal() {
    appDispatch({ type: "showRegisterModal" });
  }

  return (
    <div className="auth-modal__blackout" onClick={closeAuthModal}>
      <div className="auth-modal">
        <div className="auth-modal__tabs">
          <div
            className={`auth-modal__tab ${tab === "login" ? "auth-modal__tab--active" : ""}`}
            onClick={showLoginModal}
          >
            Login
          </div>
          <div
            className={`auth-modal__tab ${tab === "register" ? "auth-modal__tab--active" : ""}`}
            onClick={showRegisterModal}
          >
            Register
          </div>
        </div>
        <div className="auth-modal__container">{children}</div>
      </div>
    </div>
  );
}
