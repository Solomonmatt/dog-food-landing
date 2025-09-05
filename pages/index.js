import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-20 py-4 shadow-sm sticky top-0 bg-white z-50">
        <div className="text-2xl font-bold text-orange-600">DogFood</div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-orange-600">About</a></li>
          <li><a href="#nutrition" className="hover:text-orange-600">Nutrition</a></li>
          <li><a href="#gut" className="hover:text-orange-600">Gut Health</a></li>
          <li><a href="#prebiotics" className="hover:text-orange-600">Prebiotics</a></li>
        </ul>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">{menuOpen ? "✖" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 text-gray-700 font-medium">
          <a href="#about" className="block hover:text-orange-600">About</a>
          <a href="#nutrition" className="block hover:text-orange-600">Nutrition</a>
          <a href="#gut" className="block hover:text-orange-600">Gut Health</a>
          <a href="#prebiotics" className="block hover:text-orange-600">Prebiotics</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="about" className="text-center py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
          What makes us different makes them stronger
        </h1>

        {/* Ingredients */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="flex flex-col items-center">
            <Image src="/kiwi.png" alt="Kiwi Fruit" width={60} height={60} />
            <p className="font-semibold mt-2">Kiwi Fruit</p>
            <p className="text-sm text-gray-600 text-center">
              Supports digestive health, immunity & palatability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/papaya.png" alt="Papaya" width={60} height={60} />
            <p className="font-semibold mt-2">Papaya (papain)</p>
            <p className="text-sm text-gray-600 text-center">
              Supports digestive health, immunity & palatability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/seaweed.png" alt="Sea Seaweed" width={60} height={60} />
            <p className="font-semibold mt-2">Sea Seaweed</p>
            <p className="text-sm text-gray-600 text-center">
              Supports immunity & palatability
            </p>
          </div>
        </div>

        {/* Bowl Image */}
        <div className="flex justify-center mt-12">
          <Image src="/bowl.png" alt="Dog Food Bowl" width={300} height={300} className="rounded-full shadow-lg" />
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition" className="bg-gray-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Nutrition is the foundation for longer, healthier lives in dogs
          </h2>
          <ul className="mt-6 space-y-2 text-gray-700 text-lg">
            <li><strong className="text-orange-600">82%</strong> saw improvement in stool quality</li>
            <li><strong className="text-orange-600">84%</strong> saw improvement in coat glossiness</li>
            <li><strong className="text-orange-600">81%</strong> saw improvement in activity levels</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image src="/dog-with-bag.png" alt="Dog with food bag" width={350} height={350} className="rounded-lg" />
        </div>
      </section>

      {/* Gut Health Section */}
      <section id="gut" className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image src="/dogs-eating.png" alt="Dogs eating" width={400} height={300} className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Improve overall gastrointestinal health for better nutrient absorption
          </h2>
          <p className="text-gray-600 mt-4">
            Our special blend improves nutrient uptake, ensuring your dog gets
            the maximum benefits from every bite.
          </p>
        </div>
      </section>

      {/* Prebiotics Section */}
      <section id="prebiotics" className="bg-gray-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive health
          </h2>
          <p className="text-gray-600 mt-4">
            A healthy gut microbiome keeps digestion smooth and helps build
            strong immunity.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/kibble-closeup.png" alt="Kibble close-up" width={350} height={350} className="rounded-lg" />
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 transition">
          Get your dog’s healthy meal today!
        </button>
      </div>

      {/* Payment Methods */}
      <div className="flex justify-center gap-6 mt-6 mb-16">
        <Image src="/visa.png" alt="Visa" width={50} height={30} />
        <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} />
        <Image src="/amex.png" alt="American Express" width={50} height={30} />
        <Image src="/paypal.png" alt="PayPal" width={50} height={30} />
      </div>
    </main>
  );
}
