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
 * @param {boolean} isReversed - Whether the text is on the right or the left
 * @param {string} marginL
 * @param {string} marginR
 * @param {boolean} borderOverlay - When true, show a border overlay around the container (no layout change)
 * @param {string} contentGap - Gap between image and text: 'default' | 'narrow' (1.25rem) | 'tight' (0.75rem), or any CSS length (e.g. '1rem'). Use 'narrow' or 'tight' for small/square images.
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
  isReversed,
  className = '',
  marginL = "",
  marginR = "",
  borderOverlay = false,
  contentGap
}) => {
  const sectionClasses = `two-column-section ${bgColor}${borderOverlay ? ' two-column-section-border-overlay' : ''} ${className}`.trim()
  const containerClasses = `container${borderOverlay ? ' two-column-container-border-overlay' : ''}`.trim()
  const gapValue = contentGap === 'narrow' ? '1.25rem' : contentGap === 'tight' ? '0.75rem' : contentGap === 'default' ? undefined : contentGap
  const useCustomGap = !!gapValue
  const gridClasses = `two-column-grid ${!imageFirst ? 'two-column-reversed' : ''}${useCustomGap ? ' two-column-custom-gap' : ''}`.trim()
  const imageStyle = imageSize ? {maxWidth: imageSize, minWidth: imageSize} : undefined
  const gridStyle = {
    '--image-span': imageColumnSpan,
    '--content-span': contentColumnSpan,
    ...(gapValue && { '--two-col-gap': gapValue })
  }
  const inputStyle = {
    marginLeft: marginL,
    marginRight: marginR,
  };

  if (isReversed) {
    return (
    <div className={sectionClasses}>
      <div className={containerClasses}>
        <div className={`${gridClasses} row align-items-center`} style={gridStyle}>
          <div className="two-column-content col">
            {content}
          </div>
          <div className="two-column-image col-lg ml-10 lg:ml-0" style={inputStyle}>
            {image && <img src={image} alt={imageAlt} style={imageStyle}/>}
          </div>
        </div>
      </div>
    </div>
  )
  }

  return (
    <div className={sectionClasses}>
      <div className={containerClasses}>
        <div className={`${gridClasses} row align-items-center`} style={gridStyle}>
          <div className="two-column-image col-lg ml-10 lg:ml-0" style={inputStyle}>
            {image && <img src={image} alt={imageAlt} style={imageStyle}/>}
          </div>
          <div className="two-column-content col">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoColumnSection

