// const items = [
//   { name: "Espresso", src: "https://images.unsplash.com/photo-1687619485715-305c76d06836?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { name: "Latte", src: "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { name: "Cappuccino", src: "https://images.unsplash.com/photo-1599901001011-9c0f0fb69b34?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { name: "Americano", src: "https://images.unsplash.com/photo-1589985902809-39d25db22101?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
// ];

import '../App.css'; // or './index.css' depending on where you put the flip-card CSS


import React from "react";

const menuItems = [
  {
    name: "Espresso",
    price: "$3.00",
    quantity: "150ml",
    related: ["Ristretto", "Lungo"],
    img: "https://images.unsplash.com/photo-1687619485715-305c76d06836?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cappuccino",
    price: "$4.00",
    quantity: "200ml",
    related: ["Flat White", "Macchiato"],
    img: "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Latte",
    price: "$4.50",
    quantity: "250ml",
    related: ["Mocha", "Caramel Latte"],
    img: "https://images.unsplash.com/photo-1599901001011-9c0f0fb69b34?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Iced Coffee",
    price: "$3.50",
    quantity: "300ml",
    related: ["Cold Brew", "Iced Mocha"],
    img: "https://images.unsplash.com/photo-1589985902809-39d25db22101?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-4 md:px-16 bg-[#fdf8f3]">
      <h2 className="text-4xl font-bold text-center mb-10">Our Coffee Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flip-card w-full h-64 rounded-xl shadow-lg"
          >
            <div className="flip-inner">
              {/* Front (Image) */}
              <div className="flip-front bg-white">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back (Details) */}
              <div className="flip-back bg-[#fff9f3] flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-[#cba173] font-semibold">{item.price}</p>
                <p className="text-sm text-gray-600 mb-2">Qty: {item.quantity}</p>
                <p className="text-xs text-gray-500">
                  Related: {item.related.join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
