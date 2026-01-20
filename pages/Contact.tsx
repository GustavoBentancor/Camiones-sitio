
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    smsConsent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consent Record:', {
      timestamp: new Date().toISOString(),
      ip: 'USER_IP_SIMULATED',
      consent: formData.smsConsent,
      data: formData
    });
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
          <div className="bg-blue-600 px-8 py-10 text-white">
            <h1 className="text-3xl font-bold mb-2">Solicitar una Cotización</h1>
            <p className="text-blue-100">Complete el formulario y nuestro equipo logístico se pondrá en contacto pronto.</p>
          </div>
          
          <div className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <i className="fas fa-check-circle text-green-500 text-6xl mb-4"></i>
                <h2 className="text-2xl font-bold mb-2">¡Gracias por contactarnos!</h2>
                <p className="text-slate-600">Hemos recibido su información y la evidencia de su consentimiento.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-blue-600 font-bold underline">Enviar otra solicitud</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre (Obligatorio)</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Su nombre completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Nombre de su empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Correo electrónico (Obligatorio)</label>
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
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Número de teléfono (Obligatorio)</label>
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

                {/* SMS Consent Checkbox - CRITICAL FOR 10DLC */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="sms-consent"
                        type="checkbox"
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer"
                        checked={formData.smsConsent}
                        onChange={(e) => setFormData({...formData, smsConsent: e.target.checked})}
                      />
                    </div>
                    <div className="ml-4 text-sm">
                      <label htmlFor="sms-consent" className="font-medium text-slate-800 cursor-pointer">
                        Doy mi consentimiento para recibir SMS conversacionales e informativos de Quiklink Services LLC relacionados con el transporte de carga y la coordinación de carga. 
                      </label>
                      <p className="text-slate-500 mt-2 leading-relaxed">
                        Responda STOP para cancelar la suscripción; responda HELP para obtener asistencia. Se pueden aplicar tarifas por mensajes y datos. La frecuencia de los mensajes varía. Consulte nuestra <Link to="/privacy" className="text-blue-600 underline">Política de Privacidad</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg"
                  >
                    Enviar Solicitud
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Al hacer clic en "Enviar Solicitud", usted acepta ser contactado por nuestro equipo de operaciones.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
