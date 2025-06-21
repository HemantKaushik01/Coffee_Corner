import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import ModalBookingForm from "./components/ModalBookingForm";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white font-serif scroll-smooth relative">
      <Header onBookClick={() => setShowModal(true)} />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <BookingForm />
      <Footer />
      <ModalBookingForm isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
