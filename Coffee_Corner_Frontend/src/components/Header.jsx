import { FaCoffee } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google';
import { useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow px-8 py-4 z-50 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-light flex items-center gap-2">
        Coffee Corner <FaCoffee />
      </div>

      {/* Navigation */}
      <nav className="space-x-6 text-lg">
        <a href="#home" className="hover:text-[#cba173]">Home</a>
        <a href="#about" className="hover:text-[#cba173]">About</a>
        <a href="#menu" className="hover:text-[#cba173]">Menu</a>
        <a href="#review" className="hover:text-[#cba173]">Review</a>
        <a href="#book" className="hover:text-[#cba173]">Book</a>
      </nav>

      {/* Buttons */}
      <div className="flex gap-4 items-center">
        <button className="border px-5 py-2 rounded hover:bg-[#3e3c2f] hover:text-white transition">
          Book A Table
        </button>

        {/* Login / Signup Section */}
        {!isLoggedIn ? (
          <GoogleLogin
            onSuccess={() => setIsLoggedIn(true)}
            onError={() => console.log('Login Failed')}
          />
        ) : (
          <button className="px-4 py-2 bg-green-600 text-white rounded">Logged In</button>
        )}
      </div>
    </header>
  );
}
