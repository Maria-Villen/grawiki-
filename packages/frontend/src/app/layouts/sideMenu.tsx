import { Link, Outlet } from "react-router-dom";
import "./sideMenu.styles.css";

export const SideMenu = () => {
  return (
    <nav className="sideMenu">
      <ul>
        <li>
          <a href={`/#`}>Crear</a>
        </li>
        <li>
          <a href={`/#`}>Banco</a>
        </li>
        <li>
          <a href={`/#`}>Salud</a>
        </li>
        <li>
          <a href={`/#`}>Gobierno</a>
        </li>
        <li>
          <a href={`/#`}>Juguetes</a>
        </li>
        <li>
          <Link to={`signup`}>Inicia sesión</Link>
        </li>
      </ul>
    </nav>
  );
};
