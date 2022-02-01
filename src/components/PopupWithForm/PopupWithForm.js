import Popup from "../Popup/Popup";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  close,
  openMessage,
  isRegistered,
  switchForm,
}) {
  return (
    <Popup isOpen={isOpen} close={close}>
      <form className="user-form" validate="true">
        {!isRegistered ? (
          <SignUpForm
            switchForm={switchForm}
            close={close}
            openMessage={openMessage}
          />
        ) : (
          <SignInForm switchForm={switchForm} close={close} />
        )}
      </form>
    </Popup>
  );
}

export default PopupWithForm;
