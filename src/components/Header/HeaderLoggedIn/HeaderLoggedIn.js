import React, { useContext } from "react";
import avatar from "../../../images/avatar.png";
import DispatchContext from "../../../reducer/DispatchContext";
import StateContext from "../../../reducer/StateContext";

export default function HeaderLoggedIn(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function logout() {
    appDispatch({ type: "logout" });
  }

  function toggleSettingsPopup() {
    console.log("ololo");
    appDispatch({ type: "toggleSettingsPopup" });
  }

  return (
    <div className="header__left-container" onClick={toggleSettingsPopup}>
      <p className="header__username">{appState.user.username}</p>
      <div className="header__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="header__arrow"></div>
      <div className={"header__popup" + (appState.isSettingsPopupOpen ? " header__popup--visible" : "")}>
        <p className="header__logout" onClick={logout}>
          Logout
        </p>
      </div>
    </div>
  );
}
