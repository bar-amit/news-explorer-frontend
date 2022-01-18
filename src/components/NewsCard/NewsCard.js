import './NewsCard.css';

// TODO: make truncate function.
// function truncate(text, limit, ellipsis='...'){
//   if(text.length > limit)
//     return text.slice(0,limit-3);
//   return text;
// }

// const MAX_TEXTLENGTH = {
//   'w-1440': 93,
//   'w-768': 
// }

function NewsCard({image, title, link, text, source, date, children}){
    return (
      <li className="news-card">
        <img className="news-card__image" src={image} />
        <p className="news-card__date">{date}</p>
        <h4 className="news-card__title">{title}</h4>
        <p className="news-card__text">{text}</p>
        <a className="news-card__source" href={link}>{source}</a>
        {children}
      </li>
    );
}

export default NewsCard;