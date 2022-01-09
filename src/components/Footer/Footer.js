import facebookIcon from "../../images/footer__facebook-icon.svg"
import githubIcon from "../../images/footer__tighub-icon.svg";

function Footer() {
    return (
      <footer className="footer">
        <span className="footer__copyrights">
          © 2021 Supersite, Powered by News API
        </span>
        <ul className="footer__links">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Practicum by Yandex</a>
          </li>
          <li>
            <img src={githubIcon} />
            <img src={facebookIcon} />
          </li>
        </ul>
      </footer>
    );
}

export default Footer;