import React from "react";
import { useNavigate } from "react-router-dom";

const PrestigiousDining = () => {
  const navigate = useNavigate();

  return (
    <div>
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
            <h2>prestigious dinning</h2>
          </div>
          <div className="home-text">
            <button onClick={() => navigate("/menu")} className="order-now">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrestigiousDining;
