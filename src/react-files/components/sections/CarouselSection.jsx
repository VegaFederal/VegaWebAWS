import React, { useState, useEffect } from 'react'
import './CarouselSection.css'

/**
 * CarouselSection - Simple carousel component with navigation
 * 
 * @param {Array<ReactNode>} items - Array of carousel items (images, content, etc.)
 * @param {boolean} autoPlay - Enable auto-play (default: false)
 * @param {number} autoPlayInterval - Auto-play interval in milliseconds (default: 5000)
 * @param {boolean} showDots - Show indicator dots (default: true)
 * @param {boolean} showArrows - Show navigation arrows (default: true)
 * @param {string} bgColor - Background color class (default: 'bg-white')
 * @param {string} className - Additional CSS classes
 */
const CarouselSection = ({
  items = [],
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  bgColor = 'bg-white',
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, items.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  if (items.length === 0) {
    return null
  }

  const sectionClasses = `carousel-section ${bgColor} ${className}`

  return (
    <section className={sectionClasses}>
      <div className="page-container">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div 
              className="carousel-content"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div key={index} className="carousel-slide">
                  {item}
                </div>
              ))}
            </div>

            {showArrows && items.length > 1 && (
              <>
                <button 
                  className="carousel-arrow carousel-arrow-left"
                  onClick={goToPrevious}
                  aria-label="Previous slide"
                >
                  &#8249;
                </button>
                <button 
                  className="carousel-arrow carousel-arrow-right"
                  onClick={goToNext}
                  aria-label="Next slide"
                >
                  &#8250;
                </button>
              </>
            )}

            {showDots && items.length > 1 && (
              <div className="carousel-dots">
                {items.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarouselSection

