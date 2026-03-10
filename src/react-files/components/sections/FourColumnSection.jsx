import React from 'react'
import './FourColumnSection.css'

/**
 * FourColumnSection - Simple four-column layout with main title, mini titles, and text.
 * Secondary-color vertical separators between columns (when side by side).
 *
 * @param {string} title - Main section title
 * @param {Array<{miniTitle: string, text: string}>} items - Four items, each with miniTitle and text
 * @param {string} bgColor - Background class (default 'bg-white')
 * @param {string} className - Additional section class
 */
const FourColumnSection = ({
  title,
  items = [],
  bgColor = 'bg-white',
  className = ''
}) => {
  const sectionClasses = `four-column-section ${bgColor} ${className}`.trim()

  return (
    <section className={sectionClasses}>
      <div className="container">
        {title && <h4 className="four-column-main-title">{title}</h4>}
        <div className="row g-3 g-md-4">
          {items.map((item, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3 four-column-col">
              <div className="four-column-item">
                <h5 className="four-column-mini-title">{item.miniTitle}</h5>
                <p className="four-column-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FourColumnSection
