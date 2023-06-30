import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import styled, { css } from "styled-components";

const color = ["#FFFF00", "#FF0000", "#FF33CC", "#00FF00"];

const Data = styled.div`
  span {
    // color: ${color[Math.floor(Math.random() * color.length)]};
    color: ${color[2]};
  }
`;

function App() {
  return (
    <Data className="main">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Data>
  );
}

export default App;
