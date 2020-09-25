import React, { useContext } from "react";
import DispatchContext from "../../reducer/DispatchContext";
import AuthModalTab from "./AuthModalTab/AuthModalTab";

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
          <AuthModalTab text="Login" active={tab === "login"} onClick={showLoginModal} />
          <AuthModalTab text="Register" active={tab === "register"} onClick={showRegisterModal} />
        </div>
        <div className="auth-modal__container">{children}</div>
      </div>
    </div>
  );
}
