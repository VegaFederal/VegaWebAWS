import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import SlickIcon from '../../assets/White_Slack_Icon.png'

/**
 * HeroSection - Basic hero section with background and centered text
 * Uses grid layout for centering content
 * 
 * @param {string} backgroundImage - URL for background image (optional)
 * @param {string} backgroundVideo - URL for background video (optional; takes precedence over backgroundImage when set)
 * @param {string} backgroundColor - Background color (default: #001837)
 * @param {number} imageOpacity - Opacity of background image (0-1, default: 1)
 * @param {string} title - Main heading text
 * @param {string | ReactNode} subtitle - Subtitle text (optional) ReactNode allows for HTML tags and line breaks in the subtitle.
 * @param {string | ReactNode} paragraph - Extra paragraph under subtitle (optional)
 * @param {string} logoImage - Logo image to display below subtitle (optional)
 * @param {string} logoAlt - Alt text for logo (optional)
 * @param {string} logoSize - Logo size (e.g., '150px', '200px', '300px', default: responsive)
 * @param {string} ctaText - Call-to-action button text (optional)
 * @param {string} ctaDownloadFilename - Optional filename for the download attribute
 * @param {string} ctaLink - Call-to-action button link destination (optional)
 * @param {string} imageBlur - Blur amount for background image (e.g., '0px', '5px', '10px', default: '0px')
 * @param {string} height - Section height (default: 60vh)
 * @param {'left'|'center'|'right'} textAlign - Text and content alignment (default: 'center')
 * @param {string} contentMaxWidth - Max width of text block, any CSS value (e.g. '65ch', '600px', '50%'). Omit for full column width.
 * @param {string} className - Additional CSS classes
 */
const HeroSection = ({
  backgroundImage,
  backgroundVideo,
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
  textAlign = 'center',
  contentMaxWidth,
  className = ''
}) => {
  // Build CSS class for background (video takes precedence over image)
  const bgClass = backgroundVideo
    ? 'hero-section-with-video'
    : backgroundImage
      ? 'hero-section-with-image'
      : 'hero-section-with-color'
  const sectionClasses = `hero-section ${bgClass}${textAlign === 'left' ? ' hero-section-align-left' : ''} ${className}`.trim()

  // Bootstrap text and flex alignment from textAlign
  const alignMap = { left: 'start', center: 'center', right: 'end' }
  const align = alignMap[textAlign] ?? 'center' // ?? defaults to center if textAlign is null or undefined.
  const textClass = `text-${align}`
  const justifyClass = `justify-content-${align}`
  const colOffsetClass = textAlign === 'left' ? '' : textAlign === 'right' ? 'offset-lg-2 offset-xl-4' : 'offset-lg-1 offset-xl-2'

  // Use CSS variables for dynamic values
  const sectionStyle = {
    '--hero-bg-color': backgroundColor,
    '--hero-bg-image': backgroundImage ? `url(${backgroundImage})` : 'none',
    '--hero-height': height,
    '--hero-image-opacity': imageOpacity,
    '--hero-image-blur': imageBlur,
    ...(logoSize && { '--hero-logo-size': logoSize })
  }

  const contentStyle = contentMaxWidth ? { maxWidth: contentMaxWidth } : undefined

  return (
    <section className={`${sectionClasses} position-relative overflow-hidden d-flex align-items-center justify-content-center`} style={sectionStyle}>
      {backgroundVideo && (
        <video
          src={backgroundVideo}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          style={{ zIndex: 0 }}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      )}
      <div className="container position-relative z-2 hero-container h-100">
        <div className="row align-items-center hero-row">
          <div className={`col-12 col-lg-10 col-xl-8 ${colOffsetClass} ${textClass} py-3 py-md-4 py-lg-5`} style={contentStyle}>
            {title && <h1 className="text-white mb-3">{title}</h1>}
            {subtitle && <p className="text-white fs-5 mb-0">{subtitle}</p>}
            {paragraph && <p className="text-white mt-2">{paragraph}</p>}
            {logoImage && (
              <div className={`d-flex ${justifyClass} mt-3 mt-md-4`}>
                <img src={logoImage} alt={logoAlt} className="hero-logo-image object-fit-contain" />
              </div>
            )}
            {ctaText && ctaLink && ctaDownloadFilename && (
              <div className={`d-flex ${justifyClass} mt-3 mt-md-4`}>
                <Link to={ctaLink} download={ctaDownloadFilename} className="hero-cta-button d-inline-flex align-items-center"> {/* Not using bootstrap button class here because it adds extra padding and spacing that we don't want */}
                  <img src={SlickIcon} alt="" className="me-2" style={{ height: '2.5em', width: 'auto' }} />
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

