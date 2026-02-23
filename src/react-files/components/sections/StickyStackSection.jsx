import React, { useState } from 'react'
import './StickyStackSection.css'

function isVideoUrl (src) {
  if (!src || typeof src !== 'string') return false
  return /\.(mp4|webm|ogg)(\?|$)/i.test(src)
}

/**
 * StickyStackSection - Stacking sticky cards (inspired by Webflow example)
 * Supports optional tabbed content: overview, capabilities (array), missionImpact.
 * If tabs are provided (item.overview + item.capabilities + item.missionImpact), shows tabs; otherwise shows item.text.
 *
 * @param {string} title - Section heading
 * @param {string} subtitle - Optional supporting text
 * @param {Array} items - Cards to stack (each may have text OR overview, capabilities[], missionImpact for tabs)
 * @param {string} bgColor - Background color class (e.g. 'bg-white', 'bg-gray')
 * @param {string} backgroundColor - CSS color value for section background (e.g. '#FAF9F6', 'rgb(250,249,246)'). Overrides bgColor when set.
 * @param {string} stickyCardsOffset - Where cards stick (default '25vh'). Use vh for uniform scaling.
 * @param {string} stickyReleasePadding - Extra scroll before cards unstick (default '15vh'). Use vh for uniform scaling.
 * @param {string} className - Additional CSS classes
 */
const StickyStackSection = ({
  title = 'Stacking Highlights',
  subtitle = '',
  items = [],
  bgColor = 'bg-white',
  backgroundColor,
  stickyCardsOffset = '22vh',
  stickyReleasePadding = '15vh',
  className = ''
}) => {
  if (!items.length) {
    return null
  }

  const sectionStyle = {
    '--sticky-cards-offset': stickyCardsOffset,
    '--sticky-release-padding': stickyReleasePadding,
    ...(backgroundColor && { backgroundColor })
  }
  const bgClass = backgroundColor ? '' : bgColor
  const titleStyle = backgroundColor ? { backgroundColor } : undefined

  return (
    <section className={`sticky-stack-section ${bgClass} ${className}`.trim()} style={sectionStyle}>
      <div className={`sticky-stack-title-wrap ${bgClass}`.trim()} style={titleStyle}>
        <div className={`sticky-stack-header text-center ${bgClass}`.trim()} style={titleStyle}>
          <div className="container">
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sticky-stack-list" aria-label="Stacking cards">
          {items.map((item, index) => (
            <StickyStackCard
              key={`${item.title || 'stack-card'}-${index}`}
              item={item}
              index={index}
              stackIndex={items.length - 1 - index}
              isFirstCard={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StickyStackCard ({ item, index, stackIndex, isFirstCard = false }) {
  const hasTabs = item.overview != null && Array.isArray(item.capabilities) && item.missionImpact != null
  const [activeTab, setActiveTab] = useState('overview')

  const contentColClass = `sticky-stack-card-content col-12 col-lg-6 ${index % 2 === 1 ? 'order-lg-2' : ''}`

  return (
    <article
      className={`sticky-stack-card ${isFirstCard ? 'sticky-stack-card-first' : ''}`}
      style={{
        '--stack-index': stackIndex ?? index,
        '--stack-accent': item.accent || '#DD004A',
        zIndex: index + 1
      }}
    >
      <div className="sticky-stack-card-inner row align-items-start g-4">
        <div className={contentColClass}>
          {item.title && (
            <h2 className="sticky-stack-title">{item.title}</h2>
          )}

          {hasTabs ? (
            <div className="sticky-stack-tabs">
              <div className="sticky-stack-tab-list" role="tablist" aria-label="Card content tabs">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'overview'}
                  aria-controls={`card-${index}-overview`}
                  id={`card-${index}-tab-overview`}
                  className={`sticky-stack-tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'capabilities'}
                  aria-controls={`card-${index}-capabilities`}
                  id={`card-${index}-tab-capabilities`}
                  className={`sticky-stack-tab ${activeTab === 'capabilities' ? 'active' : ''}`}
                  onClick={() => setActiveTab('capabilities')}
                >
                  Capabilities
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'missionImpact'}
                  aria-controls={`card-${index}-missionImpact`}
                  id={`card-${index}-tab-missionImpact`}
                  className={`sticky-stack-tab ${activeTab === 'missionImpact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('missionImpact')}
                >
                  Mission Impact
                </button>
              </div>
              <div className="sticky-stack-tab-panels">
                {activeTab === 'overview' && (
                  <div id={`card-${index}-overview`} role="tabpanel" aria-labelledby={`card-${index}-tab-overview`} className="sticky-stack-tab-panel">
                    <p className="sticky-stack-text">{item.overview}</p>
                  </div>
                )}
                {activeTab === 'capabilities' && (
                  <div id={`card-${index}-capabilities`} role="tabpanel" aria-labelledby={`card-${index}-tab-capabilities`} className="sticky-stack-tab-panel">
                    <ul className="sticky-stack-bullet-list">
                      {item.capabilities.map((cap, i) => (
                        <li key={i}>{cap}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === 'missionImpact' && (
                  <div id={`card-${index}-missionImpact`} role="tabpanel" aria-labelledby={`card-${index}-tab-missionImpact`} className="sticky-stack-tab-panel">
                    <p className="sticky-stack-text sticky-stack-mission-impact">{item.missionImpact}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            item.text && (
              <p className="sticky-stack-text">{item.text}</p>
            )
          )}

          {item.ctaText && item.ctaLink && (
            <a className="sticky-stack-cta" href={item.ctaLink}>
              {item.ctaText}
            </a>
          )}
        </div>

        {(item.image || item.video) && (
          <div className={`sticky-stack-card-media col-12 col-lg-6 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
            {isVideoUrl(item.video || item.image) ? (
              <video
                src={item.video || item.image}
                autoPlay
                loop
                muted
                playsInline
                className="sticky-stack-card-media-video"
                aria-label={item.imageAlt || item.title || 'Card video'}
              />
            ) : (
              <img
                src={item.image}
                alt={item.imageAlt || item.title || 'Stacking card image'}
              />
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default StickyStackSection
