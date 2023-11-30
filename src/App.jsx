import { Routes, Route } from "react-router-dom";
import Menu from "./routes/Menu";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import "./app.scss";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </>
  );
}

export default App;
