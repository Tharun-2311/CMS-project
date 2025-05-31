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

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-6 animate-fade-in">
          🍽️ Place Your Order
        </h2>

        {submitted ? (
          <div className="text-center space-y-4 animate-slide-in">
            <h3 className="text-2xl font-bold text-green-600">🎉 Thank you for your order!</h3>
            <ul className="text-left text-gray-800 space-y-1">
              <li><strong>Name:</strong> {order.name}</li>
              <li><strong>Phone:</strong> {order.phone}</li>
              <li><strong>Address:</strong> {order.address}</li>
              <li><strong>Items:</strong> {items}</li>
              <li><strong>Total:</strong> ₹{total}</li>
            </ul>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
            <Input
              label="Your Name"
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
              label="Address"
              name="address"
              value={order.address}
              onChange={handleChange}
              placeholder="Delivery address"
            />
            <div className="text-right font-semibold text-blue-700">
              Total: ₹{total}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 rounded-xl font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Confirm Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const Input = ({ label, name, value, onChange, placeholder, type = 'text' }) => (
  <div>
    <label className="block text-blue-800 font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
    />
  </div>
);

export default Order;
