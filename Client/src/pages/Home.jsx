import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const handleSignIn = () => {
        window.location.href = '/Signin';
    };

    return (
        <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-200"
            style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-white bg-opacity-95 p-12 rounded-3xl shadow-2xl flex flex-col items-center max-w-2xl w-full">
                <h1 className="text-4xl font-bold mb-3 text-blue-700 drop-shadow text-center">
                    Welcome to Foodie's Paradise
                </h1>
                <p className="italic mt-2 text-gray-700 text-lg text-center">
                    "Good food is the foundation of genuine happiness."
                </p>
                <p className="italic text-gray-700 text-lg text-center mb-6">
                    "Eat well, live well, be well."
                </p>
                <nav className="mt-6 flex space-x-8">
                    <button
                        onClick={handleSignIn}
                        className="px-8 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold shadow hover:scale-105 hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center"
                    >
                        Sign In
                    </button>
                    <Link
                        to="/Signup"
                        className="px-8 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-semibold shadow hover:scale-105 hover:from-green-500 hover:to-green-700 transition-all duration-200 flex items-center justify-center"
                    >
                        Sign Up
                    </Link>
                </nav>
                <ul className="list-none mt-10 p-0 flex gap-12 text-lg justify-center">
                    <li>
                        <Link to="/about" className="text-blue-700 font-medium hover:underline hover:text-blue-900 transition">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-blue-700 font-medium hover:underline hover:text-blue-900 transition">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="mt-10 flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                        alt="Food Icon"
                        className="w-20 h-20 mb-2 drop-shadow-lg animate-bounce"
                    />
                    <span className="text-gray-500 text-sm">Taste the joy of every bite!</span>
                </div>
            </div>
        </div>
    );
};

