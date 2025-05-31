import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (Number(age) <= 0) {
      setError('Age must be greater than 0');
      return;
    }

    setError('');
    // Normally here you'd do signup logic (API call etc)
    localStorage.setItem('loggedIn', 'true');
    navigate('/Menu');
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1500&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-10 max-w-lg w-full border border-orange-200">
        <h2 className="text-4xl font-extrabold text-red-700 mb-6 text-center drop-shadow-md">
          Create Your Account
        </h2>

        {error && (
          <div className="text-red-600 text-center mb-4 font-semibold">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-red-900">
          <div>
            <label className="block mb-2 font-semibold text-orange-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-400 bg-orange-50 transition shadow-sm text-lg"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-orange-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-400 bg-orange-50 transition shadow-sm text-lg"
              autoComplete="new-password"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-orange-700">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              placeholder="+91 9876543210"
              className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-400 bg-orange-50 transition shadow-sm text-lg"
              autoComplete="tel"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-orange-700">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                min="1"
                placeholder="Age"
                className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-400 bg-orange-50 transition shadow-sm text-lg"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 font-semibold text-orange-700">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                placeholder="Address"
                className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-400 bg-orange-50 transition shadow-sm text-lg"
                autoComplete="street-address"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-lg shadow-md transition duration-200 text-lg tracking-wide"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-orange-600 text-sm">
          Already have an account?{' '}
          <Link to="/Signin" className="text-red-600 hover:underline font-semibold">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
