import React from "react";

export default function ModalBookingForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Book a Table
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded"
            required
          />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border p-3 rounded"
              required
            />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
            required
          />
           <input type="number" placeholder="Number of People" className="w-full border p-3 rounded" required />
            <input type="date" placeholder="Date" className="w-full border p-3 rounded" required />
        <input type="time" placeholder="Time" className="w-full border p-3 rounded" required />
        <textarea placeholder="Any Special Requirements" className="w-full border p-3 rounded" rows="4" required></textarea>
          <button
            type="submit"
            className="w-full bg-[#3e3c2f] text-white p-3 rounded hover:bg-[#cba173]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
