import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
import useForm from "../../utils/useForm";
import UserForm from "../UserForm/UserForm";

function SignUpForm({ switchForm, close, openMessage }) {
  const { Api } = useContext(UserContext);

  const [
    { email, password, name },
    { email: emailError, password: passwordError, naem: nameError },
    isValid,
    handleChange,
  ] = useForm({ inputs: ["email", "password", "name"] });

  const [buttonText, setButtonText] = useState("Sign up");
  const [formError, setFormError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setButtonText("Loading...");
    Api.signUp({ email, password, name })
      .then((res) => {
        close();
        openMessage(res.email === email);
      })
      .catch((err) => {
        if (err.status === 409) {
          setFormError("Email already exists");
        } else {
          setFormError("An error occured on the server.");
        }
      })
      .finally(() => setButtonText("Sign up"));
  }
  return (
    <>
      <UserForm
        title="Sign up"
        submit={handleSubmit}
        buttonText={buttonText}
        formError={formError}
        isValid={isValid}
      >
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
            onChange={handleChange}
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
            onChange={handleChange}
          ></input>
          <span className="user-form__error">{passwordError}</span>
        </label>
        <label className="user-form__label">
          Username
          <input
            className="user-form__input"
            type="text"
            name="name"
            placeholder="Enter your username"
            minLength="2"
            maxLength="30"
            value={name}
            onChange={handleChange}
          ></input>
          <span className="user-form__error">{nameError}</span>
        </label>
      </UserForm>
      <p className="user-form__text">
        or{" "}
        <span className="user-form__link" onClick={switchForm}>
          Sign in
        </span>
      </p>
    </>
  );
}

export default SignUpForm;
