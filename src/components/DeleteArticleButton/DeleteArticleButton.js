import "./DeleteArticleButton.css";

function DeleteArticleButton(){
    return (
      <button className="news-card__button news-card__button_type_delete" type="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="news-card__trash"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z"
            fill="#B6BCBF"
          />
        </svg>
      </button>
    );
}

export default DeleteArticleButton;