import NewsCard from "../NewsCard/NewsCard";

import "./NewsCardList.css";

function NewsCardList({data}) {

  return (
    <ul className="news-card-list">
        {data.map((c,idx) => <NewsCard {...c} key={idx} />)}
    </ul>
  );
}

export default NewsCardList;