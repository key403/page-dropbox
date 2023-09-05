import 'remixicon/fonts/remixicon.css'
import Header from "./components/Header"
import img from "./assets/1.jpg"
import dropbox from "./assets/icons/Dropbox.svg"
import sign from "./assets/icons/Sign.svg"
import docsend from "./assets/icons/Docsend.svg"
import backup from "./assets/icons/Backup.svg"
import capture from "./assets/icons/Capture.svg"
import transfer from "./assets/icons/Transfer.svg"
import paper from "./assets/icons/Paper.svg"
import passwords from "./assets/icons/Passwords.svg"

import s1 from "./assets/s1.jpg"
import s2 from "./assets/s2.jpg"

import zoom from "./assets/socios/zoom.jpg"
import slack from "./assets/socios/slack.jpg"
import adobe from "./assets/socios/adobe.jpg"
import office from "./assets/socios/office.jpg"
import workspace from "./assets/socios/google-workspace.jpg"
import trello from "./assets/socios/trello.jpg"
import canvas from "./assets/socios/canvas.jpg"
import asana from "./assets/socios/asana.jpg"

import w from "./assets/w.jpg"

function App() {

  return (
    <div className='font'>
      <Header />

      <main>
        <section className='pb-24 pt-32 bg-[#1e1919] text-white'>
          <div className='px-4'>
            <div className='max-w-[830px] mx-auto text-white'>
              <div className='flex text-center flex-col gap-4'>
                <h2 className='font-medium text-4xl lg:text-5xl lg:mb-2'>Únete a los más de 700 millones de usuarios registrados que confían en Dropbox</h2>
                <div>
                  Fácil de utilizar, confiable, privado y seguro. No es de extrañar que Dropbox sea la elección para almacenar y compartir tus archivos más importantes.
                </div>
              </div>

              <div className=' mt-8 flex flex-col'>
                <a className='mb-8 group self-center p-6 bg-[#3984ff] text-black text-lg hover:bg-[#4d90ff]' href="#">
                  <span className='font-medium'>Encuentra tu plan</span>
                  <i className="ri-arrow-right-line inline-block ms-5 group-hover:translate-x-1 duration-300 transition-transform"></i>
                </a>

                <div className='flex flex-col gap-y-2 md:flex-row text-lg md:self-center'>
                  <input className='border w-full md:w-[300px] p-2 bg-transparent border-white' type="text" placeholder='Ingresa tu correo' />
                  <a href="#"></a>
                  <a className='py-2 px-6 border-2 text-center border-white' href="#">
                    Regístrate gratis
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-20'>
            <div className=' max-w-2xl mx-auto'>
              <img src={img} alt="" />
            </div>

            <h2 className='text-center text-white text-2xl md:text-4xl mt-20 font-medium'>
              Descubre lo que diferencia a Dropbox
            </h2>
          </div>

          <div className='mt-20 grid container gap-y-16 mx-auto p-4 lg:px-14 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col gap-6 px-4'>
              <i className="ri-emotion-happy-line text-4xl"></i>
              <h3 className='font-bold'>Tus archivos no los nuestros</h3>
              <p>Con Dropbox, tus archivos te pertenecen a ti, no a nosotros, de modo que puedes estar seguro de que no revendemos tus datos.</p>
            </div>

            <div className='flex flex-col gap-6 px-4'>
              <i className="ri-cloudy-2-line text-4xl"></i>
              <h3 className='font-bold'>Todos tus archivos en un solo lugar</h3>
              <p>Almacena copias de seguridad de tu computadora, bibliotecas de fotos, miles de documentos: todos tus archivos, en el mismo lugar.</p>
            </div>

            <div className='flex flex-col gap-6 px-4'>
              <i className="ri-bard-line text-4xl"></i>
              <h3 className='font-bold'>Funcionalidad única</h3>
              <p>Almacena archivos de hasta 2 TB cada uno, sincronízalos a la velocidad de la luz y permite que cualquier persona obtenga una vista previa de casi 200 tipos de archivos.</p>
            </div>

            <div className='flex flex-col gap-6 px-4'>
              <i className="ri-shield-check-line text-4xl"></i>
              <h3 className='font-bold'>Facilidad de uso y seguridad</h3>
              <p>2/3 de los usuarios encuestados afirman que Dropbox mantiene sus archivos más seguros y somos líderes en facilidad de uso.</p>
            </div>
          </div>
        </section>

        <section className='py-24 container mx-auto px-4'>
          <h2 className=' mx-auto font-medium text-3xl lg:text-4xl text-center max-w-3xl'>Un conjunto de productos para ayudarte a aumentar tu productividad</h2>
          <div className='mt-20 grid gap-y-20 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col gap-4 px-6'>
              <span>
                <img src={dropbox} height={60} width={60}  />
              </span>
              <h3 className='font-semibold'>Dropbox</h3>
              <p>Almacena, organiza y comparte de forma segura todos tus archivos.</p>
              <a href="#" className='group/b font-semibold'>
                <span className='underline underline-offset-4 mr-3'>Obtener más información</span>
                <span className='inline-block group-hover/b:translate-x-1 transition-transform duration-300'>
                  <i className="ri-arrow-right-line "></i>
                </span>
              </a>
            </div>

            <div className='flex flex-col gap-4 px-6'>
              <span>
                <img src={sign} height={40} width={40} />
              </span>
              <h3 className='font-semibold'>Sign</h3>
              <p>Optimiza tus flujos de trabajo documentales con firmas electrónicas legalmente vinculantes..</p>
              <a href="#" className='group/b font-semibold'>
                <span className='underline underline-offset-4  mr-3'>Obtener más información</span>
                <span className='inline-block group-hover/b:translate-x-1 transition-transform duration-300'>
                  <i className="ri-arrow-right-line "></i>
                </span>
              </a>
            </div>

            <div className='flex flex-col gap-4 px-6'>
              <span>
                <img src={docsend} height={45} width={45} />
              </span>
              <h3 className='font-semibold'>DocSend</h3>
              <p>Comparte de forma segura tus documentos con información en tiempo real, para saber qué es lo más impactante.</p>
              <a href="#" className='group/b font-semibold'>
                <span className='underline underline-offset-4  mr-3'>Obtener más información</span>
                <span className='inline-block group-hover/b:translate-x-1 transition-transform duration-300'>
                  <i className="ri-arrow-right-line "></i>
                </span>
              </a>
            </div>

            <div className='flex flex-col gap-4 px-6'>
              <span>
                <img src={backup} height={50} width={50} />
              </span>
              <h3 className='font-semibold'>Backup</h3>
              <p>Realiza copias de seguridad automáticas en la nube de los archivos importantes de tus dispositivos y restáuralos con facilidad.</p>
              <a href="#" className='group/b font-semibold'>
                <span className='underline underline-offset-4 mr-3'>Obtener más información</span>
                <span className='inline-block group-hover/b:translate-x-1 transition-transform duration-300'>
                  <i className="ri-arrow-right-line "></i>
                </span>
              </a>
            </div>

            <div className='flex flex-col gap-4 px-6'>
              <span>
                <img src={capture} height={50} width={50} />
              </span>
              <h3 className='font-semibold'>Capture</h3>
              <p>Transmite tu mensaje con capturas de pantalla, GIF o videos grabados directamente en tu pantalla.</p>
              <a href="#" className='group/b font-semibold'>
                <span className='underline underline-offset-4 mr-3'>Obtener más información</span>
                <span className='inline-block group-hover/b:translate-x-1 transition-transform duration-300'>
                  <i className="ri-arrow-right-line "></i>
                </span>
              </a>
            </div>

            <div className='flex flex-col gap-4 px-6'>
              <span>
                <img src={transfer} height={50} width={50} />
              </span>
              <h3 className='font-semibold'>Transfer</h3>
              <p>Entrega archivos grandes de forma rápida y segura hasta 100 GB a cualquier persona.</p>
              <a href="#" className='group/b font-semibold'>
                <span className='underline underline-offset-4 mr-3'>Obtener más información</span>
                <span className='inline-block group-hover/b:translate-x-1 transition-transform duration-300'>
                  <i className="ri-arrow-right-line "></i>
                </span>
              </a>
            </div>

            <div className='flex flex-col gap-4 px-6'>
              <span>
                <img src={paper} height={50} width={50} />
              </span>
              <h3 className='font-semibold'>Paper</h3>
              <p>Crea documentos colaborativos para coordinar el trabajo e impulsar los proyectos.</p>
              <a href="#" className='group/b font-semibold'>
                <span className='underline underline-offset-4 mr-3'>Obtener más información</span>
                <span className='inline-block group-hover/b:translate-x-1 transition-transform duration-300'>
                  <i className="ri-arrow-right-line "></i>
                </span>
              </a>
            </div>

            <div className='flex flex-col gap-4 px-6'>
              <span>
                <img src={passwords} height={50} width={50} />
              </span>
              <h3 className='font-semibold'>Passwords</h3>
              <p>Almacena automáticamente una cantidad ilimitada de contraseñas en un lugar central y seguro.</p>
              <a href="#" className='group/b font-semibold'>
                <span className='underline underline-offset-4 mr-3'>Obtener más información</span>
                <span className='inline-block group-hover/b:translate-x-1 transition-transform duration-300'>
                  <i className="ri-arrow-right-line "></i>
                </span>
              </a>
            </div>
            
            
          </div>
        </section>

        <section className='bg-[#1e1919] py-24 text-white'>
          <div className='container mx-auto px-4'>
            <h2 className='mx-auto font-medium text-3xl lg:text-4xl text-center max-w-3xl'>¿Cómo usarás Dropbox?</h2>
            <div className=' mt-20 grid lg:grid-cols-2 gap-6'>
              <div className='bg-[#2b2929]'>
                <div>
                  <img src={s1} className='object-cover max-h-[212px] w-full' />
                </div>
                <div className=' py-12 px-6 lg:p-12'>
                  <h2 className='mb-10 font-medium text-xl lg:text-2xl'>Para el trabajo</h2>
                  <p>Trabaja con eficiencia con tus compañeros de equipo y clientes, mantente sincronizado en tus proyectos y protege los datos de la empresa en un solo lugar.</p>
                  <a className=' px-6 py-4 mt-6 group/c inline-block text-black font-semibold bg-[#3984ff] hover:bg-[#4d90ff] transition-all duration-300' href="#">
                    <span>Obtén Dropbox para el trabajo</span>
                    <span className='ml-4 inline-block group-hover/c:translate-x-1 transition-transform duration-300'>
                      <i className="ri-arrow-right-line "></i>
                    </span>
                  </a>
                </div>
              </div>

              <div className='bg-[#2b2929]'>
                <div>
                  <img src={s2} className='object-cover max-h-[212px] w-full' />
                </div>
                <div className='py-12 px-6 lg:p-12'>
                  <h2 className='mb-10 font-medium text-xl lg:text-2xl'>Para uso personal</h2>
                  <p>Trabaja con eficiencia con tus compañeros de equipo y clientes, mantente sincronizado en tus proyectos y protege los datos de la empresa en un solo lugar.</p>
                  <a className=' px-6 py-4 mt-6 group/c inline-block text-black font-semibold bg-[#3984ff] hover:bg-[#4d90ff] transition-all duration-300' href="#">
                    <span>Obtén Dropbox para uso personal</span>
                    <span className='ml-4 inline-block group-hover/c:translate-x-1 transition-transform duration-300'>
                      <i className="ri-arrow-right-line "></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='container mx-auto px-4'>
            <h2 className='mx-auto my-24 font-medium text-3xl lg:text-4xl text-center max-w-3xl'>Almacenamiento en la nube en el que puedes confiar</h2>
            
            <div className='grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4'>
              <div className='flex gap-4 flex-col px-6'>
                <span className='font-medium text-5xl'>56%</span>
                <h3 className='font-semibold'>de empresas de la Fortune 500</h3>
                <p>tienen al menos un plan de quipo de Dropbox.</p>
              </div>

              <div className='flex gap-4 flex-col px-6'>
                <span className='font-medium text-5xl'>1B+</span>
                <h3 className='font-semibold'>descargas de aplicaciones para dispositivos móviles</h3>
                <p>con los premios Editors’ Choice Awards de Google Play y Apple App Store.</p>
              </div>

              <div className='flex gap-4 flex-col px-6'>
                <span className='font-medium text-5xl'>600K+</span>
                <h3 className='font-semibold'>equipos a nivel mundial</h3>
                <p>usan Dropbox para compartir el trabajo, proteger el contenido y hacer crecer su negocio.</p>
              </div>

              <div className='flex gap-4 flex-col px-6'>
                <span className='font-medium text-5xl'>4.5B</span>
                <h3 className='font-semibold'>conexiones y conteo</h3>
                <p>creados a través del uso compartido de archivos de Dropbox.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='container mx-auto px-4 py-24'>
        <h2 className='mx-auto font-medium text-3xl lg:text-4xl text-center max-w-3xl'>Aprovecha Dropbox al máximo vinculando tus herramientas favoritas</h2>
        <a href='#' className='block text-center underline hover:no-underline mt-4'>Más información sobre la integración con socios</a>

        <div className='mt-20 grid gap-y-16 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col gap-6 px-6'>
            <img src={zoom} height={48} width={48} />
            <h3 className='font-semibold'>Zoom</h3>
            <p>Mejora la colaboración a distancia con reuniones instantáneas de Zoom y grabaciones de video.</p>
          </div>

          <div className='flex flex-col gap-6 px-6'>
            <img src={slack} height={48} width={48} />
            <h3 className='font-semibold'>Slack</h3>
            <p>Reúne las conversaciones de Slack y el contenido de Dropbox para mantener a los equipos sincronizados.</p>
          </div>

          <div className='flex flex-col gap-6 px-6'>
            <img src={adobe} height={48} width={48} />
            <h3 className='font-semibold'>Adobe Creative Cloud</h3>
            <p>Envía archivos a clientes y proveedores de forma fácil y segura desde Adobe Photoshop.</p>
          </div>

          <div className='flex flex-col gap-6 px-6'>
            <img src={office} height={48} width={48} />
            <h3 className='font-semibold'>Microsoft Office</h3>
            <p>Accede fácilmente, edita y comparte documentos de Office en Dropbox.</p>
          </div>

          <div className='flex flex-col gap-6 px-6'>
            <img src={workspace} height={48} width={48} />
            <h3 className='font-semibold'>Google Workspace</h3>
            <p>Crea, edita y comparte documentos, hojas de cálculo y presentaciones de Google en Dropbox.</p>
          </div>

          <div className='flex flex-col gap-6 px-6'>
            <img src={trello} height={48} width={48} />
            <h3 className='font-semibold'>Trello</h3>
            <p>Colabora en proyectos del equipo en Trello con contenido de Dropbox.</p>
          </div>

          <div className='flex flex-col gap-6 px-6'>
            <img src={canvas} height={48} width={48} />
            <h3 className='font-semibold'>Canvas</h3>
            <p>Carga archivos o asignaciones de cursos en Canvas directamente desde Dropbox.</p>
          </div>

          <div className='flex flex-col gap-6 px-6'>
            <img src={asana} height={48} width={48} />
            <h3 className='font-semibold'>Asana</h3>
            <p>Haz un seguimiento del trabajo de tu equipo con Asana, sin separar el contenido de Dropbox.</p>
          </div>
        </div>
        </section>

      <section className='bg-[#1e1919] py-20 text-white'>
        <h2 className='mx-auto font-medium text-3xl lg:text-4xl text-center max-w-3xl'>Contamos con la confianza de más de 700 millones de usuarios registrados y 600 000 equiposs</h2>
        <a href='#' className='block text-center underline mt-4 hover:no-underline'>Echa un vistazo a más historias de clientes</a>
      </section>
      
      <section className='bg-[#242121] py-24 text-white'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 gap-x-10 lg:gap-x-20  gap-y-6'>
          <img src={w}  />
          <div className='md:self-center flex flex-col  gap-8'>
            <p className='text-xl  lg:text-2xl font-medium'>"Dropbox ha sido tremendamente útil para las redes sociales. Puedo entrar en cualquier momento y sacar cualquier foto que me inspire para publicar".</p>
            <a className='font-semibold group' href="#">
              <span className='underline '>Lee la historia completa</span>
              <i className="ri-arrow-right-line ms-2 inline-block group-hover:translate-x-1 duration-300 transition-transform"></i>
            </a>
            <span className='font-medium'>Mary Ashley Krogh (MAK), ilustradora y diseñadora gráfica</span>
          </div>
        </div>
        </section> 

        <section className='bg-[#1e1919] py-20 text-white flex'>
          <div className='container mx-auto px-4 flex flex-col gap-y-10 items-start lg:flex-row'>
            <h2 className=' text-2xl lg:w-4/6 xl:w-3/6 font-semibold md:text-4xl lg:text-5xl'>Para todo lo que vale la pena compartir.</h2>
            <div className='flex-grow flex justify-center'>
              <a className='inline-block bg-[#3984ff] hover:bg-[#4d90ff] group p-6 text-black font-semibold' href="#">
                <span>invitar a un amigo</span>
                <i className="ri-arrow-right-line ms-6 inline-block group-hover:translate-x-1 duration-300 transition-transform"></i>
              </a>
            </div>
          </div>
        </section>

        <footer className='bg-black text-white py-20'>
            <div className='container mx-auto px-4 '>    
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10'>
                <div>
                  <h3 className=' mb-6 font-semibold text-lg'>Dropbox</h3>

                  <ul className='flex flex-col items-start gap-3 text-sm'>
                    <li>
                      <a className='hover:underline' href="#">Aplicación para escritorio</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Aplicación para dispositivos móviles</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Integraciones</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Características</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Soluciones</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Gana en productividad</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Seguridad</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Acceso anticipado</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className=' mb-6 font-semibold text-lg'>Productos</h3>

                  <ul className='flex flex-col items-start gap-3 text-sm'>
                    <li>
                      <a className='hover:underline' href="#">Plus</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Professional</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Business</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Enterprise</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Dropbox Sign</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">DocSend</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Planes</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Actualizaciones de productos</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className=' mb-6 font-semibold text-lg'>Soporte</h3>

                  <ul className='flex flex-col items-start gap-3 text-sm'>
                    <li>
                      <a className='hover:underline' href="#">Centro de ayuda</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Contacto</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Privacidad y condiciones</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Política de cookies</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Preferencias de cookies y CCPA</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Principios de IA</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Mapa del sitio</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Recursos de aprendizaje</a>
                    </li>
                  </ul>
                </div>

                <div >
                  <h3 className=' mb-6 font-semibold text-lg'>Comunidad</h3>

                  <ul className='flex flex-col items-start gap-3 text-sm'>
                    <li>
                      <a className='hover:underline' href="#">Blog</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Desarrolladores</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Foros de comunidad</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Recomendaciones</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Socios revendedores</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Socios de integración</a>
                    </li>
                  </ul>
                </div>

                <div >
                  <h3 className=' mb-6 font-semibold text-lg'>Empresa</h3>

                  <ul className='flex flex-col items-start gap-3 text-sm'>
                    <li>
                      <a className='hover:underline' href="#">Quiénes somos</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Empleos</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Relaciones con inversionistas</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">ESG</a>
                    </li>
                    <li>
                      <a className='hover:underline' href="#">Encuentra un socio</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=' mt-12 text-2xl flex gap-3 pb-8 border-b border-neutral-600 w-max pr-6'>
                <a className='hover:bg-neutral-700 px-1 text-center' href="#">
                  <i className="ri-twitter-fill"></i>
                </a>
                <a className='hover:bg-neutral-700 px-1 text-center' href="#">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
                <a className='hover:bg-neutral-700 px-1 text-center' href="#">
                  <i className="ri-youtube-fill"></i>
                </a>
              </div>

              <a href='#' className='group flex items-center mt-8'>
                <i className="ri-global-line"></i>
                <span className='group-hover:underline ml-1 mr-2 font-medium'>Español (Latinoamérica)</span>
                <i className="ri-arrow-right-s-line self-center text-2xl"></i>
              </a>
            </div>

        </footer>
      </main>
    </div>
  )
}

export default App
