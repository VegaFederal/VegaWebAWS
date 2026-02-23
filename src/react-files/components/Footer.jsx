import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '../assets/vega_logo_white.png'
import './Footer.css'

/**
 * Footer - Compact multi-column footer with logo, slogan, address, nav links, and scroll-to-top.
 * Uses Bootstrap grid. Typography from typography.css.
 */
export default function Footer () {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section">
      <div className="footer-border-top" />
      <div className="container py-4 py-md-5">
        <div className="row g-4 g-lg-5">
          {/* Logo, slogan, address, contact */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="footer-brand">
              <img src={LogoWhite} alt="Vega" className="footer-logo" />
              <h1 className="footer-heading text-white">Vega | Automate Your Mission</h1>
              <h2 className="footer-subheading text-white">Proudly based in St. Louis, serving clients nationwide.</h2>
            </div>
            <address className="footer-address-block text-white">
              <p className="footer-address">T-REX Innovation Center</p>
              <p className="footer-address">911 Washington Ave, Suite 412</p>
              <p className="footer-address">St. Louis, MO 63101</p>
              <Link to="mailto:Info@vegafederal.com" className="footer-link">Info@vegafederal.com</Link>
              <Link
                to="https://www.linkedin.com/company/vega-fed-solutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </Link>
            </address>
          </div>
          {/* Navigation links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="footer-col-title text-white">Navigate</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/Capabilities" className="footer-link">Capabilities</Link>
              <Link to="/Our_Story" className="footer-link">Our Story</Link>
              <Link to="/Careers" className="footer-link">Careers</Link>
              <Link to="/About" className="footer-link">Vega Team</Link>
            </nav>
          </div>
          {/* Scroll to top button */}
          <div className="col-6 col-md-3 col-lg-2 d-flex align-items-start justify-content-md-end justify-content-lg-center">
            <button
              type="button"
              onClick={scrollToTop}
              className="footer-scroll-btn"
              aria-label="Scroll to top"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="footer-copyright text-white">© {new Date().getFullYear()} Vega Federal Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="footer-border-bottom" />
    </footer>
  )
}
