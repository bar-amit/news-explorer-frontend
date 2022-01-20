import NewsCard from "../NewsCard/NewsCard";
import KeywordIcon from "../KeywordIcon/KeywordIcon";

import "./NewsCardList.css";

function NewsCardList({ data, buttons }) {
  return (
    <ul className="news-card-list">
      {data.map((c, idx) => (
        <NewsCard {...c} key={idx}>
          {buttons}
          {c.keyword ? <KeywordIcon keyword={c.keyword} /> : ""}
        </NewsCard>
      ))}
    </ul>
  );
}

export default NewsCardList;
