
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Transporte Nacional de Carga",
      description: "Operamos una flota moderna de camiones para el traslado seguro de mercancías a través de las rutas principales del país.",
      icon: "fa-truck-moving"
    },
    {
      title: "Logística y Despacho",
      description: "Coordinación precisa de rutas, tiempos de recogida y entrega mediante comunicación constante con conductores y almacenes.",
      icon: "fa-route"
    },
    {
      title: "Gestión de Documentación",
      description: "Manejo digital eficiente de BOL (Bill of Lading), POD (Proof of Delivery) y otros documentos críticos de carga.",
      icon: "fa-file-invoice"
    },
    {
      title: "Monitoreo en Tiempo Real",
      description: "Seguimiento satelital y actualizaciones de estado vía SMS informativo para mantener la visibilidad de su cadena de suministro.",
      icon: "fa-satellite-dish"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones integrales de transporte y logística diseñadas para optimizar sus operaciones comerciales con eficiencia y claridad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`fas ${service.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">¿Por qué elegir Quiklink?</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1"><i className="fas fa-check-circle text-blue-400"></i></div>
                  <p><span className="font-bold text-blue-400">Puntualidad:</span> Entendemos que en la logística, el tiempo es dinero.</p>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1"><i className="fas fa-check-circle text-blue-400"></i></div>
                  <p><span className="font-bold text-blue-400">Tecnología:</span> Sistemas de seguimiento y comunicación de última generación.</p>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1"><i className="fas fa-check-circle text-blue-400"></i></div>
                  <p><span className="font-bold text-blue-400">Transparencia:</span> Documentación clara y actualizaciones constantes de sus cargas.</p>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
