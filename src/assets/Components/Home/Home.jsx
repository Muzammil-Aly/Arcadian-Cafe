// Home.js

import React from "react";
import "./Home.css";
import PopularDishes from "../PopularDishes/PopoularDishes";
import BookTable from "../BookTable/BookTable";
import MapComponent from "../MapComponent/MapComponent";
import PrestigiousDining from "./PrestigiousDining";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <iframe
          className="background-video"
          src="https://www.youtube.com/embed/SKaYy0AHwXo?start=3&autoplay=1&controls=0&rel=0&playsinline=1&mute=1&loop=1&playlist=SKaYy0AHwXo&modestbranding=1&showinfo=0"
          title="Background Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        <div className="video-overlay"></div>

        <div className="home-content">
          <div className="home-heading">
            <h2>Now Open</h2>
          </div>
          <div className="home-text">
            <p>Fairways Commercial, Defence Raya Phase 6, Lahore.</p>
          </div>
        </div>
      </div>

      <PopularDishes />
      <BookTable />
      <PrestigiousDining />
      <MapComponent />
    </>
  );
};

export default Home;
