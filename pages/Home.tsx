
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Logística de Carga <br/><span className="text-blue-500">Eficiente y Confiable</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-slate-200">
            En Quiklink Services LLC, conectamos cargas con soluciones. Expertos en transporte terrestre y coordinación logística nacional.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all text-center">
              Solicitar Cotización
            </Link>
            <Link to="/apply" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-all text-center">
              Unirse al Equipo
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Comunicación Transparente y Profesional</h2>
              <p className="text-lg text-slate-600 mb-6">
                En Quiklink Services LLC, la comunicación es el pilar de nuestra eficiencia. Utilizamos sistemas de mensajería modernos para mantener a nuestros clientes y conductores informados en tiempo real.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Actualizaciones Operativas</h4>
                    <p className="text-slate-600">Solo enviamos mensajes sobre el estado de las cargas y coordinación logística.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Cero Publicidad</h4>
                    <p className="text-slate-600">Nuestros canales de SMS son estrictamente para uso conversacional e informativo.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <Link to="/sms" className="text-blue-600 font-bold hover:underline flex items-center">
                  Conozca más sobre nuestra comunicación SMS <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-bullseye text-blue-600 mr-3"></i> Nuestra Misión
              </h3>
              <p className="italic text-slate-700 text-lg leading-relaxed">
                "Proporcionar servicios de transporte de carga superiores mediante la integración de tecnología de comunicación avanzada y un equipo humano dedicado, garantizando que cada entrega se realice de manera segura, puntual y con total transparencia."
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <div className="text-blue-600 font-bold text-3xl mb-1">100%</div>
                  <div className="text-xs uppercase text-slate-500 font-bold tracking-wider">Cumplimiento TCR</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <div className="text-blue-600 font-bold text-3xl mb-1">24/7</div>
                  <div className="text-xs uppercase text-slate-500 font-bold tracking-wider">Coordinación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
