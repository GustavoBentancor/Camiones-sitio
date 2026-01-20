
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DriverApplication: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    phone: '',
    email: '',
    smsConsent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Employment Consent Record:', {
      timestamp: new Date().toISOString(),
      ip: 'USER_IP_SIMULATED',
      consent: formData.smsConsent,
      data: formData
    });
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 px-8 py-10 text-white">
            <h1 className="text-3xl font-bold mb-2">Solicitud de Conductor / Empleado</h1>
            <p className="text-slate-300">Únase a la red logística de Quiklink Services LLC.</p>
          </div>
          
          <div className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <i className="fas fa-clipboard-check text-blue-500 text-6xl mb-4"></i>
                <h2 className="text-2xl font-bold mb-2">Solicitud Enviada</h2>
                <p className="text-slate-600">Revisaremos su perfil y nos pondremos en contacto pronto vía SMS o correo electrónico.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-blue-600 font-bold underline">Volver al formulario</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Años de experiencia</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    >
                      <option value="">Seleccione...</option>
                      <option value="0-2">0-2 años</option>
                      <option value="2-5">2-5 años</option>
                      <option value="5+">Más de 5 años</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Correo electrónico</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Número de teléfono</label>
                    <input 
                      type="tel" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="+1 (XXX) XXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                {/* Specific Recruitment SMS Consent */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="driver-sms-consent"
                        type="checkbox"
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer"
                        checked={formData.smsConsent}
                        onChange={(e) => setFormData({...formData, smsConsent: e.target.checked})}
                      />
                    </div>
                    <div className="ml-4 text-sm">
                      <label htmlFor="driver-sms-consent" className="font-medium text-slate-800 cursor-pointer">
                        Doy mi consentimiento para recibir SMS conversacionales e informativos de Quiklink Services LLC con respecto a mi solicitud, incluidas actualizaciones del estado de la solicitud, programación de entrevistas y comunicación de incorporación.
                      </label>
                      <p className="text-slate-500 mt-2 leading-relaxed">
                        Responda STOP para cancelar la suscripción. Responda HELP para obtener ayuda. Se pueden aplicar tarifas por mensajes y datos. Consulte nuestra <Link to="/privacy" className="text-blue-600 underline">Política de Privacidad</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 rounded-lg text-xs text-slate-500 leading-tight">
                  <strong>Textos permitidos:</strong> Estado de la solicitud, Programación de entrevistas, Documentos faltantes, Instrucciones de incorporación. NO se permiten mensajes promocionales ni de reclutamiento externo.
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg"
                  >
                    Enviar Solicitud de Empleo
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverApplication;
