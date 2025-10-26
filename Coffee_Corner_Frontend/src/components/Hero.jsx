import { useState } from "react";
import MenuBooklet from "./MenuBooklet";

export default function Hero() {
  const [showBooklet, setShowBooklet] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen pt-32 px-6 flex items-center justify-center relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Start Your Day
            <br />
            With A{" "}
            <span className="text-[#cba173]">Perfect Cup</span> of Coffee
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Enjoy the rich aroma and bold taste crafted with love.
          </p>

          {/* Button — now opens pop-up */}
          <button
            onClick={() => setShowBooklet(true)}
            className="mt-6 px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition rounded-md"
          >
            Explore Menu
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="Coffee"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Pop-up Booklet */}
      <MenuBooklet isOpen={showBooklet} onClose={() => setShowBooklet(false)} />
    </section>
  );
}
