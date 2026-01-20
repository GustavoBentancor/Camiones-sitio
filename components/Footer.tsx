
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <i className="fas fa-truck-fast text-blue-500 mr-2"></i> Quiklink Services LLC
            </h3>
            <p className="text-sm leading-relaxed">
              Líderes en transporte por carretera y logística, comprometidos con la excelencia operativa y la transparencia en la comunicación.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 underline decoration-blue-500 decoration-2 underline-offset-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-blue-400">Servicios Logísticos</Link></li>
              <li><Link to="/sms" className="hover:text-blue-400">Términos de SMS</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400">Política de Privacidad</Link></li>
              <li><Link to="/apply" className="hover:text-blue-400">Solicitud de Empleo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 underline decoration-blue-500 decoration-2 underline-offset-4">Contacto Directo</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><i className="fas fa-phone mr-3 text-blue-500"></i> +1 (555) 123-4567</li>
              <li className="flex items-center"><i className="fas fa-envelope mr-3 text-blue-500"></i> operations@quiklink.com</li>
              <li className="flex items-center"><i className="fas fa-map-marker-alt mr-3 text-blue-500"></i> Miami, Florida, USA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Quiklink Services LLC. Todos los derechos reservados.</p>
          <div className="space-x-4">
            <Link to="/privacy" className="hover:text-white">Aviso Legal</Link>
            <Link to="/sms" className="hover:text-white">Condiciones de Mensajería</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
