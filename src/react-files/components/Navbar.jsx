import { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo_blue from '../assets/vega_logo_blue.png'
import './Navbar.css'

const Navbar = () => {
  const collapseRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll() // run once on mount in case already scrolled
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  const linkClass = ({ isActive }) => `nav-link ${isActive ? ' active' : ''}`

  const closeCollapse = () => {
    const el = collapseRef.current
    if (el && typeof window !== 'undefined' && window.bootstrap) {
      const collapse = window.bootstrap.Collapse.getInstance(el)
      if (collapse) collapse.hide()
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
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
            <li className="nav-item nav-item-home-mobile">
              <NavLink className={linkClass} to="/" onClick={closeCollapse}><span>Home</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/Capabilities" onClick={closeCollapse}><span>Capabilities</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/Our_Story" onClick={closeCollapse}><span>Our Story</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/About" onClick={closeCollapse}><span>Vega Team</span></NavLink>
            </li>
            <li className="nav-item nav-item-careers">
              <NavLink className={({ isActive }) => `nav-link nav-link-careers-btn${isActive ? ' active' : ''}`} to="/Careers" onClick={closeCollapse}><span>Careers</span></NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className={linkClass} to="/ExamplePage" onClick={closeCollapse}>Example Page</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/Homepage2" onClick={closeCollapse}>Homepage 2</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
