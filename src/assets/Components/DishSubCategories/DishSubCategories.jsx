import React from "react";
import { useParams } from "react-router-dom";

import PopularDishes from "../PopularDishes/PopoularDishes";

const DishSubCategories = () => {
  const { dishId } = useParams();

  const staticDishes = {
    1: {
      name: "Mzmil ",
      hasOptions: false,

      categories: [
        {
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
          name: "Classic ",
          quantity: "14",
          priceRange: " Rs 2500",
          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",

          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
        {
          id: 2,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
          name: "Sig",
          quantity: "19",
          priceRange: "Rs 2500 - RS 3000",
          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
      ],
    },

    3: {
      name: "Category: Off The Grill ali",
      hasOptions: false,

      categories: [
        {
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/03/BlackPepperOffTheGrill.jpg",
          name: "Black Pepper",
          quantity: "14",
          priceRange: "Rs 2500 - RS 3000",
          hasOptions: false,

          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
        },
        {
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/04/firehotsteak.jpg",
          name: "fire hot",
          quantity: "19",
          priceRange: "Rs 2500 - RS 3000",
          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
          hasOptions: true,

          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
        ,
      ],
    },
    7: {
      name: "Category: Asian Fusion",
      categories: [
        {
          id: 1,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
          name: "classics",
          quantity: "14",
          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
        {
          id: 2,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
          name: "Signature",
          quantity: "19",
          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
      ],
    },
    9: {
      name: "Category: Asian Fusion",
      categories: [
        {
          id: 1,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
          name: "classics",
          quantity: "14",
          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
        {
          id: 2,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
          name: "Signature",
          quantity: "19",
          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
      ],
    },
    31: {
      name: "Category: Asian Fusion",
      categories: [
        {
          id: 1,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
          name: "classics",
          quantity: "14",
          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
        {
          id: 2,
          image:
            "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
          name: "Signature",
          quantity: "19",
          description:
            "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
          mealTypes: {
            murgi: { name: "Mutton", PriceRange: "RS3,500" },
            bakri: { name: "Beef", PriceRange: "RS2,500" },
            machli: { name: "Fish", PriceRange: "RS6,900" },
          },
        },
      ],
    },
  };

  const selectedDishCategories = staticDishes[dishId];

  if (!selectedDishCategories) {
    return <div>No subcategories found for the selected dish.</div>;
  }

  return (
    <>
      <PopularDishes subcategoryData={selectedDishCategories} />
    </>
  );
};

export default DishSubCategories;
