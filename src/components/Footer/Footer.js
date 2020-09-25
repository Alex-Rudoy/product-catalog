import React from "react";
import { Link } from "react-router-dom";
import appStore from "./images/appStore.svg";
import facebook from "./images/facebook.png";
import googlePlay from "./images/googlePlay.svg";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <p className="footer__title">Get our apps!</p>
        <div className="footer__image-holder">
          <Link to="https://play.google.com/">
            <img src={googlePlay} alt="Google Play" />
          </Link>
          <Link to="https://www.apple.com/app-store/">
            <img src={appStore} alt="AppStore" />
          </Link>
        </div>
        <p className="footer__title">Follow us in social networks:</p>
        <div className="footer__image-holder">
          <Link to="https://www.facebook.com/">
            <img src={facebook} alt="Facebook" />
          </Link>
          <Link to="https://twitter.com/">
            <img src={twitter} alt="Twitter" />
          </Link>
          <Link to="https://www.instagram.com/">
            <img src={instagram} alt="Instagram" />
          </Link>
          <Link to="https://www.youtube.com/">
            <img src={youtube} alt="Youtube" />
          </Link>
        </div>
      </div>
      <div>
        <p className="footer__copyright">© Product catalog PTY LTD 2020.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}
