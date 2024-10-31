import React from "react";
import "./Contactus.css";
import MapComponent from "../MapComponent/MapComponent";
import BookTable from "../BookTable/BookTable";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const customStyles = {
  container: {
    padding: "100px",
  },

  height: "70vh",
  width: "70vw",
};
const contactDetails = {
  phone: {
    name: "PHONE:",
    number: "+923219555400",
  },
  email: {
    name: "EMAIL:",
    emailAddress: "info@arcadiancafe.com",
  },
  branches: {
    headingName: "ADDRESS",
    list: [
      {
        branchesName: "Gulberg Branch",
        address:
          "28 K Gulberg 2 (Opposite Mobilink House – In Mini Market) Lahore.",
      },
      {
        branchesName: "Emporium Mall",
        address: "Ground Floor Shop # G-19 , Emporium Mall Lahore.",
      },
      {
        branchesName: "Packages Mall",
        address: "G21-22 Ground Floor, Gate 4, Packages Mall Lahore.",
      },
    ],
  },
};

const Contactus = () => {
  return (
    <>
      <div className="contactus-main">
        <div className="contact-us-main-heading">
          <h2 className="contact-us-heading">call or visit us</h2>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon-one">
              <div className="contact-icons">
                <FaPhone className="contact-icon" />
                <h2 className="contact-item-heading-one">
                  {contactDetails.phone.name}
                </h2>
                <h2 className="contact-item-heading-two para">
                  {contactDetails.phone.number}
                </h2>
              </div>
            </div>
          </div>
          <div className="contact-icons">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-item-heading-one  ">
              <h2> {contactDetails.branches.headingName}</h2>
            </div>

            {contactDetails.branches.list.map((branch, index) => (
              <div key={index} className="branch-item">
                <div className="contact-icons ">
                  <h2 className="branches-name para">{branch.branchesName}</h2>
                  <p className="branches-para">{branch.address}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className=" contact-icons">
              <FaEnvelope className="contact-icon" />
              <h2 className="contact-item-heading-one">
                {contactDetails.email.name}
              </h2>
              <h2 className="branches-para para">
                {contactDetails.email.emailAddress}
              </h2>
            </div>
          </div>
        </div>

        <div className="reservespot-main">
          <div className="reservespot-main-sub-container">
            <div className="reservespot-sub-container">
              <div className="map-component">
                <MapComponent styles={customStyles} />
                {/* < /> */}
              </div>
              <div className="booking-table">
                <BookTable
                  styles={customStyles}
                  Heading={"reserve your spot"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
