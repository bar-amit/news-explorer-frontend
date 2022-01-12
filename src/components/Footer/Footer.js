import facebookIcon from "../../images/footer__facebook-icon.svg";
import githubIcon from "../../images/footer__github-icon.svg";

import './Footer.css';

function Footer() {
    return (
      <footer className="footer">
        <span className="footer__copyrights">
          © 2021 Supersite, Powered by News API
        </span>
        <ul className="footer__link-list">
          <li>
            <a className="footer__link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Practicum by Yandex
            </a>
          </li>
          <li>
            <img className="footer__icon" src={githubIcon} />
            <img className="footer__icon" src={facebookIcon} />
          </li>
        </ul>
      </footer>
    );
}

export default Footer;