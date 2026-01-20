
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <i className="fas fa-truck-fast text-blue-500 text-2xl"></i>
              <span className="font-bold text-xl tracking-tight uppercase">Quiklink Services LLC</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Servicios</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contacto</Link>
            <Link to="/sms" className="hover:text-blue-400 transition-colors">SMS</Link>
            <Link to="/apply" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-all">Aplicar</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-700">Inicio</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-700">Servicios</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-700">Contacto</Link>
          <Link to="/sms" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-700">SMS</Link>
          <Link to="/apply" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md bg-blue-600 text-center font-bold">Aplicar</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
