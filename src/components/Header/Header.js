import { useState, useEffect } from 'react';
import Navigation from "../Navigation/Navigation";
import './Header.css';

const hiddenHeaderClass = 'header_hidden';
const headerThemeClass = "header_theme_bright";

function Header({ signUser, brightTheme }) {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [headerVisibilityClass, setHeaderVisibilityClass] = useState("");

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

  useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header ${headerVisibilityClass} ${
        (scrollPosition > 60 && !headerVisibilityClass) || brightTheme
          ? headerThemeClass
          : ""
      }`}
    >
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation signUser={signUser} />
    </header>
  );
}

export default Header;