import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Logout from "../Logout/Logout";

import "./Navigation.css";

function Navigation({ signUser }) {
  const {user, Api} = useContext(UserContext);
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
        {user && (
          <li
            className={`${
              location.pathname === "/saved-news"
                ? "navigation__active-link"
                : ""
            }`}
          >
            <Link className="navigation__link" to="saved-news">
              Saved articles
            </Link>
          </li>
        )}
        {!user ? (
          <li
            className="navigation__button navigation__link"
            onClick={signUser}
          >
            Sign in
          </li>
        ) : (
          <li
            className="navigation__button navigation__link"
            onClick={Api.signOut}
          >
            {user.name}
            <Logout />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
