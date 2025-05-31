import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const handleSignIn = () => {
        window.location.href = '/signin';
    };

    return (
        <div
            className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-200"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Top-right nav */}
            <nav className="absolute top-6 right-10 flex space-x-8 z-10">
                <Link
                    to="/"
                    className="px-8 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-semibold shadow hover:scale-110 hover:from-green-500 hover:to-green-700 transition-all duration-200 flex items-center justify-center"
                >
                    Home
                </Link>
                <button
                    onClick={handleSignIn}
                    className="px-8 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold shadow hover:scale-110 hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center"
                >
                    Sign In
                </button>
                <Link
                    to="/Sign-Up"
                    className="px-8 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-semibold shadow hover:scale-110 hover:from-green-500 hover:to-green-700 transition-all duration-200 flex items-center justify-center"
                >
                    Sign Up
                </Link>
                <Link
                    to="/Menu"
                    className="px-8 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow hover:scale-110 hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center"
                >
                    Go to Menu
                </Link>
            </nav>
            <div className="flex flex-col items-center justify-center flex-1 min-h-screen">
                <div className="bg-white bg-opacity-95 p-12 rounded-3xl shadow-2xl flex flex-col items-center max-w-2xl w-full mt-20 border-4 border-blue-200">
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                            alt="Food Icon"
                            className="w-24 h-24 mb-2 drop-shadow-lg animate-bounce"
                        />
                        <h1 className="text-5xl font-extrabold mb-2 text-purple-700 drop-shadow text-center tracking-wide">
                            Foodie's Paradise
                        </h1>
                        <span className="text-gray-500 text-base italic">Taste the joy of every bite!</span>
                    </div>
                    <p className="italic mt-2 text-gray-700 text-lg text-center">
                        "Good food is the foundation of genuine happiness."
                    </p>
                    <p className="italic text-gray-700 text-lg text-center mb-6">
                        "Eat well, live well, be well."
                    </p>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 mb-8 shadow-inner">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">About Our Restaurant</h2>
                        <p className="text-gray-700 text-center text-base">
                            Welcome to <span className="font-semibold text-purple-700">Foodie's Paradise</span>, where culinary dreams come true! 
                            Our restaurant blends fresh, locally sourced ingredients with creative recipes to bring you a menu full of delightful surprises. 
                            Whether you're craving classic comfort food or adventurous new flavors, our chefs are dedicated to making every meal memorable. 
                            Enjoy a cozy atmosphere, friendly service, and a passion for great food—right here in the heart of the city!
                        </p>
                    </div>
                    <ul className="list-none mt-6 p-0 flex gap-12 text-lg justify-center">
                    </ul>
                </div>
            </div>
        </div>
    );
}

