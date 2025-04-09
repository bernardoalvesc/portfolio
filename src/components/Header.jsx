import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Fecha o menu mobile ao clicar
    }
  };

  const sections = [
    { id: 'about', label: 'Sobre' },
    { id: 'certifications', label: 'Certificações' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Bernardo Alves 💻</h1>

        {/* Menu desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="text-white hover:text-blue-400 transition duration-300"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão de menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-black/60 backdrop-blur-sm animate-fade-in-down rounded-b-lg shadow-md">
          <ul className="space-y-4">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="text-white block w-full text-left hover:text-blue-400 transition duration-300"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

