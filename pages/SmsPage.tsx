
import React from 'react';
import { Link } from 'react-router-dom';

const SmsPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Envíenos un mensaje de texto: Quiklink Services LLC</h1>
          <p className="text-xl text-slate-600">
            Para una comunicación más rápida sobre cargas, actualizaciones del conductor y documentación, puede enviarnos un SMS directo.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <i className="fas fa-comment-dots text-blue-600 mr-3"></i> Envíenos un mensaje de texto para:
            </h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center"><i className="fas fa-clock text-blue-500 mr-3 w-5"></i> Horarios de llegada del conductor</li>
              <li className="flex items-center"><i className="fas fa-sync text-blue-500 mr-3 w-5"></i> Actualizaciones de recogida y entrega</li>
              <li className="flex items-center"><i className="fas fa-file-pdf text-blue-500 mr-3 w-5"></i> Solicitudes de documentación (BOL / POD)</li>
              <li className="flex items-center"><i className="fas fa-dollar-sign text-blue-500 mr-3 w-5"></i> Preguntas sobre coordinación de carga y tarifas</li>
            </ul>
          </section>

          <section className="flex flex-col justify-center items-center text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-4">Número de texto comercial</h2>
            <p className="text-4xl font-black text-blue-900 mb-8">+1XXXXXXXXXX</p>
            <a 
              href="sms:+1XXXXXXXXXX" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center"
            >
              <i className="fas fa-sms mr-3 text-xl"></i> Envíenos un mensaje de texto ahora
            </a>
          </section>
        </div>

        {/* Mandatory Disclosure Section */}
        <section className="bg-amber-50 p-8 rounded-2xl border border-amber-200 mb-16">
          <h3 className="text-sm font-bold text-amber-800 uppercase mb-4">Divulgación visible obligatoria</h3>
          <p className="text-slate-800 leading-relaxed font-medium">
            Al enviarnos un mensaje de texto, usted acepta recibir SMS conversacionales e informativos de Quiklink Services LLC. 
            Responda <strong>STOP</strong> para cancelar la suscripción. Responda <strong>HELP</strong> para obtener ayuda. 
            Se pueden aplicar tarifas por mensajes y datos. La frecuencia de los mensajes varía. Consulte nuestra <Link to="/privacy" className="text-blue-600 underline">Política de privacidad</Link> para obtener más detalles.
          </p>
        </section>

        {/* Example Messages Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Ejemplos de mensajes (TCR Compliant)</h2>
          <div className="space-y-4">
            {[
              "El conductor llegará al sitio a las 12:30 p. m.",
              "El conductor ha recogido la carga",
              "Envíe la documentación cuando tenga la oportunidad",
              "¿Cuánto paga esta carga?"
            ].map((msg, i) => (
              <div key={i} className="flex items-start bg-slate-100 p-4 rounded-lg">
                <div className="mr-4 mt-1"><i className="fas fa-quote-left text-slate-300"></i></div>
                <p className="italic text-slate-700">"{msg}"</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-slate-100 pt-10">
          <h2 className="text-2xl font-bold mb-4">Términos de SMS</h2>
          <div className="bg-slate-50 p-8 rounded-xl text-slate-700 leading-relaxed space-y-4">
            <p>Quiklink Services LLC utiliza SMS estrictamente con fines conversacionales e informativos relacionados con transporte y logística de carga:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Notificaciones de llegada del conductor</li>
              <li>Actualizaciones de recogida y entrega</li>
              <li>Solicitudes de documentación (BOL/POD)</li>
              <li>Consultas de tarifas y coordinación de carga</li>
            </ul>
            <p className="font-semibold mt-4">No enviamos mensajes promocionales ni de marketing.</p>
            <p>La frecuencia de mensajes varía. Pueden aplicarse tarifas por mensajes y datos. Responder STOP para cancelar. Responder HELP para ayuda.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SmsPage;
