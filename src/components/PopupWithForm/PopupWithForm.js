import Popup from "../Popup/Popup";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

function PopupWithForm({
  isOpen,
  close,
  openMessage,
  isRegistered,
  switchForm,
}) {
  return (
    <Popup isOpen={isOpen} close={close}>
      {!isRegistered ? (
        <SignUpForm
          switchForm={switchForm}
          close={close}
          openMessage={openMessage}
        />
      ) : (
        <SignInForm switchForm={switchForm} close={close} />
      )}
    </Popup>
  );
}

export default PopupWithForm;
