import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onInputChange(e) {
    setKeyword(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();

    if (!keyword) setErrorMessage("Please enter a keyword");
    else if (errorMessage !== "") {
      setErrorMessage("");
      onSubmit(keyword);
    } else {
      onSubmit(keyword);
    }
  }

  return (
    <form className="search__form" onSubmit={onFormSubmit}>
      <input
        className="search__input"
        type="text"
        placeholder="Enter topic"
        value={keyword}
        onChange={onInputChange}
      ></input>
      <p className="search__error">{errorMessage}</p>
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
