import React, { useState } from "react";

const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 100, image: "https://source.unsplash.com/200x150/?pizza" },
  { id: 2, name: "Veggie Burger", price: 80, image: "https://source.unsplash.com/200x150/?burger" },
  { id: 3, name: "Caesar Salad", price: 70, image: "https://source.unsplash.com/200x150/?salad" },
  { id: 4, name: "Pasta Alfredo", price: 120, image: "https://source.unsplash.com/200x150/?pasta" },
  { id: 5, name: "Grilled Sandwich", price: 60, image: "https://source.unsplash.com/200x150/?sandwich" },
  { id: 6, name: "Masala Dosa", price: 20, image: "https://source.unsplash.com/200x150/?dosa" },
  { id: 7, name: "Idli Sambar", price: 50, image: "https://source.unsplash.com/200x150/?idli" },
  { id: 8, name: "Medu Vada", price: 10, image: "https://source.unsplash.com/200x150/?vada" },
  { id: 9, name: "Pongal", price: 40, image: "https://source.unsplash.com/200x150/?pongal" },
  { id: 10, name: "Uttapam", price: 30, image: "https://source.unsplash.com/200x150/?uttapam" },
];

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Restaurant Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col justify-between h-40">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-700 font-medium">₹{item.price}</p>
              <button
                className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm"
                onClick={() => addToCart(item)}
              >
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Your Order</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 mb-4">No items in order.</p>
      ) : (
        <ul className="mb-4 space-y-2">
          {cart.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-between items-center text-xl font-semibold mb-4">
        <span>Total:</span>
        <span>₹{getTotal()}</span>
      </div>

      <button
        className={`w-full py-3 text-white rounded-md text-lg font-medium ${
          cart.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={cart.length === 0}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Menu;
