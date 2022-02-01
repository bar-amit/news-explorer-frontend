import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
import useForm from "../../utils/useForm";

function SignInForm({ switchForm, close }) {
  const { Api } = useContext(UserContext);

  const [
    { email, password },
    { email: emailError, password: passwordError },
    isValid,
    onChange,
  ] = useForm({inputs: ["email", "password"]});

  const [buttonText, setButtonText] = useState("Sign in");
  const [formError, setFormError] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    setButtonText("Loading...");
    Api.signIn({ email, password })
    .then(() => close())
    .catch(err => {
      if(err.status === 401) setFormError("Bad email and/or password");
      else setFormError("An error occured on the server.");
    })
    .finally(() => setButtonText("Sign in"));
  }

  return (
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
          value={email}
          onChange={onChange}
        ></input>
        <span className="user-form__error">{emailError}</span>
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
          value={password}
          onChange={onChange}
        ></input>
        <span className="user-form__error">{passwordError}</span>
      </label>
      <button
        className="user-form__button"
        type="submit"
        disabled={!isValid}
        onClick={handleSubmit}
      >
        <span className="user-form__error user-form__error_button">
          {formError}
        </span>
        {buttonText}
      </button>
      <p className="user-form__text">
        or{" "}
        <span className="user-form__link" onClick={switchForm}>
          Sign up
        </span>
      </p>
    </>
  );
}

export default SignInForm;
