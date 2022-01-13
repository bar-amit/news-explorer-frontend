import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ signUser }) {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation__link-list">
        <li
          className={`${
            location.pathname === "/" ? "navigation__active-link" : ""
          }`}
        >
          <Link className="navigation__link" to="/">
            Home
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/saved-news" ? "navigation__active-link" : ""
          }`}
        >
          <Link className="navigation__link" to="saved-news">
            Saved articles
          </Link>
        </li>
        <li className="navigation__button navigation__link" onClick={signUser}>
            Sign in
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;