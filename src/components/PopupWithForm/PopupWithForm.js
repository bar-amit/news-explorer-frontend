import { useState } from "react";
import Popup from "../Popup/Popup";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

import "./PopupWithForm.css";

function PopupWithForm({ isOpen, close, openMessage }) {
  const [isNewUser, setIsNewUser] = useState(false);
  function switchForm() {
    setIsNewUser(!isNewUser);
  }

  return (
    <Popup isOpen={isOpen} close={close}>
      <form className="user-form" validate="true">
        {isNewUser ? (
          <SignUpForm switchForm={switchForm} close={close} openMessage={openMessage} />
        ) : (
          <SignInForm switchForm={switchForm} close={close} />
        )}
      </form>
    </Popup>
  );
}

export default PopupWithForm;
