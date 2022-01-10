import saveIcon from "../../images/bookmark-icon.svg";

function NewsCard({image, title, link, text, source, date}){
    return (
      <li className="news-card">
        <a href={link}>
          <img className="news-card__image" src={image} />
          <span className="news-card__date">{date}</span>
          <h4 className="news-card__title">{title}</h4>
          <p className="news-card__text">{text}</p>
          <span className="news-card__source">{source}</span>
          <button type="button">
            <img src={saveIcon} />
          </button>
        </a>
      </li>
    );
}

export default NewsCard;