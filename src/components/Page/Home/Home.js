import React from "react";
import Page from "../Page";
import Promo from "./Promo/Promo";

export default function Home(props) {
  return (
    <Page title="Homepage">
      <Promo />
    </Page>
  );
}
