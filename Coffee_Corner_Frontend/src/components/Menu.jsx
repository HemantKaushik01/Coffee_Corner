const items = [
  { name: "Espresso", src: "https://images.unsplash.com/photo-1687619485715-305c76d06836?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Latte", src: "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Cappuccino", src: "https://images.unsplash.com/photo-1599901001011-9c0f0fb69b34?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Americano", src: "https://images.unsplash.com/photo-1589985902809-39d25db22101?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-16 bg-[#f9f6f1] text-center">
      <h2 className="text-3xl font-semibold mb-10">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {items.map(({ name, src }) => (
          <div key={name} className="">
            <img src={src} alt={name} className="rounded-lg shadow-md" />
            <h3 className="mt-4 text-xl font-medium">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}