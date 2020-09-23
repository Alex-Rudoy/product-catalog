import React from "react";
import appStore from "./images/appStore.svg";
import facebook from "./images/facebook.png";
import googlePlay from "./images/googlePlay.svg";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__links">
        <p className="footer__title">Get our apps!</p>
        <div className="footer__image-holder">
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="AppStore" />
        </div>
        <p className="footer__title">Follow us in social networks:</p>
        <div className="footer__image-holder">
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
          <img src={youtube} alt="Youtube" />
        </div>
      </div>
      <p className="footer__copyright">© Product catalog PTY LTD 2020. All rights reserved</p>
    </footer>
  );
}
