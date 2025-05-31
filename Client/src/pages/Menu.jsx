import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const goToOrder = () => {
    navigate("/Order", { state: { cart } });
  };

  // Filter menu items based on search term
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-orange-700 drop-shadow mb-2 tracking-tight">
          🍴 Welcome to Our Menu
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Discover delicious dishes and add your favorites to your order!
        </p>

        {searchTerm && (
          <p className="text-center text-gray-700 mb-4">
            Showing results for: <span className="font-semibold text-orange-600">"{searchTerm}"</span>
          </p>
        )}

        {filteredItems.length === 0 ? (
          <p className="text-center text-red-500 mb-8 text-lg font-medium">No menu items found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-orange-700 mb-1">{item.name}</h3>
                  <p className="text-gray-700 font-medium mb-3">₹{item.price}</p>
                  <button
                    className="mt-auto bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-4 py-2 rounded-lg shadow font-semibold transition-all duration-200"
                    onClick={() => addToCart(item)}
                  >
                    Add to Order🧺
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white/80 rounded-2xl shadow-lg p-8 max-w-xl mx-auto mt-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
            <span role="img" aria-label="cart">🛒</span> Your Order
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500 mb-4">No items in order.</p>
          ) : (
            <ul className="mb-4 space-y-2">
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center text-lg">
                  <span>{item.name}</span>
                  <span className="font-semibold text-orange-600">₹{item.price}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-between items-center text-xl font-semibold mb-4 border-t pt-4">
            <span>Total:</span>
            <span className="text-orange-700">₹{getTotal()}</span>
          </div>

          <button
            onClick={goToOrder}
            disabled={cart.length === 0}
            className={`w-full py-3 rounded-lg text-lg font-bold shadow transition-all duration-200 ${
              cart.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
            }`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
