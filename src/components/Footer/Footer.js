import { Link } from "react-router-dom";

import facebookIcon from "../../images/footer__facebook-icon.svg";
import githubIcon from "../../images/footer__github-icon.svg";

import "./Footer.css";

function Footer() {
  const scrollHome = () => window.scrollTo(0);
  return (
    <footer className="footer">
      <small className="footer__copyrights">
        © 2021 Supersite, Powered by News API
      </small>
      <ul className="footer__link-list">
        <li>
          <Link className="footer__link" to="/" onClick={scrollHome}>
            Home
          </Link>
        </li>
        <li>
          <a
            className="footer__link"
            href="https://practicum.yandex.com"
            target="_blank"
            rel="noreferrer"
          >
            Practicum by Yandex
          </a>
        </li>
        <li>
          <a
            className="footer__icon"
            href="https://github.com/bar-amit"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github" />
          </a>
          <a
            className="footer__icon"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="facebook" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
