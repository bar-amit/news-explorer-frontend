import { useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import SaveArticleButton from "../SaveArticleButton/SaveArticleButton";

import "./SearchResults.css";

function SearchResults({ cards }) {
  const [cardList, setCardList] = useState(cards.slice(0, 3));
  const [index, setIndex] = useState(3);

  function getCards() {
    const newCards = [];
    for (let i = 0; i < 3; i++) {
      let currentIndex =
        index + i < cards.length ? index + i : index + i - cards.length;
      newCards.push(cards[currentIndex]);
    }
    setCardList(cardList.concat(newCards));
    setIndex(index + 3 < cards.length ? index + 3 : index + 3 - cards.length);
  }

  return (
    <section className="search-results">
      <h3 className="search-results__title">Search results</h3>
      <NewsCardList data={cardList} button={SaveArticleButton} />
      {cards.length - cardList.length > 0 && <button
        className="search-results__button"
        type="button"
        onClick={getCards}
      >
        Show more
      </button>}
    </section>
  );
}

export default SearchResults;
