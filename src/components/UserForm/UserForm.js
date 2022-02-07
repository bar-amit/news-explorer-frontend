import "./UserForm.css";

function UserForm({ children, submit, title, buttonText, formError, isValid }) {
  return (
    <form className="user-form" validate="true" onSubmit={submit}>
      <h3 className="user-form__title">{title}</h3>
      {children}
      <button className="user-form__button" type="submit" disabled={!isValid}>
        <span className="user-form__error user-form__error_button">
          {formError}
        </span>
        {buttonText}
      </button>
    </form>
  );
}

export default UserForm;
