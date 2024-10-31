import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PopularDishes.css"; // Custom CSS for styling
import AddtoCart from "../AddToCart/AddtoCart";

const PopularDishes = ({
  name,
  menuDishes,
  Dishcategories,
  subcategoryData,
  styles,
}) => {
  const navigate = useNavigate(); // Initialize navigate
  const [selectedDishId, setSelectedDishId] = useState(null); // State to hold the selected dish ID
  const [quantity, setQuantity] = useState(1); // State to hold the quantity

  // Function to handle quantity change
  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + increment;
      return newQuantity > 1 ? newQuantity : 1; // Ensure quantity is at least 1
    });
  };

  console.log("total", quantity);

  const staticDishes = [
    {
      id: 1,
      name: "Chili Dry",
      priceRange: "₨1,930.00 – ₨2,205.00",
      hasOptions: true, // Indicates multiple options
      image:
        "https://arcadiancafe.com/wp-content/uploads/2021/08/chickenchillidry.jpg",
      quantity: "20",
    },
    {
      id: 2,
      name: "Bai Ze Chicken",
      priceRange: "₨2,200.00",
      hasOptions: false, // Single price option
      image:
        "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
      quantity: "20",
    },
    {
      id: 3,
      name: "Red Dragon Chicken",
      priceRange: "₨1,985.00 – ₨2,470.00",
      hasOptions: true,
      image:
        "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
      quantity: "20",
    },
  ];

  const dishesToDisplay =
    menuDishes && menuDishes.length > 0
      ? menuDishes
      : Dishcategories && Dishcategories.categories.length > 0
      ? Dishcategories.categories
      : subcategoryData && subcategoryData.categories.length > 0
      ? subcategoryData.categories
      : staticDishes;

  // Function to handle clicking on an image
  const handleDishClick = (dish) => {
    setSelectedDishId(dish.id); // Set selected dish ID

    // Navigate based on dishId
    if (dish.id % 2 === 0) {
      navigate(`/categories/${dish.id}`, {
        state: { item: dish, quantity: quantity },
      }); // Pass entire dish object
    } else if (dish.id % 2 === 1) {
      navigate(`/subcategories/${dish.id}`, {
        state: { item: dish, quantity: quantity },
      });
    } else {
      navigate("/cartItemSelection", {
        state: { item: dish, quantity: quantity },
      });
    }
  };
  const isMenu = location.pathname === "/menu";

  return (
    <div style={styles?.container} className="popular-dishes">
      {Dishcategories || subcategoryData ? (
        <button className="return-to-menuu" onClick={() => navigate("/menu")}>
          Return to Menu
        </button>
      ) : null}

      <h2 style={styles?.heading} className="popular-dishes-heading">
        {Dishcategories?.name || name || "Popular Dishes"}
      </h2>

      <div className="dishes-grid">
        {dishesToDisplay.map((dish) => (
          <div key={dish.id} className="dish-card">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleDishClick(dish);
              }}
            >
              <img src={dish.image} alt={dish.name} className="dish-image" />
            </a>

            <h3 style={styles?.dishname} className="dish-name">
              {dish.name}{" "}
              <span style={styles?.dishnameQunatity}>({dish.quantity})</span>
            </h3>

            <p className="dish-price">{dish.priceRange}</p>
            {(!menuDishes || menuDishes.length === 0) &&
            (!Dishcategories || Dishcategories.categories.length === 0) ? (
              dish.hasOptions ? (
                <button
                  className="btn select-options"
                  onClick={() => handleDishClick(dish)}
                >
                  Select options
                </button>
              ) : (
                <button
                  className="btn add-to-cart"
                  onClick={() => {
                    handleQuantityChange(1);
                    handleDishClick(dish);
                  }}
                >
                  Add to cart
                </button>
              )
            ) : null}
          </div>
        ))}
      </div>

      <div className="view-all-products">
        {(!menuDishes || menuDishes.length === 0) &&
        (!Dishcategories || Dishcategories.categories.length === 0) ? (
          <button className="btn view-all">All Products</button>
        ) : null}
      </div>
    </div>
  );
};

export default PopularDishes;
