import "../styles/Home.scss";
import Particles from "../components/Particles";
import Btn from "../components/Btn";

function Home() {
  return (
    <div className="home">
      <div className="home__module">
        <h1 className="home__title">María Ripley</h1>
        <div className="home__buttons">
          <Btn name="Portfolio"></Btn>
          <Btn name="About Me"></Btn>
          <Btn name="Download my CV"></Btn>
        </div>
      </div>

      <Particles />
    </div>
  );
}

export default Home;
