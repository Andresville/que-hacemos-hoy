import Logo from "../../assets/Imagen/Logo.jpg";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-contain bg-[#F23535] mt-6 w-full h-14 flex flex-row justify-between">
      <div className="h-14 flex items-center ml-5">
        <img className="w-10 h-10" src={Logo} alt="Logo" />
      </div>
      <div className="w-2/5 h-14 flex items-center">
        <h1 className="font-black text-4xl">¿Que hacemos hoy?</h1>
      </div>
      <div className="w-2/5 h-14 flex items-center mr-5">
        <ul className="w-full flex flex-row justify-around">
          <NavLink to={'/'}>
          <li className="text-sm">Inicio</li>
          </NavLink>
          <NavLink to={'/login'}>
          <li className="text-sm">Registrarse</li>
          </NavLink>
          <NavLink to={'/artist'}>
          <li className="text-sm">Artistas</li>
          </NavLink>
          <NavLink to={'/shows'}>
          <li className="text-sm">Cartelera</li>
          </NavLink>
          <NavLink to={'/favorites'}>
          <li className="text-sm">Favoritos</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};



