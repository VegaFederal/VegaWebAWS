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
 * @param {boolean} isOurStory - Check to see if this is the Our story page
 */
const TwoColumnSection = ({
  image,
  imageAlt = '',
  imageFirst = true,
  imageSize = '',
  columnRatio,
  gap: gapProp,
  content,
  bgColor = 'bg-white',
  isReversed,
  className = '',
  marginL = '',
  marginR = '',
  borderOverlay = false,
  contentGap,
  isOurStory = false
}) => {
  const sectionClasses = `two-column-section ${bgColor}${borderOverlay ? ' two-column-section-border-overlay' : ''} ${className}`.trim()
  const containerClasses = `container${borderOverlay ? ' two-column-container-border-overlay' : ''}`.trim()

  const [wImage, wContent] = resolveColumnRatio({
    columnRatio,
    imagePercent,
    contentPercent,
    imageColumnSpan,
    contentColumnSpan
  })

  const gapValue = resolveGap(gapProp, contentGap)

  /* Text left / image right when isReversed or imageFirst false */
  const contentLeft = Boolean(isReversed) || !imageFirst

  const [trackA, trackB] = contentLeft ? [wContent, wImage] : [wImage, wContent]

  const gridStyle = {
    '--tc-a': `${trackA}fr`,
    '--tc-b': `${trackB}fr`,
    ...(gapValue ? { '--tc-gap': gapValue } : {})
  }

  const imageStyle = imageSize ? { maxWidth: imageSize, width: '100%' } : undefined
  const inputStyle = { marginLeft: marginL, marginRight: marginR }

  const imageCol = (
    <div className="two-column-image" style={inputStyle}>
      {image && <img src={image} alt={imageAlt} style={imageStyle} />}
    </div>
  )
  }
  if(isOurStory) {
    return (
    <div className={sectionClasses}>
      <div className={containerClasses}>
        <div className={`${gridClasses} two-column-reversed-our-story row align-items-center`} style={gridStyle}>
          <div className="two-column-image col-lg ml-0 lg:ml-10" style={inputStyle}>
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

  return (
    <div className={sectionClasses}>
      <div className={containerClasses}>
        <div className="two-column-grid" style={gridStyle}>
          {contentLeft ? (
            <>
              {textCol}
              {imageCol}
            </>
          ) : (
            <>
              {imageCol}
              {textCol}
            </>
          )}
        </div>
      </div>
    </div>
  )

  
}

function resolveColumnRatio ({
  columnRatio,
  imagePercent,
  contentPercent,
  imageColumnSpan,
  contentColumnSpan
}) {
  if (Array.isArray(columnRatio) && columnRatio.length === 2) {
    const [a, b] = columnRatio.map((n) => Math.max(0.01, Number(n) || 1))
    return [a, b]
  }
  if (imagePercent != null && contentPercent != null) {
    return [Math.max(0.01, Number(imagePercent)), Math.max(0.01, Number(contentPercent))]
  }
  if (imageColumnSpan != null && contentColumnSpan != null) {
    return [Math.max(0.01, Number(imageColumnSpan)), Math.max(0.01, Number(contentColumnSpan))]
  }
  return [1, 1]
}

function resolveGap (gapProp, contentGap) {
  if (gapProp != null && gapProp !== '') return gapProp
  if (contentGap == null || contentGap === '' || contentGap === 'default') return undefined
  if (contentGap === 'narrow') return '1.25rem'
  if (contentGap === 'tight') return '0.75rem'
  if (contentGap === 'who-we-are') return '1.5rem'
  return contentGap
}

export default TwoColumnSection
