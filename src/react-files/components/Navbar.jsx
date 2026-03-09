import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Logo_blue from '../assets/vega_logo_blue.png'
import './Navbar.css'

const Navbar = () => {
  const collapseRef = useRef(null)

  const linkClass = ({ isActive }) => `nav-link ${isActive ? ' active' : ''}`

  const closeCollapse = () => {
    const el = collapseRef.current
    if (el && typeof window !== 'undefined' && window.bootstrap) {
      const collapse = window.bootstrap.Collapse.getInstance(el)
      if (collapse) collapse.hide()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo_blue} alt="Vega" className="vega-navbar-logo" />
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" aria-hidden />
        </button>
        <div ref={collapseRef} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={linkClass} to="/" end onClick={closeCollapse}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/Capabilities" onClick={closeCollapse}>Capabilities</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/Our_Story" onClick={closeCollapse}>Our Story</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/Careers" onClick={closeCollapse}>Careers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/About" onClick={closeCollapse}>Vega Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/ExamplePage" onClick={closeCollapse}>Example Page</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/Homepage2" onClick={closeCollapse}>Homepage 2</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
