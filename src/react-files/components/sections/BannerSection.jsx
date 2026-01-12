import React from 'react'
import './BannerSection.css'

/**
 * BannerSection - Full-width banner section for section headers
 * 
 * @param {string} title - Banner title text
 * @param {string} bgColor - Background color class (default: 'bg-primary')
 * @param {string} textColor - Text color class (default: 'text-white')
 * @param {string} className - Additional CSS classes
 */
const BannerSection = ({
  title,
  bgColor = 'bg-primary',
  textColor = 'text-white',
  className = ''
}) => {
  const sectionClasses = `banner-section ${bgColor} ${textColor} ${className}`

  return (
    <div className={sectionClasses}>
      <div className="page-container">
        <h2 className="banner-title">
          {title}
        </h2>
      </div>
    </div>
  )
}

export default BannerSection

