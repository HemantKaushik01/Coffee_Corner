export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Start Your Day<br />
            With A <span className="text-[#cba173]">Perfect Cup</span> of Coffee
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Enjoy the rich aroma and bold taste crafted with love.
          </p>
          <button className="mt-6 bg-[#3e3c2f] text-white px-6 py-3 rounded hover:bg-[#cba173] transition">
            Explore Menu
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="Coffee"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}