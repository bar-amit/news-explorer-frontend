import "./NewsCard.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function NewsCard({ urlToImage: image, title, url: link, content: text, source: {name: source} , publishedAt, children }) {
  const date = new Date(publishedAt);

  return (
    <li className="news-card">
      <img className="news-card__image" src={image} alt={title} />
      <p className="news-card__date">{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</p>
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

// {
//   "source": {
//     "id": "wired",
//     "name": "Wired"
//   },
//   "author": "Will Knight",
//   "title": "Now You Can Rent a Robot Worker—for Less Than Paying a Human",
//   "description": "Automation is reaching more companies, imperiling some jobs and changing the nature of others.",
//   "url": "https://www.wired.com/story/rent-robot-worker-less-paying-human/",
//   "urlToImage": "https://media.wired.com/photos/61e1db9a844ec857b71382b4/191:100/w_1280,c_limit/Biz_GN_4.jpg",
//   "publishedAt": "2022-01-18T12:00:00Z",
//   "content": "Polar Manufacturing has been making metal hinges, locks, and brackets in south Chicago for more than 100 years. Some of the companys metal presseshulking great machines that loom over a workerdate fr… [+3236 chars]"
// }