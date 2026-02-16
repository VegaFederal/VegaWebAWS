import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import SlickIcon from '../../assets/White_Slack_Icon.png'

/**
 * HeroSection - Basic hero section with background and centered text
 * Uses grid layout for centering content
 * 
 * @param {string} backgroundImage - URL for background image (optional)
 * @param {string} backgroundColor - Background color (default: #001837)
 * @param {number} imageOpacity - Opacity of background image (0-1, default: 1)
 * @param {string} title - Main heading text
 * @param {string | ReactNode} subtitle - Subtitle text (optional)
 * @param {string | ReactNode} paragraph - Extra paragraph under subtitle (optional)
 * @param {string} logoImage - Logo image to display below subtitle (optional)
 * @param {string} logoAlt - Alt text for logo (optional)
 * @param {string} logoSize - Logo size (e.g., '150px', '200px', '300px', default: responsive)
 * @param {string} ctaText - Call-to-action button text (optional)
 * @param {string} ctaDownloadFilename - Optional filename for the download attribute
 * @param {string} ctaLink - Call-to-action button link destination (optional)
 * @param {string} imageBlur - Blur amount for background image (e.g., '0px', '5px', '10px', default: '0px')
 * @param {string} height - Section height (default: 60vh)
 * @param {string} className - Additional CSS classes
 */
const HeroSection = ({
  backgroundImage,
  backgroundColor = '#001837',
  imageOpacity = .6,
  title,
  subtitle,
  paragraph,
  logoImage,
  logoAlt = 'Logo',
  logoSize,
  ctaText,
  ctaDownloadFilename,
  ctaLink,
  imageBlur = '0px',
  height = '60vh',
  className = ''
}) => {
  // Build CSS class for background
  const bgClass = backgroundImage ? 'hero-section-with-image' : 'hero-section-with-color'
  const sectionClasses = `hero-section ${bgClass} ${className}`

  // Use CSS variables for dynamic values
  const sectionStyle = {
    '--hero-bg-color': backgroundColor,
    '--hero-bg-image': backgroundImage ? `url(${backgroundImage})` : 'none',
    '--hero-height': height,
    '--hero-image-opacity': imageOpacity,
    '--hero-image-blur': imageBlur,
    ...(logoSize && { '--hero-logo-size': logoSize })
  }

  return (
    <section className={sectionClasses} style={sectionStyle}>
      <div className="container hero-container">
        <div className="row align-items-center hero-row">
          <div className="col-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2 hero-content text-center">
            {title && <h1 className="hero-title">{title}</h1>}
            {subtitle && <p className="hero-subtitle">{subtitle}</p>}
            {paragraph && <p className="hero-paragraph">{paragraph}</p>}
            {logoImage && (
              <div className="hero-logo">
                <img src={logoImage} alt={logoAlt} className="hero-logo-image" />
              </div>
            )}
            {ctaText && ctaLink && ctaDownloadFilename && (
              <div className="hero-cta">
                <Link to={ctaLink} download={ctaDownloadFilename} className="hero-cta-button">
                  <img src={SlickIcon} alt="" className="hero-cta-button-icon" />
                  {ctaText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


export default HeroSection

