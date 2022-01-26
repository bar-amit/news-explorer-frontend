import { useContext } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import "./MobileMenu.css";

function MobileMenu({ isOpen, isBrightTheme, signUser, closeMenu }) {
  const { user, Api } = useContext(UserContext);

  function handleSignInClick(e) {
    e.stopPropagation();
    signUser();
    closeMenu();
  }

  function handleOverlayClick(e) {
    if (e.target.classList.contains("mobile-menu")) closeMenu();
  }

  return (
    <div
      className={`mobile-menu ${isOpen ? "mobile-menu_visible" : ""} ${
        isBrightTheme ? "mobile-menu_theme_bright" : ""
      }`}
      onClick={handleOverlayClick}
    >
      <div className="mobile-menu__container">
        <nav className="mobile-menu__navigation">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list-item" onClick={closeMenu}>
              <Link to="/" className="mobile-menu__link">
                Home
              </Link>
            </li>
            {user && (
              <li className="mobile-menu__list-item" onClick={closeMenu}>
                <Link to="/saved-news" className="mobile-menu__link">
                  Saved articles
                </Link>
              </li>
            )}
            {user ? (
              <li
                className="mobile-menu__list-item mobile-menu__button"
                onClick={Api.signOut}
              >
                {user.name}
                <Logout />
              </li>
            ) : (
              <li
                className="mobile-menu__list-item mobile-menu__button"
                onClick={handleSignInClick}
              >
                Sign in
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
