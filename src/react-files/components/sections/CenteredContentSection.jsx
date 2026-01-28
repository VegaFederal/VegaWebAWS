import React from 'react'
import './CenteredContentSection.css'

/**
 * CenteredContentSection - Full-width centered content section
 * 
 * @param {ReactNode} content - Content to display
 * @param {string} bgColor - Background color class (default: 'bg-white')
 * @param {string} maxWidth - Max width variant: 'default', 'narrow', or 'wide' (default: 'default')
 * @param {string} className - Additional CSS classes
 */
const CenteredContentSection = ({
  content,
  bgColor = 'bg-white',
  maxWidth = 'default',
  className = ''
}) => {
  const sectionClasses = `centered-content-section ${bgColor} ${className}`
  const wrapperClasses = `centered-content-wrapper ${maxWidth !== 'default' ? maxWidth : ''}`

  return (
    <div className={sectionClasses}>
      <div className="page-container">
        <div className={wrapperClasses}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default CenteredContentSection

