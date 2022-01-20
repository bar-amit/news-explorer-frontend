import "./Popup.css";

function Popup({ children, isOpen, close }) {
  function overlayClick(e) {
    e.stopPropagation();
    if (e.target.classList.contains("popup_visible")) close();
  }

  return (
    <div
      className={`popup ${isOpen ? "popup_visible" : ""}`}
      onClick={overlayClick}
    >
      <div className="popup__container">
        <button className="popup__button" type="button" onClick={close}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.13117 12L0.309683 20.8215L2.6667 23.1786L13.1381 12.7072C13.5286 12.3166 13.5286 11.6835 13.1381 11.2929L2.6667 0.821533L0.309683 3.17856L9.13117 12Z"
              fill="white"
            />
            <path
              d="M12.68711 12L21.5086 20.8215L19.1516 23.1786L8.680173 12.7072C8.29 12.3166 8.0403511 11.6835 8.680173 11.2929L19.1516 0.821533L21.4086 3.17856L12.68711 12Z"
              fill="white"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
