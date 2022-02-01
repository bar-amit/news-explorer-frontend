import { useState, useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
import KeywordContext from "../../contexts/KeywordContext/KeywordContext";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import Search from "../Search/Search";

import "./Main.css";

function Main({ search: [cards, lastKeyword, searchNews] }) {
  const { Api } = useContext(UserContext);

  const [runPreloader, setRunPreloader] = useState(false);
  const [showError, setShowError] = useState(false);
  const [enableNotFound, setEnableNotFound] = useState(false);

  function onSearch(query) {
    setShowError(false);
    setRunPreloader(true);
    searchNews(query)
      .finally(() => {
        setRunPreloader(false);
        setEnableNotFound(true);
      })
      .catch((err) => setShowError(true));
  }

  useEffect(() => {
    Api.getArticles().catch((e) => {});
  });

  return (
    <main className="main">
      <KeywordContext.Provider value={lastKeyword}>
        <Search searchFunction={onSearch} />
        {showError ? (
          <div className="search-error">
            <h2 className="search-error__title">
              Sorry, something went wrong during the request. There may be a
              connection issue or the server may be down. Please try again
              later.
            </h2>
          </div>
        ) : cards.length === 0 ? (
          runPreloader ? (
            <Preloader />
          ) : (
            enableNotFound && <NotFound />
          )
        ) : (
          <SearchResults cards={cards} />
        )}
        <About />
      </KeywordContext.Provider>
    </main>
  );
}

export default Main;
