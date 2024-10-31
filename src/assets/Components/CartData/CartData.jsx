import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CartData.css";

const CartData = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalCost, setTotalCost] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    country: "",
    state: "",
    postalCode: "",
    city: "",
  });
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const handleAddressFormToggle = () => setShowAddressForm(!showAddressForm);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));

    if (name === "country") {
      setAddress((prevAddress) => ({
        ...prevAddress,
        state: "",
      }));
      fetchStates(value);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) throw new Error("Failed to fetch countries");
      const data = await response.json();
      const countryList = data.map((country) => country.name.common);
      setCountries(countryList);
      if (countryList.length > 0) {
        setAddress((prev) => ({ ...prev, country: countryList[0] }));
        fetchStates(countryList[0]);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const statesOfPakistan = [
    "Punjab",
    "Sindh",
    "Khyber Pakhtunkhwa",
    "Balochistan",
    "Gilgit-Baltistan",
    "Azad Jammu and Kashmir",
  ];

  const fetchStates = async (country) => {
    if (country === "Pakistan") {
      setStates(statesOfPakistan);
      return;
    }

    try {
      const response = await fetch(
        `https://api.example.com/states?country=${country}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Fetched states data:", data);

      if (data && data.states) {
        setStates(data.states);
      } else {
        console.error("Unexpected response structure:", data);
        setStates([]);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
      setStates([]);
    }
  };

  const handleAddressUpdate = () => {
    setShowAddressForm(false);
  };

  const deliveryCharge = 250;
  const taxRate = 0.16;

  useEffect(() => {
    fetchCountries();
  }, []);
  useEffect(() => {
    if (location.state && location.state.cartItem) {
      const newCartItem = location.state.cartItem;

      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems, newCartItem];
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      });

      navigate(location.pathname, { replace: true });
    }
  }, [location.state, navigate, location.pathname]);

  useEffect(() => {
    const calculatedTotal = cartItems.reduce(
      (sum, item) => sum + item.total,
      0
    );
    const calculatedTax = calculatedTotal * taxRate;
    const calculatedFinalTotal = calculatedTotal + calculatedTax + shipping;

    setTotalCost(calculatedTotal);
    setTaxAmount(calculatedTax);
    setFinalTotal(calculatedFinalTotal);
  }, [cartItems, shipping]);

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;

    const price = extractNumber(
      updatedCartItems[index].selectedDish
        ? updatedCartItems[index].selectedDish.PriceRange
        : updatedCartItems[index].item.priceRange
    );
    updatedCartItems[index].total = newQuantity * price;

    setCartItems(updatedCartItems);
  };

  const extractNumber = (price) => {
    if (!price || typeof price !== "string") return 0;
    return parseFloat(price.replace(/[^\d.]/g, "").replace(",", ""));
  };

  const handleShippingChange = (event) => {
    const selectedShipping = event.target.value;
    setShipping(selectedShipping === "delivery" ? deliveryCharge : 0);
  };

  const handleUpdateCart = () => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.forEach((item) => {
      const price = extractNumber(
        item.selectedDish ? item.selectedDish.PriceRange : item.item.priceRange
      );
      item.total = item.quantity * price;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  if (!cartItems.length) {
    return (
      <div className="empty-cart">
        <div className="cart-heading-main">
          <h1 className="cart-heading">Cart</h1>
          <div className="horizontal-line"></div>
          <div className="cart-image">
            <img
              src="https://www.pngkey.com/png/detail/365-3654131_cart-empty-image-your-cart-is-empty.png"
              alt="Empty cart"
            />
            <p>Your cart is currently empty.</p>
          </div>
        </div>
        <button className="return-to-menu" onClick={() => navigate("/menu")}>
          Return to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Cart</h1>

      <table className="cart-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((cartItem, index) => (
            <tr key={index}>
              <td>
                <button
                  className="remove-item"
                  onClick={() => handleRemoveItem(index)}
                >
                  ×
                </button>
              </td>
              <td>
                <img
                  src={cartItem.item.image}
                  alt={cartItem.item.name}
                  className="product-thumbnail"
                />
              </td>
              <td>
                {cartItem.selectedDish
                  ? cartItem.selectedDish.name
                  : cartItem.item.name}
              </td>
              <td>
                RS
                {cartItem.selectedDish
                  ? cartItem.selectedDish.PriceRange
                  : cartItem.item.priceRange}
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={cartItem.quantity}
                  onChange={(e) =>
                    handleQuantityChange(index, parseInt(e.target.value, 10))
                  }
                  className="quantity"
                />
              </td>
              <td>RS{cartItem.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5"></td>
            <td>
              <button onClick={handleUpdateCart}>Update Cart</button>
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="cart-totals">
        <h2 className="cart-totals-heading">Cart totals</h2>
        <table>
          <tbody>
            <tr className="table-row">
              <th className="table-row-one" colSpan="2">
                <span>Subtotal</span>
                <span className="subtotal-price">
                  RS{totalCost.toLocaleString()}
                </span>
              </th>
            </tr>

            <tr className="table-row-shipping">
              <th
                className="table-row-one shipping-row"
                colSpan="2"
                rowSpan="2"
              >
                <span>Shipping</span>
                <span className="subtotal-price">
                  <p>
                    <label className="circle-option">
                      <input
                        type="radio"
                        name="shipping"
                        value="delivery"
                        onChange={handleShippingChange}
                      />
                      <span className="custom-circle"></span>
                      Delivery Charges:
                      <span className="cartpara">
                        RS{deliveryCharge.toLocaleString()}
                      </span>
                    </label>
                  </p>
                  <p>
                    <label className="circle-option">
                      <input
                        type="radio"
                        name="shipping"
                        value="takeaway"
                        onChange={handleShippingChange}
                      />
                      <span className="custom-circle"></span>
                      Take-away
                    </label>
                  </p>
                  <p>
                    Shipping to <span className="cartpara">Punjab</span>
                  </p>
                  <button
                    className="change-address"
                    onClick={handleAddressFormToggle}
                  >
                    CHANGE ADDRESS
                  </button>

                  {showAddressForm && (
                    <form
                      className="address-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleAddressUpdate();
                      }}
                    >
                      <div className="form-field">
                        <label>
                          <select
                            className="field-width"
                            name="country"
                            value={address.country}
                            onChange={handleAddressChange}
                            required
                          >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                      <div className="form-field">
                        <label>
                          <select
                            className="field-width"
                            name="state"
                            value={address.state}
                            onChange={handleAddressChange}
                            required
                          >
                            <option value="">Select State</option>
                            {states.map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                      <div className="form-field">
                        <label>
                          <input
                            className="field-width field-code"
                            type="text"
                            name="postalCode"
                            value={address.postalCode}
                            onChange={handleAddressChange}
                            placeholder="Postal Code"
                            required
                          />
                        </label>
                      </div>
                      <div className="form-field">
                        <label>
                          <input
                            className="field-width field-code"
                            type="text"
                            name="city"
                            value={address.city}
                            onChange={handleAddressChange}
                            required
                            placeholder="City"
                          />
                        </label>
                      </div>
                      <div className="form-field">
                        <button className="update-address" type="submit">
                          Update
                        </button>
                      </div>
                    </form>
                  )}
                </span>
              </th>
            </tr>

            <tr className="table-row">
              <th colSpan="2" className="table-row-one">
                <span>Total RS</span>
                <span>
                  {finalTotal.toLocaleString()} (includes RS
                  {taxAmount.toLocaleString()} Tax)
                </span>
              </th>
            </tr>
            <div className="check-out-button-row">
              <button className="check-out-button">PROCEED TO CHECKOUT</button>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartData;
