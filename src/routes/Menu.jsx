import { NavLink } from "react-router-dom";
import "../styles/Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <ion-icon name="menu-outline"></ion-icon>
      <nav className="menu__nav">
        <ul className="menu__list">
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
