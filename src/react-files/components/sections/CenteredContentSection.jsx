import React from 'react'
import './CenteredContentSection.css'

/**
 * CenteredContentSection - Full-width centered content section
 * Uses Bootstrap container and utilities where possible.
 *
 * @param {ReactNode} content - Content to display
 * @param {string} bgColor - Background color class (default: 'bg-white')
 * @param {string} maxWidth - Max width preset or custom size
 *   Presets: 'two-column' (container-xl ≈1140px), 'content'/'narrow' (container-lg ≈960px), 'wide' (container-xxl ≈1320px)
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
  const presetMap = {
    default: 'container-xl',
    'two-column': 'container-xl',
    content: 'container-lg',
    narrow: 'container-lg',
    wide: 'container-xxl'
  }
  const containerClass = presetMap[maxWidth] || ''
  const isCustomWidth = !containerClass && typeof maxWidth === 'string'
  const isAlignStart = align === 'left' || align === 'start'
  const textAlignClass = isAlignStart ? 'text-start' : 'text-center'
  const sectionClasses = `centered-content-section py-4 py-md-5 overflow-hidden ${bgColor} ${className}`.trim()
  const wrapperClasses = isCustomWidth
    ? `container-fluid mx-auto ${textAlignClass}`.trim()
    : `container ${containerClass} mx-auto ${textAlignClass}`.trim()
  const wrapperStyle = isCustomWidth ? { maxWidth } : undefined

  return (
    <div className={sectionClasses}>
      <div className={wrapperClasses} style={wrapperStyle}>
        {content}
      </div>
    </div>
  )
}

export default CenteredContentSection

