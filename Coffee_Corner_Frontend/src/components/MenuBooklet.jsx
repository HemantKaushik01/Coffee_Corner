import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const coffeeData = [
  {
    name: "Espresso",
    ingredients: "Coffee beans, hot water",
    price: "$3.00",
    image: "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXNwcmVzc298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Cappuccino",
    ingredients: "Espresso, milk, foam",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Latte",
    ingredients: "Espresso, steamed milk, light foam",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF0dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Mocha",
    ingredients: "Espresso, chocolate syrup, milk, whipped cream",
    price: "$4.75",
    image: "https://plus.unsplash.com/premium_photo-1668970851336-6c81cc888ba7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9jaGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  
];

export default function MenuBooklet({ isOpen, onClose }) {
  const [page, setPage] = useState(0);

  if (!isOpen) return null;

  const nextPage = () => setPage((p) => (p + 1) % coffeeData.length);
  const prevPage = () => setPage((p) => (p - 1 + coffeeData.length) % coffeeData.length);

  const coffee = coffeeData[page];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-[#fdfaf6] w-[90%] md:w-[70%] lg:w-[60%] h-[80%] rounded-2xl shadow-2xl overflow-hidden flex">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* Book content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex w-full"
          >
            {/* Left page */}
            <div className="w-1/2 p-10 flex flex-col justify-center text-center border-r border-gray-300 bg-[#fff9f3]">
              <h2 className="text-3xl font-bold mb-4">{coffee.name}</h2>
              <p className="text-lg mb-2">
                <strong>Ingredients:</strong> {coffee.ingredients}
              </p>
              <p className="text-xl font-semibold">{coffee.price}</p>
            </div>

            {/* Right page */}
            <div className="w-1/2 flex justify-center items-center bg-[#f6f1eb]">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="rounded-lg shadow-lg w-[80%] object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-between px-10">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-[#cba173] text-white rounded hover:bg-[#a78159] transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-[#cba173] text-white rounded hover:bg-[#a78159] transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
