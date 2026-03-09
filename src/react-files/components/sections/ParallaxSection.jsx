import React, { useRef, useEffect, useState } from 'react'
import './ParallaxSection.css'

/**
 * ParallaxSection - Parallax scrolling section with image background and text overlay
 * Image moves at a different speed than the scroll for a parallax effect
 * 
 * @param {string} backgroundImage - URL for background image (required)
 * @param {string|ReactNode} title - Main heading text or custom content
 * @param {string|ReactNode} content - Subtitle text or custom content (optional)
 * @param {number} overlayOpacity - Overlay opacity (0-1, default: 0.4)
 * @param {number} imageBlur - Blur amount for background image (0-20, default: 0)
 * @param {string} height - Section height (default: 60vh)
 * @param {number} parallaxSpeed - Parallax speed multiplier (default: 0.5)
 * @param {string} className - Additional CSS classes
 */
const ParallaxSection = ({
  backgroundImage,
  title,
  content,
  overlayOpacity = 0.4,
  imageBlur = 0,
  height = '60vh',
  parallaxSpeed = 0.5,
  className = ''
}) => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height
        
        // Calculate parallax offset when element is in viewport
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          // Calculate offset based on scroll position
          // Background moves slower than scroll (parallax effect)
          const scrolled = window.scrollY
          const elementOffset = scrolled + elementTop
          const offset = (scrolled - elementOffset) * parallaxSpeed
          setScrollY(offset)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [parallaxSpeed])

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const sectionClasses = `parallax-section ${className}`
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    transform: `translate3d(0, ${scrollY}px, 0)`,
    filter: imageBlur > 0 ? `blur(${imageBlur}px)` : 'none'
  }

  const sectionStyle = {
    '--overlay-opacity': overlayOpacity,
    '--section-height': height
  }

  return (
    <section ref={sectionRef} className={sectionClasses} style={sectionStyle}>
      <div className="parallax-background" style={backgroundStyle}></div>
      <div className="parallax-overlay"></div>
      <div className="parallax-content">
        <div className="page-container">
          <div ref={contentRef} className={`parallax-inner ${isVisible ? 'parallax-inner-visible' : ''}`}>
            {title && (
              <div className="parallax-title">
                {typeof title === 'string' ? <h2>{title}</h2> : title}
              </div>
            )}
            {content && (
              <div className="parallax-text">
                {typeof content === 'string' ? <p>{content}</p> : content}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection

