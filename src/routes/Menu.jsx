import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.scss';
import Hamburger from 'hamburger-react';

function Menu() {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <div className="menu">
      <Hamburger
        className="burguer-menu"
        toggled={isOpenMenu}
        toggle={setOpenMenu}
        color="#fff"
      />
      <nav className={`menu__nav ${isOpenMenu ? 'show' : ''}`}>
        <ul className={`menu__list ${isOpenMenu ? 'vertical' : ''}`}>
          <li className="menu__item">
            <NavLink className={'menu__link'} to={'/'}>
              Home
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={'menu__link'} to={'/about'}>
              About Me
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={'menu__link'} to={'/portfolio'}>
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
