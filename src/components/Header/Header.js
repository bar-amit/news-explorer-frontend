import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileMenuButton from "../MobileMenuButton/MobileMenuButton";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const hiddenHeaderClass = "header_hidden";
const headerThemeClass = "header_theme_bright";

function Header({ signUser }) {
  const brightTheme = useLocation().pathname === "/saved-news";

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [headerVisibilityClass, setHeaderVisibilityClass] = useState("");

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    function onResize() {
      setInnerWidth(window.innerWidth);
    }

    let prevScroll;

    function onScroll() {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      if (!prevScroll) {
        prevScroll = currentPosition;
      } else if (currentPosition < prevScroll) {
        setHeaderVisibilityClass("");
      } else if (headerVisibilityClass === "") {
        setHeaderVisibilityClass(hiddenHeaderClass);
      }
      prevScroll = currentPosition;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
      window.removeEventListener("resize", onResize);
    };
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
      {innerWidth > 640 ? (
        <Navigation signUser={signUser} />
      ) : (
        <MobileMenuButton
          brightTheme={brightTheme}
          closeMenu={toggleMobileMenu}
          isOpen={isMobileMenuOpen}
        />
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
