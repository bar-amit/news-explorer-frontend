import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext/UserContext";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import DeleteArticleButton from "../DeleteArticleButton/DeleteArticleButton";

import "./SavedNews.css";

function SavedNews() {
  const { articles, Api } = useContext(UserContext);

  useEffect(() => {
    Api.getArticles();
  });

  return (
    <main className="saved-news">
      <SavedNewsHeader />
      <section className="saved-news__container">
        <NewsCardList data={articles} button={DeleteArticleButton} />
      </section>
    </main>
  );
}

export default SavedNews;
