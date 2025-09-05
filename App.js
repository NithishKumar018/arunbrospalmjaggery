import React from "react";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-yellow-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ARUN & BRO's Palm Jaggery</h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><a href="#about" className="hover:text-yellow-300">About</a></li>
              <li><a href="#benefits" className="hover:text-yellow-300">Benefits</a></li>
              <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-yellow-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-yellow-900">Pure & Healthy Palm Jaggery</h2>
            <p className="text-lg text-gray-700">
              Discover the natural sweetness of Palm Jaggery, a traditional and healthy sweetener
              packed with essential nutrients and minerals.
            </p>
            <a
              href="#about"
              className="inline-block bg-yellow-900 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-800"
            >
              Learn More
            </a>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="palm-jaggery.png"
              alt="Palm Jaggery"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Palm jaggery (Karupatti) is made from the sweet sap (neera) of palm trees. The process begins with collecting fresh sap in the early morning to avoid fermentation. The sap is then filtered and boiled in large pans over firewood, with continuous stirring to remove impurities. As water evaporates, the sap thickens into a concentrated syrup. When the right consistency is reached, the syrup is poured into moulds (like coconut shells or wooden frames) and allowed to cool and harden.
            The final product is solid jaggery blocks, powder, or liquid, rich in minerals like iron, calcium, and magnesium. This traditional method is eco-friendly, provides rural employment, and produces a healthy natural sweetener widely used in food, beverages, and Ayurvedic medicine.
          </p><br></br>
          <p className="text-lg">📞 +91 96882 47545 | ✉️ arunzingel@yahoo.com | 📍 Pavoorchatram, Tenkasi, 627-808 </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-900 mb-10">Health Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
              <img src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png" alt="Immunity"
                className="mx-auto w-20 mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Boosts Immunity</h3>
              <p className="text-gray-600">Rich in antioxidants & minerals that help strengthen immunity.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
              <img src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png" alt="Digestion"
                className="mx-auto w-20 mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Aids Digestion</h3>
              <p className="text-gray-600">Helps cleanse the digestive system and improve gut health.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt="Energy"
                className="mx-auto w-20 mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Natural Energy</h3>
              <p className="text-gray-600">Provides long-lasting energy without harmful side effects of sugar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-900 mb-10">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="karupatti.jpg"
                 alt="Palm Jaggery" className="rounded-xl shadow-md"/>
            <img src="karupatti-liqud.jpg"
                 alt="Palm Sugar" className="rounded-xl shadow-md"/>
            <img src="karupatti-powder.jpg"
                 alt="Palm Products" className="rounded-xl shadow-md"/>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-yellow-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">We’d love to hear from you! Reach out for inquiries or collaborations.</p>
          <a href="mailto:arunzingel@yahoo.com"
             className="bg-yellow-900 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-800">
            arunzingel@yahoo.com
          </a>
        </div>
        <div className="mt-6 space-y-2">
          <p className="text-lg">📞 +91 96882 47545</p>
          <p className="text-lg">✉️ arunzingel@yahoo.com</p>
          <p className="text-lg">📍 Pavoorchatram, Tenkasi, 627-808 </p>
          <p className="text-lg">📌 Tamil Nadu, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-900 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} 🌴Arun & Bro's Palm Jaggery . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
