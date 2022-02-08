import logo from "../../img/logo-cupstore.svg"
import { NavLink } from "react-router-dom";
// Link es para cualquier enlace
// NavLink es para un menu de navegacion donde nos marque en que opcion estamos
// un ejemplo es el menu de inicio donde esta nosotros, inicio, contacto etc
const Header = () => (
    <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <a href="/">
          <img className="main-logo" src={logo} alt="logo cupcake store"></img>
        </a>
      </div>
      <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-link">
        <nav className="main-menu">
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/cupcakes">Cupcakes</NavLink></li>
            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
          </ul>
        </nav>
        <div className="main-menu-toggle to-l"></div>
      </div>
    </div>
  </header>
)

export default Header;