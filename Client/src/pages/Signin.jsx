import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate successful sign in
    localStorage.setItem('loggedIn', 'true');
    navigate('/Menu');
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1500&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-10 max-w-md w-full border border-orange-200">
        <h2 className="text-4xl font-extrabold text-red-700 mb-6 text-center drop-shadow-md">
          Sign In to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-red-900">
          <div>
            <label className="block mb-2 font-semibold text-orange-700">Email Address</label>
            <input
              type="email"
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
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-400 bg-orange-50 transition shadow-sm text-lg"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-lg shadow-md transition duration-200 text-lg tracking-wide"
          >
            SignIn
          </button>
        </form>

        <div className="mt-6 text-center text-orange-600 text-sm">
          Don't have an account?{' '}
          <Link to="/Sign-Up" className="text-red-600 hover:underline font-semibold">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
