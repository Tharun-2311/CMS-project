import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const [order, setOrder] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!order.name || !order.phone || !order.address) {
      alert('Please fill in all fields.');
      return;
    }
    setSubmitted(true);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const items = cart.map((item) => item.name).join(', ');

  // Delivery boy contact number (hardcoded for demo)
  const deliveryBoyNumber = "+91 98765 43210";
  // Delivery boy live location (hardcoded for demo)
  const deliveryBoyLocation = "https://maps.google.com/?q=12.9716,77.5946"; // Example: Bangalore coordinates

  // Food quotes (randomly pick one)
  const quotes = [
    "Good food is the foundation of genuine happiness.",
    "People who love to eat are always the best people.",
    "Food is symbolic of love when words are inadequate.",
    "There is no sincerer love than the love of food.",
    "One cannot think well, love well, sleep well, if one has not dined well.",
    "Life is uncertain. Eat dessert first.",
    "Food brings people together on many different levels."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.96), rgba(255,255,255,0.96)), url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-2xl w-full bg-white bg-opacity-95 p-10 rounded-3xl shadow-2xl border border-orange-200 transition duration-500 ease-in-out transform hover:scale-105">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-extrabold text-orange-600 drop-shadow-md">
            <span role="img" aria-label="order">🛒</span> Order Summary
          </h2>
        </div>
        {submitted ? (
          <div className="text-center space-y-4 text-gray-800">
            <h3 className="text-2xl font-bold text-green-600 flex items-center justify-center gap-2">
              <span role="img" aria-label="success">✅</span> Order Confirmed!
            </h3>
            <div className="rounded-xl bg-orange-50 border border-orange-200 p-4 shadow-inner">
              <ul className="text-left space-y-2 text-orange-700 font-medium">
                <li><strong>Name:</strong> {order.name}</li>
                <li><strong>Phone:</strong> {order.phone}</li>
                <li><strong>Address:</strong> {order.address}</li>
                <li><strong>Items:</strong> {items}</li>
                <li><strong>Total:</strong> <span className="text-green-700 font-bold">₹{total}</span></li>
                <li>
                  <strong>Delivery Boy Contact:</strong>{' '}
                  <a
                    href={`tel:${deliveryBoyNumber.replace(/[^0-9]/g, '')}`}
                    className="text-blue-600 underline"
                  >
                    {deliveryBoyNumber}
                  </a>
                </li>
                <li>
                  <strong>Live Location:</strong>{' '}
                  <a
                    href={deliveryBoyLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Track on Map
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Thank you for choosing us! Your food is being prepared and will be delivered soon.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7 text-gray-900">
            <div className="grid grid-cols-1 gap-5">
              <Input
                label="Full Name"
                name="name"
                value={order.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              <Input
                label="Phone Number"
                name="phone"
                value={order.phone}
                onChange={handleChange}
                placeholder="9876543210"
                type="tel"
              />
              <Input
                label="Delivery Address"
                name="address"
                value={order.address}
                onChange={handleChange}
                placeholder="Enter delivery address"
              />
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-2 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-orange-700">Items:</span>
                <span className="text-gray-700">{items || "No items selected"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-orange-700">Total:</span>
                <span className="text-green-700 font-bold text-lg">₹{total}</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Confirm Order
            </button>
          </form>
        )}
        <div className="mt-8 text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, name, value, onChange, placeholder, type = 'text' }) => (
  <div>
    <label className="block text-orange-700 font-semibold mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-orange-50 transition duration-200 shadow-sm text-lg"
    />
  </div>
);

export default Order;
