import React from 'react'
import './CenteredContentSection.css'

/**
 * CenteredContentSection - Full-width centered content section
 * 
 * @param {ReactNode} content - Content to display
 * @param {string} bgColor - Background color class (default: 'bg-white')
 * @param {string} maxWidth - Max width preset or custom size
 *   Presets: 'two-column' (1200px), 'content' (56rem), 'wide' (72rem)
 *   Custom: any valid CSS length (e.g. '900px', '70rem')
 * @param {string} align - Content alignment: 'center' or 'left' (default: 'center')
 * @param {string} className - Additional CSS classes
 */
const CenteredContentSection = ({
  content,
  bgColor = 'bg-white',
  maxWidth = 'two-column',
  align = 'center',
  className = ''
}) => {
  const sectionClasses = `centered-content-section ${bgColor} ${className}`
  const alignmentClass = align !== 'center' ? `align-${align}` : ''
  const presetMap = {
    default: 'max-two-column',
    'two-column': 'max-two-column',
    content: 'max-content',
    narrow: 'max-content',
    wide: 'max-wide'
  }
  const presetClass = presetMap[maxWidth] || ''
  const isCustomWidth = !presetClass && typeof maxWidth === 'string'
  const wrapperClasses = `centered-content-wrapper ${presetClass} ${alignmentClass}`.trim()
  const wrapperStyle = isCustomWidth ? { maxWidth } : undefined

  return (
    <div className={sectionClasses}>
      <div className="page-container">
        <div className={wrapperClasses} style={wrapperStyle}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default CenteredContentSection

