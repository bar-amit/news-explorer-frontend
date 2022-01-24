import { useState } from 'react';
import "./SearchForm.css";

function SearchForm({onSubmit}) {
  const [keyword, setKeyword] = useState("");

  function onInputChange(e){
    setKeyword(e.target.value);
  }

  function onFormSubmit(e){
    e.preventDefault();

    onSubmit(keyword);
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
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
