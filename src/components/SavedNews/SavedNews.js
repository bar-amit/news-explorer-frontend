import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

import "./SavedNews.css";
import { savedCards } from "../../utils/fakeData";

function SavedNews() {
    return (
      <main className="saved-news">
        <SavedNewsHeader />
        <section className="saved-news__container">
          <NewsCardList data={savedCards} />
        </section>
      </main>
    );
}

export default SavedNews;