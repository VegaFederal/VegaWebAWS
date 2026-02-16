import React from 'react'
import './BannerSection.css'

/**
 * BannerSection - Full-width banner section for section headers
 * 
 * @param {string} title - Banner title text
 * @param {string} bgColor - Background color class (default: 'bg-primary')
 * @param {string} textColor - Text color class (default: 'text-white')
 * @param {string} height - Optional fixed banner height (e.g. '6rem', '120px')
 * @param {boolean} centerContent - Center content vertically when height is set (default: true)
 * @param {string} className - Additional CSS classes
 */
const BannerSection = ({
  title,
  bgColor = 'bg-primary',
  textColor = 'text-white',
  height = '',
  centerContent = true,
  className = ''
}) => {
  const centeringClass = height && centerContent ? 'banner-section-centered' : ''
  const fixedHeightClass = height ? 'banner-section-fixed' : ''
  const sectionClasses = `banner-section ${bgColor} ${textColor} ${centeringClass} ${fixedHeightClass} ${className}`
  const sectionStyle = height ? { height } : undefined

  return (
    <div class="container-fluid" className={sectionClasses}>
      <div class="row">
        <h2 className="text-white text-center">
          {title}
        </h2>
      </div>
    </div>
    
  )
}

export default BannerSection

