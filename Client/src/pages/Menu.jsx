import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 100, image: "https://media.istockphoto.com/id/468515806/photo/pizza.jpg?s=612x612&w=0&k=20&c=X2K8aiRYh23fcmmOCLGAK4ZFOIpj0cdLe2yv0AoZSIw=" },
  { id: 2, name: "Veggie Burger", price: 80, image: "https://media.istockphoto.com/id/507636912/photo/cheeseburger-and-fries-on-restaurant-table.jpg?s=612x612&w=0&k=20&c=MGamGAS_Hslqw_Wy6ZP0yHTowNsfbPYzNlVnUOOPi2A=" },
  { id: 3, name: "Caesar Salad", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2Ca-15wrgJ3nbKwlZmLiuILKDngAsCuk5A&s" },
  { id: 4, name: "Pasta Alfredo", price: 120, image: "https://media.istockphoto.com/id/506916161/photo/homemade-fettucini-aflredo-pasta.jpg?s=612x612&w=0&k=20&c=Pa3dwlsqnPfOKgldMXuHVy5Aqmtbp8wThbj6V_4u5us=" },
  { id: 5, name: "Grilled Sandwich", price: 60, image: "https://media.istockphoto.com/id/1600885185/photo/grilled-cheese-spinach-and-tomato-sandwich-on-concrete-background.jpg?s=612x612&w=0&k=20&c=UEPht-T83EuyLNFHfQMu43gI948zDDi1MlzDGNUSw_k=" },
  { id: 6, name: "Masala Dosa", price: 20, image: "https://b.zmtcdn.com/data/dish_photos/cd4/2a405bb56fad956ed76daa55bd07acd4.jpg" },
  { id: 7, name: "Mutton Biryani", price: 250, image: "https://srinivasabhavan.com/wp-content/uploads/2024/11/Mutton-Ulavacharu-Biryani.jpg" },
  { id: 8, name: "Medu Vada", price: 10, image: "https://www.hercircle.in/hcm/Engage/D/3F79CD8A-9DA8-4216-AEA0-EDF77CC03D55.JPG" },
  { id: 9, name: "Mandi", price: 1000, image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/8e82f6e42f5e5bde0649f1f8f48209d8" },
  { id: 10, name: "Full Grill", price: 300, image: "https://ahafoodcourt.com/wp-content/uploads/2024/07/Chicken-Tandoori-Full.jpg" },
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const goToOrder = () => {
    navigate("/Order", { state: { cart } });
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🍴 Restaurant Menu</h1>

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

      <h2 className="text-2xl font-semibold mb-4">🛒 Your Order</h2>

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
        onClick={goToOrder}
        disabled={cart.length === 0}
        className={`w-full py-3 text-white rounded-md text-lg font-medium ${
          cart.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Menu;
