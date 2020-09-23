import React, { useContext } from "react";
import StateContext from "../../reducer/StateContext";
import HeaderLoggedIn from "./HeaderLoggedIn/HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut/HeaderLoggedOut";

export default function Header() {
  const appState = useContext(StateContext);

  return (
    <header>
      <h1>Product catalog</h1>
      {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
    </header>
  );
}
