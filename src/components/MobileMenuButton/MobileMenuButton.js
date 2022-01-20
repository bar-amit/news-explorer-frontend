import "./MobileMenuButton.css";

function MobileMenuButton({isOpen, closeMenu, brightTheme}){
    return (
      <button
        className={`header__menu-button ${
          brightTheme && "header__menu-button_theme_bright"
        }`}
        type="button"
        onClick={closeMenu}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="header__close-menu"
              d="M13.4144 12.0001L18.7073 17.293L17.293 18.7072L11.293 12.7072C10.9025 12.3167 10.9025 11.6835 11.293 11.293L17.293 5.29297L18.7073 6.70718L13.4144 12.0001Z"
              fill="white"
            />
            <path
              className="header__close-menu"
              d="M10.8786 12.0001L5.58571 17.293L6.99992 18.7072L12.9999 12.7072C13.3904 12.3167 13.3904 11.6835 12.9999 11.293L6.99992 5.29297L5.58571 6.70718L10.8786 12.0001Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="header__open-menu"
              x="4"
              y="8"
              width="16"
              height="2"
              fill="white"
            />
            <rect
              className="header__open-menu"
              x="4"
              y="14"
              width="16"
              height="2"
              fill="white"
            />
          </svg>
        )}
      </button>
    );
}

export default MobileMenuButton;