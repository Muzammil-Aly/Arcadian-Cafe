import React from "react";
import AddtoCart from "../AddToCart/AddtoCart";
const staticDishes = {
  3: {
    name: "Mzmil ",
    hasOptions: false,

    categories: [
      {
        id: null,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
        name: "Black Pepper Asian",
        quantity: "14",
        priceRange: " Rs 2500",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
      },
      {
        id: 2,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
        name: "Signature",
        quantity: "19",
        priceRange: "Rs 2500 - RS 3000",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
      },
    ],
  },

  5: {
    name: "Category: Off The Grill ali",
    categories: [
      {
        id: 1,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
        name: "classics",
        quantity: "14",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
      },
      {
        id: 2,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
        name: "Signature",
        quantity: "19",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
      },
      {
        id: 1,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
        name: "classics",
        quantity: "14",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
      },
      {
        id: 2,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
        name: "Signature",
        quantity: "19",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
      },
      {
        id: 1,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/RedDragonChicken.jpg",
        name: "classics",
        quantity: "14",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
      },
      {
        id: 2,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
        name: "Signature",
        quantity: "19",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
      },
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
      },
      {
        id: 2,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
        name: "Signature",
        quantity: "19",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
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
      },
      {
        id: 2,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
        name: "Signature",
        quantity: "19",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
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
      },
      {
        id: 2,
        image:
          "https://arcadiancafe.com/wp-content/uploads/2021/05/BaiZeChicken.jpg",
        name: "Signature",
        quantity: "19",
        description:
          "Sautéed chicken cubes with onions and black pepper sauce. Seasoned with freshly crushed peppercorn.",
      },
    ],
  },
};
const AddtocartSelection = () => {
  return (
    <>
      <AddtoCart item={staticDishes} />
    </>
  );
};

export default AddtocartSelection;
