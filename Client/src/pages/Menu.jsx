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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 py-10 font-sans">
      {/* Header */}
      <header className="bg-white/90 shadow-lg sticky top-0 z-20 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="Logo"
              className="w-12 h-12 rounded-full shadow"
            />
            <span className="text-3xl font-extrabold text-orange-700 tracking-tight drop-shadow">
              Foodie<span className="text-pink-500">Paradise</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-orange-600 font-semibold text-lg hidden sm:block">
              Menu
            </span>
            <button
              className="relative"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            >
              <span className="text-2xl" role="img" aria-label="cart">🛒</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-2 py-0.5 font-bold shadow">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8 px-4">
        <div className="flex items-center bg-white rounded-xl shadow-lg px-4 py-3">
          <span className="text-orange-500 text-xl mr-2">🔍</span>
          <input
            type="text"
            placeholder="Search for dishes (e.g. Pizza, Biryani)..."
            className="flex-1 outline-none bg-transparent text-lg"
            value={searchTerm}
            onChange={e => {
              const params = new URLSearchParams(location.search);
              if (e.target.value) {
                params.set("search", e.target.value);
              } else {
                params.delete("search");
              }
              navigate({ search: params.toString() });
            }}
          />
        </div>
        {searchTerm && (
          <p className="text-center text-gray-700 mt-2">
            Showing results for: <span className="font-semibold text-orange-600">"{searchTerm}"</span>
          </p>
        )}
      </div>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto px-4">
        {filteredItems.length === 0 ? (
          <p className="text-center text-red-500 mb-8 text-lg font-medium">No menu items found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-orange-100 hover:border-orange-300 group"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-orange-500/90 text-white text-xs px-3 py-1 rounded-full font-bold shadow">
                    ₹{item.price}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-orange-700 mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {/* You can add a short description here if needed */}
                  </p>
                  <button
                    className="mt-auto bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-4 py-2 rounded-lg shadow font-semibold transition-all duration-200"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart/Order Summary */}
      <div className="fixed bottom-0 left-0 w-full z-30">
        <div className="max-w-2xl mx-auto bg-white/95 rounded-t-3xl shadow-2xl px-6 py-6 flex flex-col gap-2 border-t border-orange-100">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-orange-700 flex items-center gap-2">
              <span role="img" aria-label="cart">🛒</span> Your Order
            </h2>
            <span className="text-gray-500 text-sm">{cart.length} item{cart.length !== 1 ? "s" : ""}</span>
          </div>
          {cart.length === 0 ? (
            <p className="text-gray-400 mb-2">No items in cart.</p>
          ) : (
            <ul className="mb-2 max-h-32 overflow-y-auto">
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center text-base py-1 border-b border-gray-100 last:border-b-0">
                  <span>{item.name}</span>
                  <span className="font-semibold text-orange-600">₹{item.price}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between items-center text-lg font-semibold mb-2 border-t pt-2">
            <span>Total:</span>
            <span className="text-orange-700">₹{getTotal()}</span>
          </div>
          <div className="flex gap-2">
            {cart.length > 0 && (
              <button
                onClick={() => setCart([])}
                className="flex-1 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 font-semibold transition-all duration-200"
              >
                Cancel
              </button>
            )}
            <button
              onClick={goToOrder}
              disabled={cart.length === 0}
              className={`flex-1 py-2 rounded-lg text-lg font-bold shadow transition-all duration-200 ${
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
    </div>
  );
};

export default Menu;
