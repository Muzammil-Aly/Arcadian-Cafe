import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sub-content">
          <div className="footer-logo-image">
            <img
              src="https://arcadiancafe.com/wp-content/uploads/2021/03/white.png"
              alt="img-logo"
            />
          </div>

          <div className="footer-sub-content-text-one">
            <div className="footer-heading-title">
              <h2 className="footer-headings  ">Make a Reservation</h2>
            </div>
            <p>Your table reservation awaits you</p>
            <p className="m-8 ml-11">
              <a href="tel:03219555400">
                <span className=" text-white font-bold">0321 9555400</span>
              </a>
            </p>
          </div>
          <div className="footer-sub-content-text-two">
            <h2 className="footer-headings">Opening Hours</h2>
            <p>
              Monday Saturday:{" "}
              <span className="m-2 text-white font-bold">12:30 – 00:00</span> –
              Sunday:
              <br></br>
              <span className=" footer-sub-content-text  text-white font-bold">
                13:30 – 00:00
              </span>
            </p>
          </div>
          <div className="footer-sub-content-text-three">
            <h2 className="footer-headings">social media</h2>
            <ul className="social-media">
              <li className="social-media-bg">
                <a href="#" aria-label="Facebook">
                  <FaFacebookF className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <FaTwitter className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-sub-content-two">
          <h2 className="footer-headings">Our Locations</h2>
          <div className="footer-sub-content-two-content">
            <p>
              Gulberg Branch:
              <br></br> 28 K Gulberg 2 Opposite Mobilink House – <br></br>In
              Mini Market Lahore
            </p>
            <p>
              Emporium Mall: <br></br> Ground Floor Shop # G19, Emporium Mall{" "}
              <br></br>Lahore
            </p>
            <p>
              Packages Mall:
              <br></br>
              G21-22 Ground Floor, Gate 4, Packages
              <br></br>Mall Lahore
            </p>
            <p>
              DHA Phase 6: <br></br> Fairways Commercial, Defence Raya phase{" "}
              <br></br> 6, Lahore
            </p>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <p className="copyright">
          Copyright © 2023 Arcadian Cafe | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
