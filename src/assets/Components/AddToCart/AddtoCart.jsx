import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddtoCart.css";

const AddtoCart = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [sum, setSum] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleCloseClick = () => {
    setIsImageOpen(false);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity > 0 ? newQuantity : 1);
  };

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
    const numericValue = extractNumber(dish.PriceRange);
    setSum(numericValue * quantity);
  };

  const handleClearClick = () => {
    setSelectedDish(null);
    setSum(0);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    const cartItem = {
      item,
      selectedDish,
      quantity,
      total: sum,
    };

    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    const itemExists = existingCartItems.some((existingItem) => {
      return (
        existingItem.item.id === cartItem.item.id &&
        (existingItem.selectedDish
          ? existingItem.selectedDish.id === cartItem.selectedDish?.id
          : !cartItem.selectedDish)
      );
    });

    if (!itemExists) {
      existingCartItems.push(cartItem);
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
      console.log("Item added to cart:", cartItem);
    } else {
      console.log("Item already exists in the cart.");
    }

    navigate("/cart");
  };

  useEffect(() => {
    if (selectedDish) {
      console.log("Selected Dish Price: ", selectedDish.PriceRange);
      console.log("Selected Dish Name: ", selectedDish.name);
      setSum(extractNumber(selectedDish.PriceRange) * quantity);
    }
  }, [selectedDish, quantity]);

  useEffect(() => {
    console.log("Selected Dish:", selectedDish);
  }, [selectedDish]);

  const extractNumber = (price) => {
    if (!price || typeof price !== "string") return 0;
    return parseFloat(price.replace(/[^\d.]/g, "").replace(",", "")); // Remove commas
  };

  if (!item) {
    return <p>No item found.</p>;
  }

  const mealTypes = item?.mealTypes || {};

  return (
    <>
      <div className="cart-section">
        <div className="cart-images">
          <a
            href={item.image}
            alt={item.name}
            className="item-image"
            onClick={handleImageClick}
          >
            <img src={item.image} alt={item.name} className="item-image" />
          </a>
        </div>

        <div className="cart-text">
          <h2 className="item-heading">{item.name}</h2>
          <p className="item-description">{item.description}</p>
          <p className="Price-range">{item.priceRange}</p>
          <h3 className="meal-type">
            {item.hasOptions ? "Meal type :" : " "}
            {selectedDish ? selectedDish.name : ""}
          </h3>

          <div className="boxes-container">
            {Object.keys(mealTypes).length > 0 &&
              Object.keys(mealTypes).map((typeKey, index) => (
                <button
                  key={index}
                  className="combine"
                  onClick={() => handleDishClick(mealTypes[typeKey])}
                >
                  {mealTypes[typeKey].name}
                </button>
              ))}
          </div>

          {selectedDish && (
            <div>
              <button className="clear-button" onClick={handleClearClick}>
                Clear
              </button>
              <h3 className="meal-type">Total: RS{sum.toLocaleString()}</h3>
            </div>
          )}

          <div className="addtobag-content">
            <div className="addtobag-content-input">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="cart-quantity"
              />
            </div>
            <button className="button" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {isImageOpen && (
        <div className="image-modal" onClick={handleCloseClick}>
          <img src={item.image} alt={item.name} className="modal-image" />
        </div>
      )}
    </>
  );
};

export default AddtoCart;
