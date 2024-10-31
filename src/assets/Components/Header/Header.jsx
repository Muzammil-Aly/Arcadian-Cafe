import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartTotalWithTax, setCartTotalWithTax] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDishClick = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    const cartItems = savedCart ? JSON.parse(savedCart) : [];

    const taxRate = 0.16;

    const total = cartItems.reduce((acc, item) => acc + item.total, 0);
    const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const totalWithTax = (total + total * taxRate).toFixed(2);

    setCartTotal(total);
    setCartTotalWithTax(totalWithTax);
    setCartQuantity(quantity);
  }, [location]);

  const isHome = location.pathname === "/";
  const isMenu = location.pathname === "/menu";
  const isCart = location.pathname === "/cart";

  return (
    <header
      className={`header ${isHome ? "home-layout" : "row-layout"} ${
        isMenu || isCart ? "menu-color" : ""
      }`}
    >
      <div className="header_img">
        <img
          src="https://arcadiancafe.com/wp-content/uploads/2021/08/logo-silver-1024x1024.png"
          alt="header_image"
        />
      </div>

      <div className="header-navigation-elements">
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {!isHome && (
        <div className={`header icon-addtocart`}>
          <button className="add-to-cart-button" onClick={handleDishClick}>
            <span className="icon-cart-quantity">{cartQuantity}</span>
            <span className="icon-cart-price">
              RS{cartTotalWithTax.toLocaleString()}{" "}
            </span>
            <div className="cart-icon-logo">
              <ShoppingCartIcon className="shoppingCart" />
            </div>
          </button>
        </div>
      )}

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
