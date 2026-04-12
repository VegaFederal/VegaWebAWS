import React from 'react'
import './TwoColumnSection.css'

/**
 * TwoColumnSection — image + text inside a single Bootstrap `.container` (same horizontal margins as other sections).
 *
 * @param {string} image - Image source URL (optional; column still renders if omitted)
 * @param {string} [imageAlt=''] - Alt text for the image
 * @param {boolean} [imageFirst=true] - When true (and not `isReversed`), image is on the left on large screens
 * @param {string} [imageSize] - Optional max width for the image (e.g. `'320px'`)
 * @param {[number, number]} [columnRatio] - Relative column widths on large screens: `[image, content]`, e.g. `[3, 7]` ≈ 30% / 70%. Defaults to equal columns `[1, 1]` if unset and no legacy ratio props are passed
 * @param {string} [gap] - Optional CSS length for `gap` between columns (and between stacked rows on small screens). Takes precedence over `contentGap`
 * @param {React.ReactNode} content - Main text / headings / children
 * @param {string} [bgColor='bg-white'] - Background utility class for the section
 * @param {boolean} [isReversed] - When true, text column is on the left and image on the right on large screens
 * @param {string} [className] - Extra class names on the section wrapper
 * @param {string} [marginL] - Inline `marginLeft` on the image wrapper
 * @param {string} [marginR] - Inline `marginRight` on the image wrapper
 * @param {boolean} [borderOverlay=false] - When true, decorative border overlay on the container (see CSS)
 * @param {string} [contentGap] - Legacy spacing: `'default'` / empty = use CSS default; `'narrow'` (1.25rem), `'tight'` (0.75rem), `'who-we-are'` (1.5rem); or any CSS length string. Ignored if `gap` is set
 * @param {number} [imagePercent] - Legacy: paired with `contentPercent` for ratio (e.g. 30 / 70). Used if `columnRatio` is not provided
 * @param {number} [contentPercent] - Legacy: paired with `imagePercent`
 * @param {number} [imageColumnSpan] - Legacy: paired with `contentColumnSpan` (e.g. Bootstrap-style 4 / 8). Used if neither `columnRatio` nor percent pair is provided
 * @param {number} [contentColumnSpan] - Legacy: paired with `imageColumnSpan`
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
  imagePercent,
  contentPercent,
  imageColumnSpan,
  contentColumnSpan
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
  const textCol = <div className="two-column-content">{content}</div>

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
