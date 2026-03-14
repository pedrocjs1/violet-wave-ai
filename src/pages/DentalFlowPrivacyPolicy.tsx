import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoCompleto from "@/assets/logo-completo.png";
import { Button } from "@/components/ui/button";

const DentalFlowPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-dark-navy/95 backdrop-blur-md border-b border-accent-navy/50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Link to="/" className="inline-block">
            <img
              src={logoCompleto}
              alt="Violet Wave Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl">
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-violet-purple hover:text-violet-purple/80 -ml-4">
            <Link to="/solucion-clinicas" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a DentalFlow</span>
            </Link>
          </Button>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="mb-10">
            <p className="text-violet-purple font-semibold text-sm uppercase tracking-widest mb-3">DentalFlow by Violet Wave IA</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Política de Privacidad
            </h1>
            <p className="text-text-secondary text-lg">
              Última actualización: 14 de marzo de 2026
            </p>
          </div>

          <div className="space-y-10 text-text-secondary leading-relaxed">

            {/* Intro */}
            <p>
              Esta Política de Privacidad describe cómo <strong className="text-white">Violet Wave IA</strong>,
              operada por <strong className="text-white">Pedro Mario Vega</strong> (CUIT 20-42668619-9),
              con domicilio en Mendoza, Argentina, recopila, usa, almacena y protege
              los datos personales procesados a través de <strong className="text-white">DentalFlow</strong>,
              la plataforma SaaS de gestión para clínicas dentales.
            </p>
            <p>
              Al utilizar DentalFlow, la clínica (en adelante, <em>"el Cliente"</em>) acepta
              los términos de esta política en nombre propio y en nombre de los pacientes
              cuyos datos gestiona, siendo responsable de obtener los consentimientos
              correspondientes según la legislación aplicable.
            </p>

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Datos personales que se procesan
              </h2>
              <p className="mb-4">
                DentalFlow procesa datos de dos categorías de personas:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white mb-2">a) Datos del personal de la clínica (usuarios del sistema)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Nombre completo, correo electrónico y teléfono.</li>
                    <li>Credenciales de acceso (contraseñas almacenadas con hash bcrypt).</li>
                    <li>Rol y permisos dentro de la clínica.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">b) Datos de pacientes de la clínica</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Datos de identificación: nombre, apellido, fecha de nacimiento, DNI/documento.</li>
                    <li>Datos de contacto: número de teléfono (WhatsApp), correo electrónico, dirección.</li>
                    <li>Historial clínico dental: odontograma, diagnósticos, tratamientos, notas de visita, periodontograma.</li>
                    <li>Historia médica: alergias, medicación, antecedentes relevantes.</li>
                    <li>Plan de tratamiento y presupuestos.</li>
                    <li>Archivos adjuntos: radiografías, fotografías clínicas y documentos.</li>
                    <li>Registro de comunicaciones vía WhatsApp y notificaciones.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Finalidad del tratamiento de datos
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestionar la agenda, citas y recordatorios de la clínica.</li>
                <li>Mantener el historial clínico y odontológico de los pacientes.</li>
                <li>Facilitar la comunicación entre la clínica y sus pacientes vía WhatsApp.</li>
                <li>Automatizar confirmaciones, recordatorios y seguimientos de citas.</li>
                <li>Generar reportes y estadísticas de uso para el administrador de la clínica.</li>
                <li>Procesar pagos y gestionar facturación (en integración con Stripe o Mercado Pago).</li>
                <li>Mejorar el funcionamiento del servicio mediante análisis de uso (sin identificar pacientes).</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Uso de WhatsApp Cloud API (Meta)
              </h2>
              <p className="mb-4">
                DentalFlow utiliza la <strong className="text-white">WhatsApp Business Cloud API</strong> de Meta
                para enviar y recibir mensajes entre la clínica y sus pacientes. El uso de esta integración implica:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los mensajes son enrutados a través de los servidores de Meta Platforms Inc. conforme a su política de privacidad y términos de servicio.</li>
                <li>Solo se envían mensajes a pacientes que hayan proporcionado su número de teléfono a la clínica y dado su consentimiento para recibir comunicaciones.</li>
                <li>DentalFlow no utiliza esta integración para enviar publicidad de terceros ni para fines distintos a la gestión clínica.</li>
                <li>Los tokens de acceso de la API de Meta se almacenan cifrados en la base de datos (AES-256-GCM).</li>
                <li>El contenido de los mensajes queda registrado en la plataforma a efectos de seguimiento clínico y puede ser consultado por el personal autorizado de la clínica.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Uso de Inteligencia Artificial (Anthropic Claude)
              </h2>
              <p className="mb-4">
                DentalFlow incorpora un chatbot de atención al paciente basado en la
                API de <strong className="text-white">Anthropic Claude</strong>. Este componente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responde consultas frecuentes de pacientes (horarios, preparativos, estado de citas) de forma automática.</li>
                <li>Puede acceder al contexto básico del paciente (nombre, próxima cita) para personalizar las respuestas.</li>
                <li>
                  <strong className="text-white">No almacena ni comparte historial clínico sensible</strong> con los modelos de IA.
                  El acceso está limitado al contexto mínimo necesario para cada conversación.
                </li>
                <li>Las conversaciones son procesadas por los servidores de Anthropic PBC conforme a su política de uso y privacidad. Anthropic no entrena sus modelos con datos de API por defecto.</li>
                <li>El Cliente puede desactivar el chatbot de IA en cualquier momento desde la configuración de su cuenta.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Integración con Google Calendar
              </h2>
              <p className="mb-4">
                DentalFlow ofrece sincronización bidireccional con <strong className="text-white">Google Calendar</strong>
                {" "}para gestionar la agenda del profesional. Al activar esta integración:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Se solicita autorización OAuth 2.0 al usuario; DentalFlow solo accede a los calendarios que el usuario aprueba explícitamente.</li>
                <li>Se sincronizan eventos de citas (nombre del paciente, fecha, hora y duración). No se sincronizan datos clínicos sensibles.</li>
                <li>Los tokens de acceso y refresh de Google OAuth se almacenan cifrados (AES-256-GCM) en la base de datos.</li>
                <li>El usuario puede revocar el acceso en cualquier momento desde su cuenta de Google o desde la configuración de DentalFlow.</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Almacenamiento y seguridad de los datos
              </h2>
              <p className="mb-4">
                Los datos se almacenan en una base de datos <strong className="text-white">PostgreSQL</strong> alojada
                en <strong className="text-white">Supabase / Neon</strong> (infraestructura en la nube con centros de datos
                en Estados Unidos o la Unión Europea). Las medidas de seguridad implementadas incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Cifrado en reposo:</strong> los datos sensibles (tokens de integración, información crítica) se cifran con AES-256-GCM antes de ser almacenados.</li>
                <li><strong className="text-white">Cifrado en tránsito:</strong> toda comunicación entre el cliente y los servidores utiliza TLS 1.2+.</li>
                <li><strong className="text-white">Autenticación JWT:</strong> cada sesión requiere un token firmado con expiración; los refresh tokens se rotan en cada uso.</li>
                <li><strong className="text-white">Contraseñas:</strong> almacenadas exclusivamente como hash bcrypt, nunca en texto plano.</li>
                <li><strong className="text-white">Control de acceso:</strong> los middlewares de autenticación protegen todos los endpoints; no existe ninguna ruta pública que exponga datos de pacientes.</li>
                <li><strong className="text-white">Backups:</strong> copias de seguridad automáticas gestionadas por el proveedor de base de datos con retención configurable.</li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Aislamiento de datos por clínica (Tenant Isolation)
              </h2>
              <p>
                DentalFlow es una plataforma <em>multi-tenant</em>. Cada clínica opera en un
                entorno completamente aislado:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Todas las consultas a la base de datos se filtran obligatoriamente por <code className="text-violet-purple bg-accent-navy/40 px-1 rounded">tenantId</code>, garantizando que una clínica nunca pueda acceder a los datos de otra.</li>
                <li>Los archivos almacenados (radiografías, imágenes) se organizan en rutas aisladas por tenant en el sistema de almacenamiento de objetos (Cloudflare R2 / AWS S3).</li>
                <li>Los usuarios solo pueden autenticarse en la clínica a la que pertenecen.</li>
                <li>Los administradores de Violet Wave IA pueden acceder a datos de clínicas únicamente con fines de soporte técnico, bajo solicitud explícita del Cliente y con registro de auditoría.</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Cookies y analítica
              </h2>
              <p className="mb-4">DentalFlow utiliza las siguientes tecnologías de seguimiento:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Cookies de sesión:</strong> necesarias para mantener la autenticación del usuario. No contienen datos clínicos.</li>
                <li><strong className="text-white">Cookies de preferencia:</strong> almacenan configuración de la interfaz (idioma, zona horaria).</li>
                <li><strong className="text-white">Analítica de uso:</strong> se pueden recopilar métricas anonimizadas de uso de la plataforma (páginas visitadas, funciones utilizadas) para mejorar el producto. No se venden a terceros.</li>
              </ul>
              <p className="mt-4">
                El usuario puede gestionar las cookies desde la configuración de su navegador.
                Deshabilitar cookies esenciales puede impedir el funcionamiento correcto del sistema.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Compartición de datos con terceros
              </h2>
              <p className="mb-4">
                Violet Wave IA no vende ni alquila los datos de pacientes ni de clínicas.
                Los datos pueden ser compartidos únicamente con los siguientes proveedores de
                infraestructura, estrictamente necesarios para la prestación del servicio:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-accent-navy/50">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Proveedor</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Finalidad</th>
                      <th className="text-left py-3 text-white font-semibold">País</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent-navy/30">
                    <tr>
                      <td className="py-3 pr-4 text-white">Supabase / Neon</td>
                      <td className="py-3 pr-4">Base de datos PostgreSQL</td>
                      <td className="py-3">EE.UU. / UE</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Vercel</td>
                      <td className="py-3 pr-4">Alojamiento del frontend</td>
                      <td className="py-3">EE.UU.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Railway</td>
                      <td className="py-3 pr-4">Alojamiento del backend</td>
                      <td className="py-3">EE.UU.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Meta Platforms</td>
                      <td className="py-3 pr-4">WhatsApp Cloud API</td>
                      <td className="py-3">EE.UU.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Anthropic PBC</td>
                      <td className="py-3 pr-4">Chatbot de IA (Claude)</td>
                      <td className="py-3">EE.UU.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Google LLC</td>
                      <td className="py-3 pr-4">Integración Google Calendar</td>
                      <td className="py-3">EE.UU.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Stripe / Mercado Pago</td>
                      <td className="py-3 pr-4">Procesamiento de pagos</td>
                      <td className="py-3">EE.UU. / LATAM</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Cloudflare R2 / AWS S3</td>
                      <td className="py-3 pr-4">Almacenamiento de archivos</td>
                      <td className="py-3">EE.UU.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">Resend / Amazon SES</td>
                      <td className="py-3 pr-4">Envío de correos transaccionales</td>
                      <td className="py-3">EE.UU.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Retención y eliminación de datos
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Durante la suscripción activa:</strong> los datos se conservan íntegramente mientras el Cliente mantenga una suscripción vigente.</li>
                <li><strong className="text-white">Tras la cancelación:</strong> los datos se retienen durante 90 días para permitir la exportación o reactivación. Vencido este plazo, se eliminan de forma permanente.</li>
                <li><strong className="text-white">Eliminación de registros individuales:</strong> DentalFlow implementa borrado lógico (<em>soft delete</em>) por defecto. La eliminación física permanente puede solicitarse por escrito al responsable.</li>
                <li><strong className="text-white">Exportación:</strong> el Cliente puede exportar sus datos en formato CSV/JSON en cualquier momento desde el panel de administración.</li>
              </ul>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Derechos del usuario
              </h2>
              <p className="mb-4">
                Conforme a la <strong className="text-white">Ley 25.326 de Protección de Datos Personales</strong> de
                Argentina y normativas equivalentes de los países donde opera DentalFlow, el titular de los datos tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Acceso:</strong> conocer qué datos personales están almacenados y cómo se utilizan.</li>
                <li><strong className="text-white">Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                <li><strong className="text-white">Eliminación:</strong> solicitar la supresión de datos cuando no sean necesarios para el fin con que fueron recopilados.</li>
                <li><strong className="text-white">Portabilidad:</strong> recibir los datos en un formato estructurado y de uso común.</li>
                <li><strong className="text-white">Oposición:</strong> oponerse al tratamiento de datos para fines de marketing o comunicaciones no esenciales.</li>
                <li><strong className="text-white">Revocación del consentimiento:</strong> retirar el consentimiento en cualquier momento, sin efecto retroactivo.</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, el titular debe contactar al administrador de la clínica que gestiona sus datos.
                La clínica es el responsable del tratamiento frente al paciente; Violet Wave IA actúa como encargado del tratamiento.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                12. Cambios en esta política
              </h2>
              <p>
                Violet Wave IA puede actualizar esta Política de Privacidad para reflejar cambios en el
                servicio, requisitos legales o mejoras de seguridad. Cuando se realicen cambios
                sustanciales, se notificará al Cliente por correo electrónico con al menos 15 días de
                anticipación. El uso continuado del servicio tras ese plazo implica la aceptación
                de la nueva política.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                13. Contacto
              </h2>
              <p className="mb-4">
                Para consultas, solicitudes de eliminación de datos o ejercicio de derechos relacionados
                con esta política, podés comunicarte con el responsable del tratamiento:
              </p>
              <div className="space-y-2 pl-4 border-l-2 border-violet-purple/50">
                <p><strong className="text-white">Responsable:</strong> Pedro Mario Vega</p>
                <p><strong className="text-white">Empresa:</strong> Violet Wave IA</p>
                <p><strong className="text-white">CUIT:</strong> 20-42668619-9</p>
                <p><strong className="text-white">Domicilio:</strong> Mendoza, Argentina</p>
                <p>
                  <strong className="text-white">Email: </strong>
                  <a
                    href="mailto:pedro@violetwaveai.com"
                    className="text-violet-purple hover:text-violet-purple/80 font-semibold"
                  >
                    pedro@violetwaveai.com
                  </a>
                </p>
                <p>
                  <strong className="text-white">Sitio web: </strong>
                  <a
                    href="https://www.violetwaveai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-purple hover:text-violet-purple/80 font-semibold"
                  >
                    www.violetwaveai.com
                  </a>
                </p>
              </div>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-accent-navy/50">
            <Button asChild className="bg-violet-purple hover:bg-violet-purple/90 text-white">
              <Link to="/solucion-clinicas">Volver a DentalFlow</Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default DentalFlowPrivacyPolicy;
