import Menu from "../routes/Menu";
import Logo from "./Logo";
import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
