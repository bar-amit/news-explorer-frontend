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
          <a className="footer__link" href="#">
            Practicum by Yandex
          </a>
        </li>
        <li>
          <a className="footer__icon">
            <img src={githubIcon} />
          </a>
          <a className="footer__icon">
            <img src={facebookIcon} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
