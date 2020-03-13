import React from "react";
import Nav from "./Nav";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import HeroCard from "./HeroCard";

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroCard />
      <ScrollToTop />
    </div>
  );
}

export default App;
