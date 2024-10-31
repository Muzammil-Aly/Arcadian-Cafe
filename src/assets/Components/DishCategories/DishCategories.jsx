// DishCategories.js
import React from "react";
import { useParams } from "react-router-dom";
import "./DishCategories.css";
import PopularDishes from "../PopularDishes/PopoularDishes";
import { Link } from "react-router-dom";

const DishCategories = () => {
  const { dishId } = useParams();
  console.log("Dishcatjfadf", dishId);
  const categoriesData = {
    2: {
      name: "Category: Asian Fusion dishcategory ",
      hasOptions: true,
      categories: [
        {
          id: 3,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/03/ChardonnaySteak.jpg",
          name: "classics-menu dishcategory",
          quantity: "14",
          hasOptions: true,
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
        {
          id: 4,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
          name: "Signature",
          hasOptions: true,

          quantity: "19",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
      ],
    },

    4: {
      name: "Category: Classics",
      categories: [
        {
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/03/blackpepperasianfusion.jpg",
          name: "black peeper asian ",
          priceRange: "₨1,930.00 – ₨2,205.00",
          hasOptions: true,
          quantity: "14",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
        {
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/03/blackpepperasianfusion.jpg",
          name: "black peeper asian ",
          priceRange: "₨1,930.00 – ₨2,205.00",
          hasOptions: true,
          quantity: "14",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
      ],
    },
    6: {
      name: "Category: Off The Grill ali",
      categories: [
        {
          id: 31,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
          name: "classics",
          quantity: "14",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
        {
          id: 33,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
          name: "Signature",
          quantity: "19",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
      ],
    },
    8: {
      name: "Category: Asian Fusion",
      categories: [
        {
          id: 41,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
          name: "classics",
          quantity: "14",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
        {
          id: 43,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
          name: "Signature",
          quantity: "19",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
      ],
    },
  };

  const selectedDishCategories = categoriesData[dishId];
  const totalQuantity = selectedDishCategories.categories.reduce(
    (total, category) => total + category.quantity,
    0
  );
  return (
    <>
      <PopularDishes Dishcategories={selectedDishCategories} />
    </>
  );
};

export default DishCategories;
