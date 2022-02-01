import Popup from "../Popup/Popup";
import "./PopupMessage.css";

function PopupMessage({ isOpen, isSuccesful, close, openLogin }) {
  function handleClick(){
    openLogin();
    close();
  }

  return (
    <Popup isOpen={isOpen} close={close}>
      {isSuccesful ? (
        <div className="popup-message">
          <h2 className="popup-message__title">
            Registration successfully completed!
          </h2>
          <p className="popup-message__signin" onClick={handleClick}>
            Sign in
          </p>
        </div>
      ) : (
        <div className="popup-message">
          <h2 className="popup-message__title">Oops! Something went wrong.</h2>
        </div>
      )}
    </Popup>
  );
}

export default PopupMessage;
