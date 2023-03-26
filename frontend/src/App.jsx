import React from "react";
// import Analytics from "./components/Analytics";
import Cards from "./components/Blog";
import AboutCLI from "./components/AboutCLI";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DownloadTorrent from "./components/DownloadTorrent";
import CN from "./components/CN";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <AboutCLI />
        <DownloadTorrent />
        <CN />
        <Cards />
      </div>
  );
}

export default App;
