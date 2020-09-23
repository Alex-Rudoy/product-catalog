import React, { useContext } from "react";
import DispatchContext from "../../../reducer/DispatchContext";

export default function HeaderLoggedOut() {
  const appDispatch = useContext(DispatchContext);

  function showLoginModal() {
    appDispatch({ type: "showLoginModal" });
  }

  function showRegisterModal() {
    appDispatch({ type: "showRegisterModal" });
  }

  return (
    <div>
      <button className="header__login" onClick={showLoginModal}>
        Login
      </button>
      <button className="header__register" onClick={showRegisterModal}>
        Register
      </button>
    </div>
  );
}
