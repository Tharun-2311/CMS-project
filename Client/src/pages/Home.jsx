import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  const handleSearch = () => {
    if (!isLoggedIn) {
      alert('Please sign in to search the menu.');
      navigate('/signin');
      return;
    }

    if (search.trim()) {
      navigate(`/Menu?search=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

return (
    <div
        className="flex flex-col min-h-screen"
        style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1500&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <header className="flex justify-between items-center px-10 py-6 bg-gradient-to-r from-orange-200 via-orange-100 to-red-200 bg-opacity-95 shadow-lg backdrop-blur-md">
            <div className="text-3xl font-extrabold text-red-700 tracking-tight drop-shadow-lg">
                <span role="img" aria-label="food">🍽️</span> Foodie's Paradise
            </div>
            <nav className="flex space-x-6">
                <Link to="/" className="text-red-800 hover:text-orange-600 font-semibold transition-colors duration-200"></Link>
                <Link to="/Sign-Up" className="text-red-800 hover:text-orange-600 font-semibold transition-colors duration-200"></Link>
                <button
                    onClick={() => navigate('/')}
                    className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white px-5 py-2 rounded-lg font-bold shadow-md transition-all duration-200"
                >
                    Home
                </button>
                <button
                    onClick={handleSignIn}
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-5 py-2 rounded-lg font-bold shadow-md transition-all duration-200"
                >
                    Sign In
                </button>
            </nav>
        </header>

        <main className="flex-1 flex items-center justify-center px-4">
            <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center border border-orange-200">
                <h1 className="text-5xl font-extrabold text-red-700 mb-5 drop-shadow-md">
                    Welcome to <span className="text-orange-600">Foodie's Paradise</span>
                </h1>
           <p className="text-gray-700 mb-8 text-xl font-medium">
  Welcome to Foodie’s Paradise — your home for delicious Indian flavors.  
  From spicy North Indian curries to the crispy dosas and idlis of the South,  
  we bring you authentic dishes made with fresh ingredients and traditional recipes.  
  Whether you crave rich biryanis, tangy chutneys, or sweet desserts,  
  there’s something here for everyone to enjoy.  
  Come taste the true essence of India’s diverse cuisine, all in one place.
</p>


                <div className="flex mt-6 justify-center">
                    <input
                        type="text"
                        placeholder="Search dishes like Biryani, Pizza..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full max-w-md px-5 py-3 border border-orange-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg shadow-sm transition-all duration-200"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3 rounded-r-xl font-semibold hover:from-red-600 hover:to-orange-600 shadow-md transition-all duration-200"
                    >
                        Search
                    </button>
                </div>

                <blockquote className="italic text-red-700 mt-8 text-lg font-semibold border-l-4 border-orange-400 pl-4">
                    "Good food is the foundation of genuine happiness."
                </blockquote>
            </div>
        </main>

        <footer className="py-5 text-center text-base text-gray-600 bg-gradient-to-r from-orange-200 via-orange-100 to-red-200 bg-opacity-90 mt-auto shadow-inner">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-red-700">Foodie's Paradise</span>. All rights reserved.
        </footer>
    </div>
);
}
