import React from 'react'
import './TwoColumnSection.css'

/**
 * TwoColumnSection - Image and text side-by-side section
 * Uses grid layout for responsive two-column design
 * 
 * @param {string} image - Image source URL
 * @param {string} imageAlt - Alt text for image
 * @param {boolean} imageFirst - Whether image comes first (default: true)
 * @param {string} imageSize - Optional max width for the image (e.g. '10rem', '200px')
 * @param {number} imageColumnSpan - Image column span on desktop (default: 5)
 * @param {number} contentColumnSpan - Content column span on desktop (default: 7)
 * @param {ReactNode} content - Content to display (text, headings, etc.)
 * @param {string} bgColor - Background color class (default: 'bg-white')
 * @param {string} className - Additional CSS classes
 */
const TwoColumnSection = ({
  image,
  imageAlt = '',
  imageFirst = true,
  imageSize = '',
  imageColumnSpan = 5,
  contentColumnSpan = 7,
  content,
  bgColor = 'bg-white',
  className = ''
}) => {
  const sectionClasses = `two-column-section ${bgColor} ${className}`
  const gridClasses = `two-column-grid ${!imageFirst ? 'two-column-reversed' : ''}`
  const imageStyle = imageSize ? { maxWidth: imageSize } : undefined
  const gridStyle = {
    '--image-span': imageColumnSpan,
    '--content-span': contentColumnSpan
  }

  return (
    <div className={sectionClasses}>
      <div className="container">
        <div className={gridClasses} class="row align-items-center">
          <div className="col" >
            {image && <img src={image} alt={imageAlt}/>}
          </div>
          <div className="col">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoColumnSection

