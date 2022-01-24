import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news__header">
      <h2 className="saved-news__title">Saved articles</h2>
      <p className="saved-news__message">Elise, you have 5 saved articles</p>
      <p className="saved-news__keywords">
        <span className="saved-news__keywords-line">By keywords: </span>
        Nature, Yellowstone, and 2 other
      </p>
    </section>
  );
}

export default SavedNewsHeader;
