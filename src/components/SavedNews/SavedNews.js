import NewsCard from "../NewsCard/NewsCard";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews({cards}) {
    return (
      <main className="saved-news">
        <SavedNewsHeader />
        <ul className="saved-news__list">
          {cards.map((c) => (
            <NewsCard {...c} />
          ))}
        </ul>
      </main>
    );
}

export default SavedNews;