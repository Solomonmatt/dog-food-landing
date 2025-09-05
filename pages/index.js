import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-20 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-orange-600">DogFood</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-orange-600"></a></li>
          <li><a href="#nutrition" className="hover:text-orange-600"></a></li>
          <li><a href="#probiotics" className="hover:text-orange-600"></a></li>
          <li><a href="#contact" className="hover:text-orange-600"></a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        <button className="hidden md:block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
          Get Started
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 text-gray-700 font-medium">
          <a href="#about" className="block hover:text-orange-600"></a>
          <a href="#nutrition" className="block hover:text-orange-600"></a>
          <a href="#probiotics" className="block hover:text-orange-600"></a>
          <a href="#contact" className="block hover:text-orange-600"></a>
          <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
            Get Started
          </button>
        </div>
      )}


          {/* Section 1: What makes us different */}
<section id="about" className="text-center py-12 px-6">
  <h1 className="text-2xl md:text-3xl font-bold text-orange-600 mt-2">
    What makes us different
  </h1>
  <h1 className="text-2xl md:text-3xl font-bold text-orange-600 mt-2">
    makes them stronger
  </h1>

  <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
    <div className="text-center">
      <p className="font-semibold">Real Food</p>
      <p className="text-gray-600 text-sm">
        Wholesome recipes for dogs with real meat and vegges
      </p>
    </div>
    <Image
      src="/dog-food.png"
      alt="Dog Food"
      width={200}
      height={200}
      className="rounded-full shadow-lg"
    />
    <div className="text-center">
      <p className="font-semibold">Made Fresh</p>
      <p className="text-gray-600 text-sm">
        We priotize maintaining the intergrity of whole foods and nutrition.
      </p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
    <div className="text-center">
      <p className="font-semibold">Premium Ingredient</p>
      <p className="text-gray-600 text-sm">
        Elevating pet care with unmatched safety and quality.
      </p>
    </div>

    <div className="text-center">
      <p className="font-semibold">Vet Developed</p>
      <p className="text-gray-600 text-sm">
        We raised the bar for dog nutrition, surpassing industry expectations.
      </p>
    </div>
  </div>

  {/* Section 2: CTA and Payment Methods */}
  <div className="mt-16 text-center">
    {/* Orange CTA Button */}
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
      Get your dog's healthy meal today!
    </button>

    {/* Guarantee Text */}
    <p className="mt-4 text-sm text-gray-700 font-medium">
      30-day money back guarantee
    </p>

    {/* Payment Icons */}
    <div className="flex justify-center items-center gap-6 mt-6">
      <Image src="/paypal.png" alt="PayPal" width={50} height={30} />
      <Image src="/visa.png" alt="Visa" width={50} height={30} />
      <Image src="/mastercard.png" alt="MasterCard" width={50} height={30} />
      <Image src="/applepay.png" alt="Apple Pay" width={50} height={30} />
      <Image src="/googlepay.png" alt="Google Pay" width={50} height={30} />
    </div>
  </div>
</section>

{/* Section: Happy Dog Bites Promo */}
<section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Column: Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-1200 mb-4">
        Nutrition is the foundation for longer, healthier lives in dogs.
      </h2>
      <p className="text-gray-600 mb-6">
        Invest in your dog’s future with our scientifically formulated superfood-powered supplements. 
        Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy 
        of a longer, healthier life.
      </p>

      {/* Key Stats - Side-by-Side Layout */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-4">
          <p className="text-orange-600 font-extrabold text-4xl leading-none">97%</p>
          <p className="text-sm text-gray-700">
            Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <p className="text-orange-600 font-extrabold text-4xl leading-none">84%</p>
          <p className="text-sm text-gray-700">
            Provides superior nutrition and a patented superfood blend for nutrient absorption.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <p className="text-orange-600 font-extrabold text-4xl leading-none">92%</p>
          <p className="text-sm text-gray-700">
            High protein content and 1st digestibility contribute to ideal stool quality.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
        Give your furry friend the gift of wholesome nutrition
      </button>
    </div>

    {/* Right Column: Dog Image */}
    <div className="md:w-1/2 flex justify-center">
      <Image
        src="/dog.png" // Replace with your actual image filename
        alt="Happy Dog Bites"
        width={350}
        height={350}
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>






      {/* Section 3: Improve Gut Health */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image src="/dogs-eating.png" alt="Dogs Eating" width={400} height={300} className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-1200">
            Improve overall gastrointestinal health for better nutrient absorption
          </h2>
          <p className="text-gray-600 mt-4">
          Through rigorous scientific studies and consultations
           with veterinarians, we have created a breakthrough 
           formula exclusively tailored to combat the health
            challenges prevalent in dogs. A staggering 91% of
             our customers have reported significant 
             improvements in their dogs' health after 
             incorporating our product into their diet.
          </p>
        </div>
      </section>

      {/* Section 4: Probiotics */}
      <section id="probiotics" className="bg-gray-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-1200">
            Probiotics nourish the beneficial gut bacteria, supporting digestive health
          </h2>
          <p className="text-gray-600 mt-4">
          Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/dog-food-closeup.png" alt="Dog Food Closeup" width={350} height={350} className="rounded-lg" />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20 mt-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white"></h3>
            <p className="mt-2 text-sm">
              
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white"></h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white"></a></li>
              <li><a href="#nutrition" className="hover:text-white"></a></li>
              <li><a href="#probiotics" className="hover:text-white"></a></li>
              <li><a href="#contact" className="hover:text-white"></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white"></h3>
            <p className="mt-2 text-sm"></p>
            <p className="text-sm"></p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Solomon Mathew. Interview.
        </div>
      </footer>
    </main>
  );
}
