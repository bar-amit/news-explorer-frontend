import NewsCardList from '../NewsCardList/NewsCardList';
import About from "../About/About";
import SearchForm from '../SearchForm/SearchForm';

function Main() {
    return (
      <main className="main">
        <section className="search">
          <h2 className="search__title">What's going on in the world?</h2>
          <p className="search__text">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm />
        </section>
        <NewsCardList cards={[]} />
        <About />
      </main>
    );
}

export default Main;