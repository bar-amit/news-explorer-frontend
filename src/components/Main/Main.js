import SearchResults from '../SearchResults/SearchResults';
import About from "../About/About";
import Search from '../Search/Search';

import { cards } from '../../utils/fakeData';
import './Main.css';


function Main() {
    return (
      <main className="main">
        <Search />
        <SearchResults cards={cards} />
        <About />
      </main>
    );
}

export default Main;