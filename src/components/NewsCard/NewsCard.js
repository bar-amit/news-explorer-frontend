import './NewsCard.css';

function NewsCard({image, title, link, text, source, date}){
    return (
      <li className="news-card">
        <img className="news-card__image" src={image} />
        <p className="news-card__date">{date}</p>
        <h4 className="news-card__title">{title}</h4>
        <p className="news-card__text">{text}</p>
        <a className="news-card__source" href={link}>{source}</a>
        <button className="news-card__button" type="button">
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
              stroke-width="2"
            />
          </svg>
        </button>
      </li>
    );
}

export default NewsCard;