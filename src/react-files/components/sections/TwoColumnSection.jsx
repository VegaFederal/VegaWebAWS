import React from 'react'
import './TwoColumnSection.css'

/**
 * TwoColumnSection - Image and text side-by-side section
 * Uses grid layout for responsive two-column design
 * 
 * @param {string} image - Image source URL
 * @param {string} imageAlt - Alt text for image
 * @param {boolean} imageFirst - Whether image comes first (default: true)
 * @param {ReactNode} content - Content to display (text, headings, etc.)
 * @param {string} bgColor - Background color class (default: 'bg-white')
 * @param {string} className - Additional CSS classes
 */
const TwoColumnSection = ({
  image,
  imageAlt = '',
  imageFirst = true,
  content,
  bgColor = 'bg-white',
  className = ''
}) => {
  const sectionClasses = `two-column-section ${bgColor} ${className}`
  const gridClasses = `two-column-grid ${!imageFirst ? 'two-column-reversed' : ''}`

  return (
    <div className={sectionClasses}>
      <div className="page-container">
        <div className={gridClasses}>
          <div className="two-column-image">
            {image && <img src={image} alt={imageAlt} />}
          </div>
          <div className="two-column-content">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoColumnSection

