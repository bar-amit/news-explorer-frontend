import Popup from "../Popup/Popup";

function PopupWithForm({isOpen, close}) {
  return (
    <Popup isOpen={isOpen} close={close}>
      <form className="user-form">
        <h3 className="user-form__title">Sign in</h3>
        <label for="email" className="user-form__label">
          Email
        </label>
        <input type="email" name="email" placeholder="Enter Email"></input>
        <span className="user-form__error"></span>
        <label for="password" className="user-form__label">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Email"
        ></input>
        <span className="user-form__error"></span>
        <button type="submit">Sign in</button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
