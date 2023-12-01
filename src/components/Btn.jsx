import { NavLink } from "react-router-dom";
import "../styles/Btn.scss";

function Btn(props) {
  return (
    <>
      <NavLink to={props.path} className="btn">
        {props.name}
      </NavLink>
    </>
  );
}

export default Btn;
