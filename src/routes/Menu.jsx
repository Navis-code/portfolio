import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.scss";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="menu">
      <ion-icon
        name="menu-outline"
        className={`${showMenu ? "open-menu" : ""}`}
        onClick={toggleMenu}
      ></ion-icon>
      <nav className={`menu__nav ${showMenu ? "show" : ""}`}>
        <ul className={`menu__list ${showMenu ? "vertical" : ""}`}>
          <li className="menu__item">
            <NavLink className={"menu__link"} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={"menu__link"} to={"/about"}>
              About Me
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={"menu__link"} to={"/portfolio"}>
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
