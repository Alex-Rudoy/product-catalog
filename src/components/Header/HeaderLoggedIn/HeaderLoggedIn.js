import React, { useContext } from "react";
import DispatchContext from "../../../reducer/DispatchContext";
import StateContext from "../../../reducer/StateContext";
import Avatar from "../../_reusable/Avatar/Avatar";

export default function HeaderLoggedIn() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function logout() {
    appDispatch({ type: "logout" });
  }

  function toggleSettingsPopup() {
    appDispatch({ type: "toggleSettingsPopup" });
  }

  return (
    <div className="header__right-container" onClick={toggleSettingsPopup}>
      <p className="header__username">{appState.user.username}</p>
      <Avatar />
      <div className="header__arrow"></div>
      <div className={"header__popup" + (appState.isSettingsPopupOpen ? " header__popup--visible" : "")}>
        <p className="header__logout" onClick={logout}>
          Logout
        </p>
      </div>
    </div>
  );
}
