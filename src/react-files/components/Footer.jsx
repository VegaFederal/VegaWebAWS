import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '../assets/vega_logo_white.png'
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg'
import './Footer.css'

/**
 * Footer - Four-column layout with brand, company nav, capabilities, contact.
 * Matches reference format with generous padding and bottom bar.
 */
export default function Footer () {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section">
      <img src={stlSkyline} alt="" className="footer-skyline" />
      <div className="footer-main">
        <div className="footer-content container">
          <div className="row g-4 g-lg-5 py-4 py-md-5">
            {/* Column 1: Brand */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-brand">
                <img src={LogoWhite} alt="Vega" className="footer-logo" />
                <h1 className="footer-heading text-white">Vega | Automate Your Mission</h1>
                <p className="footer-tagline text-white">Proudly based in St. Louis, serving clients nationwide.</p>
              </div>
            </div>
            {/* Column 2: Company */}
            <div className="col-6 col-sm-4 col-lg-3">
              <h4 className="footer-col-title">Company</h4>
              <nav className="footer-nav">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/Our_Story" className="footer-link">Our Story</Link>
                <Link to="/Careers" className="footer-link">Careers</Link>
                <Link to="/About" className="footer-link">Vega Team</Link>
              </nav>
            </div>
            {/* Column 3: Capabilities */}
            <div className="col-6 col-sm-4 col-lg-3">
              <h4 className="footer-col-title">Capabilities</h4>
              <nav className="footer-nav">
                <Link to="/Capabilities" className="footer-link">Capabilities</Link>
              </nav>
            </div>
            {/* Column 4: Contact */}
            <div className="col-12 col-sm-4 col-lg-3">
              <h4 className="footer-col-title">Contact</h4>
              <address className="footer-contact text-white">
                <p className="footer-address">T-REX Innovation Center</p>
                <p className="footer-address">911 Washington Ave, Suite 412</p>
                <p className="footer-address">St. Louis, MO 63101</p>
                <Link to="mailto:Info@vegafederal.com" className="footer-link">Info@vegafederal.com</Link>
                <Link
                  to="https://www.linkedin.com/company/vega-fed-solutions/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-linkedin"
                >
                  LinkedIn
                </Link>
              </address>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-content container d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
            <div className="d-flex flex-wrap align-items-center gap-3 gap-lg-5">
              <p className="footer-copyright text-white mb-0">© {new Date().getFullYear()} Vega Federal Solutions. All rights reserved.</p>
              <p className="footer-slogan mb-0">Vega | Automate Your Mission</p>
            </div>
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
      </div>
    </footer>
  )
}
