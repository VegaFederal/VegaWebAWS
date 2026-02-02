import React from 'react'
import './StickyStackSection.css'

/**
 * StickyStackSection - Stacking sticky cards (inspired by Webflow example)
 *
 * @param {string} title - Section heading
 * @param {string} subtitle - Optional supporting text
 * @param {Array} items - Cards to stack
 * @param {string} bgColor - Background color class
 * @param {string} className - Additional CSS classes
 */
const StickyStackSection = ({
  title = 'Stacking Highlights',
  subtitle = '',
  items = [],
  bgColor = 'bg-white',
  className = ''
}) => {
  if (!items.length) {
    return null
  }

  return (
    <section className={`sticky-stack-section ${bgColor} ${className}`}>
      <div className="page-container">
        <div className="sticky-stack-header">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className="sticky-stack-list" aria-label="Stacking cards">
          {items.map((item, index) => (
            <article
              key={`${item.title || 'stack-card'}-${index}`}
              className="sticky-stack-card"
              style={{
                '--stack-index': index,
                '--stack-accent': item.accent || '#DD004A',
                zIndex: index + 1
              }}
            >
              <div className="sticky-stack-card-inner">
                <div className="sticky-stack-card-content">
                  {item.eyebrow && (
                    <span className="sticky-stack-eyebrow">{item.eyebrow}</span>
                  )}
                  {item.title && (
                    <h3 className="sticky-stack-title">{item.title}</h3>
                  )}
                  {item.text && (
                    <p className="sticky-stack-text">{item.text}</p>
                  )}
                  {item.tags?.length ? (
                    <div className="sticky-stack-tags" aria-label="Highlights">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={`${tag}-${tagIndex}`}
                          className="sticky-stack-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {item.ctaText && item.ctaLink && (
                    <a className="sticky-stack-cta" href={item.ctaLink}>
                      {item.ctaText}
                    </a>
                  )}
                </div>

                {item.image && (
                  <div className="sticky-stack-card-media">
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title || 'Stacking card image'}
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StickyStackSection
