import React from "react";  
import { Coffee, Store, Truck } from "lucide-react";

const About = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-16 relative">
      <h2 className="text-6xl md:text-8xl font-bold text-gray-100 absolute top-8 left-1/2 -translate-x-1/2 z-0 select-none">
        ABOUT US
      </h2>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
          alt="Baristas"
          className="rounded-[40%_0_40%_0] w-full md:w-1/2 object-cover"
        />

        <div className="md:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold text-[#3c3b2d] mb-4">
            What's Make Our Coffee Special!
          </h3>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Vel Rerum
            Laboriosam Reprehenderit Ipsa Id Repellat Odio Illum, Voluptas,
            Necessitatibus Assumenda Adipisci. Hic, Maiores Iste? Excepturi Illo
            Dolore Mollitia Qui Quia.
          </p>
          <button className="border-2 border-black px-5 py-2 rounded-md font-medium hover:bg-black hover:text-white transition">
            Read More
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="border-2 border-black p-4 rounded-xl text-center">
              <Coffee className="mx-auto text-2xl text-[#c0a060]" />
              <p className="mt-2 font-semibold">Quality Coffee</p>
            </div>
            <div className="border-2 border-black p-4 rounded-xl text-center">
              <Store className="mx-auto text-2xl text-[#c0a060]" />
              <p className="mt-2 font-semibold">Our Branches</p>
            </div>
            <div className="border-2 border-black p-4 rounded-xl text-center">
              <Truck className="mx-auto text-2xl text-[#c0a060]" />
              <p className="mt-2 font-semibold">Free Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
