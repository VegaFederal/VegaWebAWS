import React from 'react'
import './GridCardSection.css'

/**
 * GridCardSection - Responsive grid of cards
 * 
 * @param {Array<ReactNode>} cards - Array of card components
 * @param {Object} columns - Column configuration { mobile: 1, tablet: 2, desktop: 4 }
 * @param {string} bgColor - Background color class (default: 'bg-white')
 * @param {string} className - Additional CSS classes
 */
const GridCardSection = ({
  cards,
  columns = { mobile: 1, tablet: 2, desktop: 4 },
  bgColor = 'bg-white',
  className = ''
}) => {
  const sectionClasses = `grid-card-section ${bgColor} ${className}`
  const gridClasses = `grid-card-container cols-${columns.desktop || 4}`

  return (
    <div className={sectionClasses}>
      <div className="page-container">
        <div className={gridClasses}>
          {cards}
        </div>
      </div>
    </div>
  )
}

export default GridCardSection

