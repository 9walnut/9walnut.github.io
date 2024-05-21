import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
