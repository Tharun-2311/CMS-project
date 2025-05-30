import React from 'react';

export default function Signin() {
    return (
        <div
            className="flex items-center justify-center min-h-screen px-4 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1500&q=80')",
            }}
        >
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-red-600 drop-shadow">
                    Sign In to Your Account
                </h2>

                <form className="space-y-5">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/80"
                            placeholder="example@mail.com"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/80"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-lg transition duration-300 shadow"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer Links */}
                <div className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-red-500 hover:underline font-medium">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}

