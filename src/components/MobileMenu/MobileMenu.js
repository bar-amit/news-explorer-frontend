import { Link } from 'react-router-dom';

import './MobileMenu.css';

function MobileMenu() {
    return (
      <div className="mobile-menu">
        <div className="mobile-menu__container">
          <nav className="mobile-menu__navigation">
            <ul className="mobile-menu__list">
              <li className="mobile-menu__list-item">
                <Link className="mobile-menu__link">Home</Link>
              </li>
              <li className="mobile-menu__list-item">
                <Link className="mobile-menu__link">Saved articles</Link>
              </li>
              <li className="mobile-menu__list-item">
                <Link className="mobile-menu__link">Sign in</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}

export default MobileMenu;