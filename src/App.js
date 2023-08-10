import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import News from "./pages/News";
import Team from "./pages/Team";
import Matches from "./pages/Matches";
import HeroSection from "./components/HeroSection";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/team" element={<Team />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <HeroSection />
      </div>
    </React.Fragment>
  );
}

export default App;
