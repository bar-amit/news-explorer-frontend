import { useContext } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
import KeywordContext from "../../contexts/KeywordContext/KeywordContext";
import "./SaveArticleButton.css";

function SaveArticleButton({ article, register }) {
  const keyword = useContext(KeywordContext);
  const { Api, user, articles } = useContext(UserContext);

  function saveArticle() {
    Api.saveArticle({ keyword, ...article });
  }

  function deleteArticle() {
    Api.deleteArticle(articles.find((a) => a.title === article.title)._id);
  }

  function handleClick() {
    if (!user) {
      register(false);
    } else if (articles.some((a) => a.title === article.title)) {
      deleteArticle();
    } else {
      saveArticle();
    }
  }

  return (
    <button
      className={`news-card__button news-card__button_type_save ${
        !user && "news-card__button_type_no-user"
      }`}
      type="button"
      onClick={handleClick}
    >
      <svg
        width="14"
        height="19"
        viewBox="0 0 14 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`news-card__bookmark ${
            articles.some((a) => a.title === article.title) &&
            "news-card__bookmark_active"
          }`}
          d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z"
          stroke="#B6BCBF"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}

export default SaveArticleButton;
