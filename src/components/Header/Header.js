import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StateContext from "../../reducer/StateContext";
import HeaderLoggedIn from "./HeaderLoggedIn/HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut/HeaderLoggedOut";

export default function Header() {
  const appState = useContext(StateContext);

  return (
    <header>
      <Link to="/">
        <h1>Product catalog</h1>
      </Link>
      {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
    </header>
  );
}
