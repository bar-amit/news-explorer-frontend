import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import Search from "../Search/Search";
import useSearch from "../../utils/useSearch";

import "./Main.css";

function Main() {
  const [runPreloader, setRunPreloader] = useState(false);
  const [showError, setShowError] = useState(false);
  const [enableNotFound, setEnableNotFound] = useState(false);
  const [cards, lastKeyword, searchNews] = useSearch();

  function onSearch(query){
    setShowError(false);
    setRunPreloader(true);
    searchNews(query)
      .finally(() => {
        setRunPreloader(false);
        setEnableNotFound(true);
      })
      .catch(err => setShowError(true));
  }

  return (
    <main className="main">
      <Search searchFunction={onSearch} />
      {showError ? (
        <div className="search-error">
          <h2 className="search-error__title">Couldn't find articles</h2>
        </div>
      ) : cards.length === 0 ? (
        runPreloader ? <Preloader /> : (enableNotFound && <NotFound />)
      ) : (
        <SearchResults cards={cards} />
      )}
      <About />
    </main>
  );
}

export default Main;
