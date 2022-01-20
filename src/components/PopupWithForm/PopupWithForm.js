import { useState } from "react";
import Popup from "../Popup/Popup";

import "./PopupWithForm.css";

function PopupWithForm({ isOpen, close }) {
  const [isNewUser, setIsNewUser] = useState(false);
  function switchForm() {
    setIsNewUser(!isNewUser);
  }

  return (
    <Popup isOpen={isOpen} close={close}>
      <form className="user-form" validate>
        {isNewUser ? (
          <>
            <h3 className="user-form__title">Sign up</h3>
            <label className="user-form__label">
              Email
              <input
                className="user-form__input"
                type="email"
                name="email"
                placeholder="Enter email"
                minLength="6"
                maxLength="30"
              ></input>
              <span className="user-form__error"></span>
            </label>
            <label className="user-form__label">
              Password
              <input
                className="user-form__input"
                type="password"
                name="password"
                placeholder="Enter password"
                minLength="6"
                maxLength="30"
              ></input>
              <span className="user-form__error"></span>
            </label>
            <label className="user-form__label">
              Username
              <input
                className="user-form__input"
                type="text"
                name="username"
                placeholder="Enter your username"
                minLength="2"
                maxLength="30"
              ></input>
              <span className="user-form__error"></span>
            </label>
            <button className="user-form__button" type="submit" disabled>
              Sign up
            </button>
            <p className="user-form__text">
              or{" "}
              <span className="user-form__link" onClick={switchForm}>
                Sign in
              </span>
            </p>
          </>
        ) : (
          <>
            <h3 className="user-form__title">Sign in</h3>
            <label className="user-form__label">
              Email
              <input
                className="user-form__input"
                type="email"
                name="email"
                placeholder="Enter email"
                minLength="6"
                maxLength="30"
              ></input>
              <span className="user-form__error"></span>
            </label>
            <label className="user-form__label">
              Password
              <input
                className="user-form__input"
                type="password"
                name="password"
                placeholder="Enter password"
                minLength="6"
                maxLength="30"
              ></input>
              <span className="user-form__error"></span>
            </label>
            <button className="user-form__button" type="submit" disabled>
              Sign in
            </button>
            <p className="user-form__text">
              or{" "}
              <span className="user-form__link" onClick={switchForm}>
                Sign up
              </span>
            </p>
          </>
        )}
      </form>
    </Popup>
  );
}

export default PopupWithForm;
