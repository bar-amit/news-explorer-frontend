import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext/UserContext";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import DeleteArticleButton from "../DeleteArticleButton/DeleteArticleButton";

import "./SavedNews.css";

function SavedNews() {
  const { articles } = useContext(UserContext);

  const [keywordLine, setKeywordLine] = useState(getKeywords(articles));

  function getKeywords(articles) {
    let keywords = {};

    articles.forEach(({ keyword }) => {
      keywords[keyword] = keywords[keyword] + 1 || 1;
    });

    let orderdKeywords = Object.entries(keywords)
      .sort((k1, k2) => (k1[1] < k2[1] ? 1 : -1))
      .map((k) => k[0]);
    let amount = orderdKeywords.length;

    if (amount > 3)
      return `${orderdKeywords[0]}, ${orderdKeywords[1]}, and ${
        amount - 2
      } other`;
    return orderdKeywords.join(", ");
  }

  useEffect(() => {
    setKeywordLine(getKeywords(articles));
  }, [articles]);

  return (
    <main className="saved-news">
      <SavedNewsHeader line={keywordLine} amount={`${articles.length}`} />
      <section className="saved-news__container">
        <NewsCardList data={articles} button={DeleteArticleButton} />
      </section>
    </main>
  );
}

export default SavedNews;
