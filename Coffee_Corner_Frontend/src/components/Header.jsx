import { FaCoffee } from "react-icons/fa";

export default function Header({ onBookClick }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow px-8 py-4 z-50 flex justify-between items-center">
      <div className="text-2xl font-light flex items-center gap-2">
        Coffee Corner <FaCoffee />
      </div>
      <nav className="space-x-6 text-lg">
        <a href="#home" className="hover:text-[#cba173]">Home</a>
        <a href="#about" className="hover:text-[#cba173]">About</a>
        <a href="#menu" className="hover:text-[#cba173]">Menu</a>
        <a href="#review" className="hover:text-[#cba173]">Review</a>
        <a href="#book" className="hover:text-[#cba173]">Book</a>
      </nav>
      <button
        onClick={onBookClick}
        className="border px-5 py-2 rounded hover:bg-[#3e3c2f] hover:text-white transition"
      >
        Book A Table
      </button>
    </header>
  );
}
