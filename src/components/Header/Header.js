import Navigation from "../Navigation/Navigation";
import './Header.css';

function Header({signUser}){
    return (
      <header className="header">
        <h1 className="header__title">NewsExplorer</h1>
        <Navigation signUser={signUser} />
      </header>
    );
}

export default Header;