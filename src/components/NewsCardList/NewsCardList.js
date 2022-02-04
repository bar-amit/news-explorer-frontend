import NewsCard from "../NewsCard/NewsCard";
import KeywordIcon from "../KeywordIcon/KeywordIcon";

import "./NewsCardList.css";

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
  "December",
];

function formatDate(publishedAt) {
  const date = new Date(publishedAt);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function NewsCardList({ data, button, register }) {
  let cardData = [];
  if (data.length > 0 && !data[0].link) {
    cardData = data.map(
      ({
        title,
        url: link,
        urlToImage: image,
        source: { name: source },
        publishedAt,
        description: text,
      }) => {
        return {
          title,
          text,
          source,
          image,
          link,
          date: formatDate(publishedAt),
        };
      }
    );
  } else cardData = data;

  const Button = button;

  return (
    <ul className="news-card-list">
      {cardData.map((c, idx) => (
        <NewsCard {...c} key={idx}>
          <Button article={c} register={register} />
          {c.keyword ? <KeywordIcon keyword={c.keyword} /> : ""}
        </NewsCard>
      ))}
    </ul>
  );
}

export default NewsCardList;

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
