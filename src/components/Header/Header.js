import React from "react";
import HeaderLoggedIn from "./HeaderLoggedIn/HeaderLoggedIn";

export default function Header(props) {
  return (
    <header>
      <h1>Product catalog</h1>
      <HeaderLoggedIn />
    </header>
  );
}
