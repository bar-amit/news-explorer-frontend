import { useState } from 'react';
import NewsCard from "../NewsCard/NewsCard";

import "./NewsCardList.css";

function NewsCardList({cards}) {
  const [cardList, setCardList] = useState(cards.slice(0,3));
  const [index, setIndex] = useState(3);

  function getCards(){
    const newCards = [];
    for(let i = 0 ; i<3 ; i++){
      let currentIndex = index + i < cards.length ? index + i : index + i - cards.length;
      newCards.push(cards[currentIndex]);
    }
    setCardList(cardList.concat(newCards));
    setIndex(index + 3 < cards.length ? index + 3 : index + 3 - cards.length);
  }

  return (
    <section className="results">
      <h3 className="results__title">Search results</h3>
      <ul className="news-card-list">
          {cardList.map((c,idx) => <NewsCard {...c} key={idx} />)}
      </ul>
      <button className="results__button" type="button" onClick={getCards}>Show more</button>
    </section>
  );
}

export default NewsCardList;