// components/BookingForm.jsx
export default function BookingForm() {
  return (
    <section id="book" className="py-16 text-center bg-[#fffdf8] px-6">
      <h2 className="text-3xl font-semibold mb-8">Book a Table</h2>
      <form className="max-w-md mx-auto space-y-4">
        
        <input type="text" placeholder="Name" className="w-full border p-3 rounded" required />
        <input type="tel" placeholder="Phone" className="w-full border p-3 rounded" required />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" required />
        <input type="number" placeholder="Number of People" className="w-full border p-3 rounded" required />
        <input type="date" placeholder="Date" className="w-full border p-3 rounded" required />
        <input type="time" placeholder="Time" className="w-full border p-3 rounded" required />
        <textarea name="request" placeholder="Any Special Requirements" className="w-full border p-3 rounded" rows="4" required></textarea>
        <button type="submit" className="w-full bg-[#3e3c2f] text-white p-3 rounded hover:bg-[#cba173]">
          Submit
        </button>
      </form>
    </section>
  );
}