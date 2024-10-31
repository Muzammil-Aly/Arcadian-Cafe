import React, { useState } from "react";
import "./BookTable.css";

const BookTable = ({ styles, Heading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "Gulberg",
    date: "",
    time: "00:00",
    guests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div style={styles?.container} className="book-table-form">
        <h2> {Heading || "Book Your Table"} </h2>
        <form onSubmit={handleSubmit}>
          <div className="field-one">
            <div className="form-group">
              <label htmlFor="name"></label>

              <input
                placeholder="Your name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                placeholder="Your email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone"></label>
            <input
              placeholder="Your phone"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="branch"></label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            >
              <option value="Gulberg">Gulberg</option>
              <option value="Emporium Mall">Emporium Mall</option>
              <option value="Packages Mall">Packages Mall</option>
              <option value="DHA Phase 6">DHA Phase 6</option>
            </select>
          </div>
          <div className="field-one">
            <div className="form-group">
              <label htmlFor="date"></label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date || "-/-/-/"}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time"></label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests"></label>

            <input
              type="text"
              id="guests"
              name="guests"
              placeholder="No.of guests"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="book-table-button">
            <button type="submit" className="btn-submit">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookTable;
