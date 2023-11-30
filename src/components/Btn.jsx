import "../styles/Btn.scss";

function Btn(props) {
  return (
    <>
      <button className="btn">{props.name}</button>
    </>
  );
}

export default Btn;
