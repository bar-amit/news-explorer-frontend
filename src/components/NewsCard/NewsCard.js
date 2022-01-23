import "./NewsCard.css";

function NewsCard({ image, title, link, text, source, date, children }) {
  return (
    <li className="news-card">
      <img className="news-card__image" src={image} alt={title} />
      <p className="news-card__date">{date}</p>
      <h4 className="news-card__title">{title}</h4>
      <p className="news-card__text">{text}</p>
      <a className="news-card__source" href={link}>
        {source}
      </a>
      {children}
    </li>
  );
}

export default NewsCard;
