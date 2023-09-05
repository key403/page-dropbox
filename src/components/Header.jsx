
const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-white'>
      <nav className="flex font-medium text-[15px]">
        <a className="flex" href="/">
          <div className="bg-[#0061fe] px-2 text-white flex items-center text-3xl">
            <i className="ri-dropbox-fill "></i>
          </div>
          <span className=" border-b font-bold py-4 px-3 font hidden sm:block">Dropbox</span>
        </a>

        <ul className="flex flex-grow border-b">
          <div className="hidden xl:flex">
            <li><a className="py-4 px-3 inline-block hover:bg-neutral-200" href="#">¿Por qué Dropbox?</a></li>
            <li><a className="py-4 px-3 inline-block hover:bg-neutral-200" href="#">Productos</a></li>
            <li><a className="py-4 px-3 inline-block hover:bg-neutral-200" href="#">Soluciones</a></li>
            <li><a className="py-4 px-3 inline-block hover:bg-neutral-200" href="#">Precios</a></li>
          </div>

          <li className=" hidden sm:block ml-auto">
            <a className="py-[14px] px-2 inline-block hover:bg-neutral-200" href="#">
              <i className="ri-global-line text-xl"></i>
            </a>
          </li>
          <li className="hidden xl:block"><a className="py-4 px-3 inline-block hover:bg-neutral-200" href="#">Contacto</a></li>
          <li className="hidden xl:block"><a className="py-4 px-3 inline-block hover:bg-neutral-200" href="#">Obtener la aplicación</a></li>
        </ul>

        <div className="flex border-b">
          <div>
            <a className="py-4 px-3 inline-block hover:bg-[#f2eee8]" href="#">Registrate</a>
          </div>
          <div>
            <a className="py-4 px-3 inline-block hover:bg-[#f2eee8]" href="#">Inicia sesión</a>
          </div>
          <a className="hidden md:flex ms-1 group/a gap-4 text-white bg-[#0061fe] self-center py-2 px-4 hover:bg-[#0057e5]" href="#">
            <span className="font-medium">Comenzar</span>
            <span className="group-hover/a:translate-x-1 transition-transform duration-300">
              <i className="ri-arrow-right-line "></i>
            </span>
          </a>
          <div className="py-[10px] px-3 cursor-pointer xl:hidden">
            <i className="ri-menu-line text-2xl"></i>
          </div>
        </div>
      </nav>
      {/* <nav className='flex justify-between'>
        <a className="flex items-center " href="/">
          <div className="bg-[#0061fe] px-2 self-stretch text-white flex items-center text-3xl">
            <i className="ri-dropbox-fill "></i>
          </div>
          
          <span className="font-bold p-3 font hidden sm:block">Dropbox</span>
        </a>
        
        <div className="hidden">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>

          <div>close icon</div>
        </div>

        <div className="flex" >
          <a className="p-3 hover:bg-[#f2eee8] hidden sm:block" href="#" >
            <i className="ri-global-line"></i>
          </a>
          <a className="p-3 hover:bg-[#f2eee8]" href="#">Registrate</a>
          <a className="p-3 hover:bg-[#f2eee8]" href="#">Inicia sesión</a>
          <a className="flex ms-1 group/a gap-4 text-white bg-[#0061fe] self-center py-2 px-4 hover:bg-[#0057e5]" href="#">
            <span className="font-medium">Comenzar</span>
            <span className="group-hover/a:translate-x-1 transition-transform duration-300">
              <i className="ri-arrow-right-line "></i>
            </span>
          </a>
          <i className="ri-menu-line text-xl font-bold p-3 cursor-pointer"></i>
        </div> */}

        {/* <div className="absolute top-full left-0 bg-slate-100 h-screen w-full">
          <ul className="px-4 py-6">
            <li className="p-4 flex items-center justify-between">
              <span>¿Por qué Dropbox?</span>
              <i className="ri-arrow-down-s-line"></i>
            </li>
          </ul>
        </div> */}
      {/* </nav> */}
    </header>
  )
}

export default Header