import React from "react";
import HeaderLoggedOut from "./HeaderLoggedOut/HeaderLoggedOut";

export default function Header(props) {
  return (
    <header>
      <h1>Product catalog</h1>
      <HeaderLoggedOut />
    </header>
  );
}
