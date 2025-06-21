// components/Reviews.jsx
const customers = [
  { name: "John Doe", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Jane Smith", img: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Emily Davis", img: "https://randomuser.me/api/portraits/women/2.jpg" },
];

export default function Reviews() {
  return (
    <section id="review" className="py-16 bg-[#fef6ed] text-center">
      <h2 className="text-3xl font-semibold mb-10">Customer’s Review</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center px-6">
        {customers.map(({ name, img }) => (
          <div key={name} className="bg-white rounded-lg p-6 shadow-md max-w-xs mx-auto">
            <img src={img} alt={name} className="w-16 h-16 rounded-full mx-auto" />
            <h4 className="mt-4 text-lg font-semibold">{name}</h4>
            <p className="text-yellow-500 mt-1">★★★★★</p>
            <p className="mt-2 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
