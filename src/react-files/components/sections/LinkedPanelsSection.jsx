import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './LinkedPanelsSection.css'

/**
 * LinkedPanelsSection - Four link tiles with a supporting text panel
 *
 * @param {Array<{ shortTitle: string, title: string, text: string, image?: string, imageAlt?: string }>} items - Tile label + content
 * @param {number} initialActiveIndex - Which tile is active on load (default: 0)
 * @param {string} bgColor - Background color class (default: 'bg-white')
 * @param {string} className - Additional CSS classes
 */
const LinkedPanelsSection = ({
  items = [],
  initialActiveIndex = 0,
  bgColor = 'bg-white',
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(
    Math.min(Math.max(initialActiveIndex, 0), items.length - 1)
  )
  const [hasEntered, setHasEntered] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!items.length) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [items.length])

  useEffect(() => {
    if (!sectionRef.current) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!items.length) {
      return
    }

    setActiveIndex((prev) => Math.min(Math.max(prev, 0), items.length - 1))
  }, [items.length])

  if (!items.length) {
    return null
  }

  const sectionClasses = `linked-panels-section ${bgColor} ${className}`
  const activeItem = items[activeIndex] || items[0]

  return (
    <section className={sectionClasses} ref={sectionRef}>
      <div className="page-container">
        <div className="linked-panels-wrapper">
          <div className="linked-panels-grid" role="tablist" aria-label="Linked sections">
            {items.map((item, index) => (
              <button
                key={`${item.shortTitle}-${index}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={`linked-panels-tile ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="linked-panels-label">{item.shortTitle}</span>
              </button>
            ))}
          </div>

          <div className={`linked-panels-panel ${hasEntered ? 'is-visible' : ''}`}>
            <div key={activeIndex} className="linked-panels-content linked-panels-content-fade">
              {activeItem?.image && (
                <div className="linked-panels-image">
                  <img
                    src={activeItem.image}
                    alt={activeItem.imageAlt || activeItem.title || 'Linked panel image'}
                  />
                </div>
              )}
              <div className="linked-panels-text-block">
                {activeItem?.title && (
                  <h2 className="linked-panels-title">{activeItem.title}</h2>
                )}
                {activeItem?.text && (
                  <p className="linked-panels-text">{activeItem.text}</p>
                )}
                <div className="linked-panels-cta">
                  <Link to="/Capabilities" className="linked-panels-button">
                    View Capabilities
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LinkedPanelsSection

