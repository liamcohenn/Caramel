import { Link, NavLink } from 'react-router-dom'
import CarritoIcono from './CarritoIcono'
import ThemeToggle from './ThemeToggle'

function Nav() {
  return (
    <nav>
      <Link to="/" className="logo">
        <span>Caramel</span>
      </Link>
      <ul className="navlinks">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/nosotras" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Nosotras
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Contacto
          </NavLink>
        </li>
      </ul>
      <div className="nav-actions">
        <ThemeToggle />
        <CarritoIcono />
      </div>
    </nav>
  )
}

export default Nav
