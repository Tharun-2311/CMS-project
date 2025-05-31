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
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-md w-full bg-white bg-opacity-95 p-10 rounded-3xl shadow-2xl border border-orange-200 transition duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-orange-600 text-center mb-6 drop-shadow-md">
          🍽️ Place Your Order
        </h2>

        {submitted ? (
          <div className="text-center space-y-4 text-red-900">
            <h3 className="text-2xl font-bold text-green-600">
              🎉 Thank you for your order!
            </h3>
            <ul className="text-left space-y-1 text-orange-700 font-semibold">
              <li><strong>Name:</strong> {order.name}</li>
              <li><strong>Phone:</strong> {order.phone}</li>
              <li><strong>Address:</strong> {order.address}</li>
              <li><strong>Items:</strong> {items}</li>
              <li><strong>Total:</strong> ₹{total}</li>
            </ul>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-red-900">
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
            <div className="text-right font-semibold text-red-700 text-lg">
              Total: ₹{total}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Confirm Order✅
            </button>
          </form>
        )}
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
