import React from "react";
import Cards from "./components/Blog";
import AboutCLI from "./components/AboutCLI";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DownloadTorrent from "./components/DownloadTorrent";


function App() {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <AboutCLI />
        <DownloadTorrent />
        <Cards />
      </div>
  );
}

export default App;
