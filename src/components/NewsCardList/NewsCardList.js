import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({cards}) {
    return (
      <section className="results">
        <h3 className="results__title">Search results</h3>
        <ul className="news-card-list">
            {cards.map(c => <NewsCard {...c} />)}
        </ul>
        <button type="button">Show more</button>
      </section>
    );
}

export default NewsCardList;