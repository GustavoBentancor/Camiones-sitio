
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b pb-4">Política de Privacidad y Términos de SMS</h1>
        
        <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introducción</h2>
            <p>
              En Quiklink Services LLC, valoramos su privacidad. Esta política describe cómo manejamos su información, especialmente en relación con nuestras comunicaciones SMS.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Divulgación Obligatoria de SMS (CRÍTICO)</h2>
            <p className="font-bold text-blue-900 mb-4 uppercase text-sm tracking-wide">Cláusula de Protección de Datos:</p>
            <p className="text-lg text-blue-800 bg-white p-6 rounded-xl border border-blue-200 italic shadow-sm">
              "No se compartirá ningún consentimiento de suscripción móvil ni de mensaje de texto con terceros o afiliados."
            </p>
            <p className="mt-4 text-blue-800 bg-white p-6 rounded-xl border border-blue-200 italic shadow-sm">
              "Los números de teléfono recopilados para solicitudes de empleo o de conductor se utilizan únicamente para la comunicación relacionada con la solicitud y no se comparten con terceros o afiliados."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Términos del Servicio de SMS</h2>
            <p>Quiklink Services LLC utiliza SMS estrictamente con fines conversacionales e informativos relacionados con transporte y logística de carga, tales como:</p>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Notificaciones de llegada del conductor</li>
              <li>Actualizaciones de recogida y entrega</li>
              <li>Solicitudes de documentación (BOL/POD)</li>
              <li>Consultas de tarifas y coordinación de carga</li>
            </ul>
            <div className="mt-6 p-4 border-l-4 border-blue-500 bg-slate-50">
              <p className="font-semibold">Importante:</p>
              <ul className="space-y-1 mt-2">
                <li>• No enviamos mensajes promocionales ni de marketing.</li>
                <li>• La frecuencia de mensajes varía según la actividad de carga.</li>
                <li>• Pueden aplicarse tarifas por mensajes y datos.</li>
                <li>• <strong>Para cancelar:</strong> Responda STOP en cualquier momento.</li>
                <li>• <strong>Para ayuda:</strong> Responda HELP.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Recopilación de Información</h2>
            <p>
              Recopilamos información personal (como nombre, correo electrónico y número de teléfono) solo cuando usted nos la proporciona voluntariamente a través de nuestros formularios de contacto o solicitudes de empleo. Esta información se utiliza exclusivamente para responder a sus consultas o procesar su solicitud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra el acceso no autorizado, la pérdida o la alteración. Sus datos de consentimiento SMS se almacenan de forma segura con registros de tiempo e IP para cumplir con las normativas vigentes.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-500 italic text-center">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
