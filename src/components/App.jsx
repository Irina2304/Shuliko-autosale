import React, { useRef } from 'react';
import { FiDollarSign, FiClock, FiSearch, FiSmile } from 'react-icons/fi';

export default function App() {
  const cars = [
    { name: '1', image: process.env.PUBLIC_URL + '/images/1.jpg' },
    { name: '2', image: process.env.PUBLIC_URL + '/images/2.jpg' },
    { name: '3', image: process.env.PUBLIC_URL + '/images/3.jpg' },
    { name: '4', image: process.env.PUBLIC_URL + '/images/4.jpg' },
    { name: '5', image: process.env.PUBLIC_URL + '/images/5.jpg' },
    { name: '6', image: process.env.PUBLIC_URL + '/images/6.jpg' },
    { name: '7', image: process.env.PUBLIC_URL + '/images/7.jpg' },
    { name: '8', image: process.env.PUBLIC_URL + '/images/8.jpg' },
    { name: '9', image: process.env.PUBLIC_URL + '/images/9.jpg' },
    { name: '10', image: process.env.PUBLIC_URL + '/images/10.jpg' },
    { name: '11', image: process.env.PUBLIC_URL + '/images/11.jpg' },
    { name: '12', image: process.env.PUBLIC_URL + '/images/12.jpg' },
    { name: '13', image: process.env.PUBLIC_URL + '/images/13.jpg' },
  ];

  const scrollRef = useRef(null);

  const scroll = direction => {
    if (scrollRef.current) {
      const scrollAmount = 300; // ширина слайда + отступ
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div id="home" className="font-sans">
      {/* HEADER */}
      <header className="w-full border-b border-gray-700 bg-gray-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
          {/* LOGO */}
          <a
            href="#home"
            className="text-2xl md:text-3xl font-bold tracking-wide text-white flex items-center gap-2 cursor-pointer hover:opacity-90 focus:opacity-90 transition-opacity duration-200"
          >
            <span className="border-l-4 border-orange-500 h-6"></span>
            Shuliko
          </a>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-6 text-gray-300">
            {['Home', 'Über uns', 'Warum wir', 'Kontakt'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="relative text-gray-300 group cursor-pointer transition-colors duration-200 hover:text-orange-500 focus:text-orange-500 focus:outline-none"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[0.5px] bg-orange-500 transition-all duration-200 group-hover:w-full group-focus:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative h-[80vh] flex items-center px-6 bg-gradient-to-b from-gray-900 to-gray-800"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
            Professioneller An- & Verkauf von Kraftfahrzeugen
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-xl drop-shadow-2xl mx-auto">
            Faire Preise, transparente Bewertung und schnelle Abwicklung
            <br />{' '}
            <span className="font-semibold text-orange-500">
              Exklusiv online
            </span>
          </p>
        </div>
      </section>
      {/* INFO SECTION */}
      <section
        id="überuns"
        className="w-full py-20 bg-gray-100 text-gray-800 text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6">Über uns</h3>
          <p className="text-gray-700 mb-4">
            Wir sind ein junges, dynamisches Unternehmen, das sich auf den An-
            und Verkauf von Kraftfahrzeugen spezialisiert hat. Unser Ziel ist
            es, unseren Kunden den besten Service, faire Preise und eine
            unkomplizierte Abwicklung zu bieten.
          </p>
          <p className="text-gray-700 mb-4">
            Unser Team sucht kontinuierlich nach hochwertigen Fahrzeugen,
            bewertet sie professionell und sorgt dafür, dass sie schnell und
            sicher an neue Besitzer übergeben werden. Wir legen Wert auf
            Transparenz und Kundenzufriedenheit.
          </p>
          <p className="text-gray-700">
            Ob Sie Ihr Fahrzeug verkaufen oder ein neues Auto erwerben möchten –
            bei Shuliko finden Sie stets eine verlässliche, faire und schnelle
            Lösung. Ihr Vertrauen ist unser Antrieb.
          </p>
        </div>
      </section>
      {/* CARS SECTION */}
      <section
        id="fahrzeuge"
        className="w-full py-20 bg-gray-800 text-white relative"
      >
        <div className="max-w-6xl mx-auto px-6 relative">
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -translate-y-1/2 bg-gray-700/80 hover:bg-orange-500 text-white p-3 rounded-full z-10 left-2 md:left-4 lg:-left-5 transition-colors"
          >
            &#10094;
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -translate-y-1/2 bg-gray-700/80 hover:bg-orange-500 text-white p-3 rounded-full z-10 right-2 md:right-4 lg:-right-5 transition-colors"
          >
            &#10095;
          </button>

          {/* CAR LIST */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden scroll-smooth"
          >
            {cars.map((car, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US SECTION */}
      <section
        id="warumwir"
        className="w-full py-20 bg-gray-100 text-gray-800 text-center"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">Warum Shuliko?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiDollarSign />,
                title: 'Faire Preise',
                text: 'Wir bewerten Ihr Fahrzeug transparent und bieten faire Preise.',
              },
              {
                icon: <FiClock />,
                title: 'Schnelle Abwicklung',
                text: 'Vom ersten Kontakt bis zur Übergabe alles unkompliziert und schnell.',
              },
              {
                icon: <FiSearch />,
                title: 'Transparente Bewertung',
                text: 'Jedes Fahrzeug wird professionell geprüft und bewertet.',
              },
              {
                icon: <FiSmile />,
                title: 'Kundenzufriedenheit',
                text: 'Wir legen größten Wert auf Vertrauen, Sicherheit und Zufriedenheit.',
              },
            ].map((card, index) => (
              <div
                key={index}
                tabIndex={0}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg focus:-translate-y-1 focus:shadow-lg cursor-pointer outline-none"
              >
                <div className="text-orange-500 text-5xl mb-4 transition-transform group-hover:scale-110 group-focus:scale-110">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-gray-600 text-center">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer
        id="kontakt"
        className="w-full bg-gray-900 border-t border-gray-700 py-12 px-6 text-gray-300"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-4">Kontakt</h4>
            <p>Shuliko Autohandel</p>
            <p>Marktstraße 31, 31547 Rehburg-Loccum, Deutschland</p>
            <p className="mt-4">
              Telefon / WhatsApp:{' '}
              <a
                href="tel:+491602325046"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                +49 160 232 5046
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-4">
              Schnellzugriff
            </h4>
            <ul className="space-y-2">
              {['Home', 'Über uns', 'Warum wir'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Short Message / Social */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-4">Shuliko</h4>
            <p className="text-gray-400">
              Ihr zuverlässiger Partner für den An- und Verkauf von
              Kraftfahrzeugen.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2025 Shuliko Autohandel – Alle Rechte vorbehalten
        </div>
      </footer>
    </div>
  );
}
