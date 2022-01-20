import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";
import openMenuButton from "../../images/header__mobile-menu_open.svg";
import closeMenuButton from "../../images/header__mobile-menu_close.svg";
import './Header.css';

const hiddenHeaderClass = 'header_hidden';
const headerThemeClass = "header_theme_bright";

function Header({ signUser }) {
  const brightTheme = useLocation().pathname === '/saved-news';

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [headerVisibilityClass, setHeaderVisibilityClass] = useState("");

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    function onResize() {
      setInnerWidth(window.innerWidth);
    }

    function onScroll() {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      if (!this.prevScroll) this.prevScroll = currentPosition;
      else if (currentPosition < this.prevScroll) {
        setHeaderVisibilityClass("");
      } else if (headerVisibilityClass === "") {
        setHeaderVisibilityClass(hiddenHeaderClass);
      }
      this.prevScroll = currentPosition;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
      window.removeEventListener("resize", onResize);
    }
  }, [headerVisibilityClass]);

  return (
    <header
      className={`header ${headerVisibilityClass} ${
        (scrollPosition > 60 && !headerVisibilityClass) || brightTheme
          ? headerThemeClass
          : ""
      }`}
    >
      <h1 className="header__title">NewsExplorer</h1>
      {innerWidth > 458 ? (
        <Navigation signUser={signUser} />
      ) : (
        <button
          className="header__menu-button"
          type="button"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <img src={closeMenuButton} alt="close menu" />
          ) : (
            <img src={openMenuButton} alt="open menu" />
          )}
        </button>
      )}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        isBrightTheme={brightTheme}
        signUser={signUser}
        closeMenu={toggleMobileMenu}
      />
    </header>
  );
}

export default Header;