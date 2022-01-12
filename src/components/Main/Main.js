import NewsCardList from '../NewsCardList/NewsCardList';
import About from "../About/About";
import Search from '../Search/Search';

import { cards } from '../../utils/fakeData';
import './Main.css';

function Main() {
    return (
      <main className="main">
        <Search />
        <NewsCardList cards={cards} />
        <About />
      </main>
    );
}

export default Main;