import NewsCardList from '../NewsCardList/NewsCardList';
import About from "../About/About";
import Search from '../Search/Search';

import './Main.css';

function Main() {
    return (
      <main className="main">
        <Search />
        <NewsCardList cards={[]} />
        <About />
      </main>
    );
}

export default Main;