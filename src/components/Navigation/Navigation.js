import './Navigation.css';

function Navigation({ signUser }) {
  return (
    <nav className="navigation">
      <ul className="navigation__link-list">
        <li className="navigation__active-link">
          <a className="navigation__link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="navigation__link" href="#">
            Saved articles
          </a>
        </li>
        <li className="navigation__button">
          <a className="navigation__link" href="#" onClick={signUser}>
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;