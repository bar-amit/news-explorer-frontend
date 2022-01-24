import "./SaveArticleButton.css";

function SaveArticleButton() {
  return (
    <button
      className="news-card__button news-card__button_type_save"
      type="button"
    >
      <svg
        width="14"
        height="19"
        viewBox="0 0 14 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="news-card__bookmark"
          d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z"
          stroke="#B6BCBF"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}

export default SaveArticleButton;
