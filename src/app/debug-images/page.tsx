import Image from "next/image";

const CATEGORIES = [
  {
    id: "b2b-b2c",
    title: "Firmy B2B i B2C",
    image: "/images/who-we-help/b2b-b2c.png",
  },
  {
    id: "startups",
    title: "Startups",
    image: "/images/who-we-help/startups.png",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    image: "/images/who-we-help/ecommerce.png",
  },
  {
    id: "personal",
    title: "Marki osobiste",
    image: "/images/who-we-help/personal-brands.png",
  },
];

export default function DebugImages() {
  return (
    <div className="bg-white min-h-screen p-10">
      <h1 className="text-3xl text-black mb-10">Debug Images</h1>
      <div className="grid grid-cols-2 gap-10">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="border border-black p-4">
            <h2 className="text-black mb-4">{cat.title}</h2>
            <div className="relative w-full h-[300px] bg-red-200">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-black mt-2">Path: {cat.image}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
