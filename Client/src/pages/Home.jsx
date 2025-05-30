import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div
            className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200"
            style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl flex flex-col items-center max-w-xl w-full">
                <h1 className="text-5xl font-extrabold mb-4 text-purple-700 drop-shadow-lg text-center">
                    Welcome to Our Restaurant
                </h1>
                <p className="italic mt-4 text-gray-700 text-lg text-center">
                    "One cannot think well, love well, sleep well, if one has not dined well."
                </p>
                <p className="italic text-gray-700 text-lg text-center mb-6">
                    "Food is symbolic of love when words are inadequate."
                </p>
                <nav className="mt-6 flex space-x-6">
                    <Link to="/signin">
                        <button className="px-8 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow hover:scale-105 hover:from-blue-600 hover:to-indigo-700 transition-all duration-200">
                            Sign In
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="px-8 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-semibold shadow hover:scale-105 hover:from-green-500 hover:to-green-700 transition-all duration-200">
                            Sign Up
                        </button>
                    </Link>
                </nav>
                <ul className="list-none mt-10 p-0 flex gap-10 text-lg justify-center">
                    <li>
                        <Link to="/about" className="text-purple-700 font-medium hover:underline hover:text-purple-900 transition">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-purple-700 font-medium hover:underline hover:text-purple-900 transition">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="mt-10 flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                        alt="Restaurant Icon"
                        className="w-20 h-20 mb-2 drop-shadow-lg animate-bounce"
                    />
                    <span className="text-gray-500 text-sm">Delicious moments await you!</span>
                </div>
            </div>
        </div>
    );
};

