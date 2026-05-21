import React, { useState, useEffect, useRef } from 'react'
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
 * @param {number} autoTabInterval - If set (ms), auto-cycle tabs while a card is in view (Overview → Capabilities → Mission Impact). e.g. 5000 = 5 seconds. 0 or omit to disable.
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
  autoTabInterval = 0,
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
        <div className={`sticky-stack-header text-center ${bgClass}`.trim()} style={titleStyle} tabIndex={0}>
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
              autoTabInterval={autoTabInterval}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const TAB_ORDER = ['overview', 'capabilities', 'missionImpact']

const AUTO_TAB_VIEWPORT_MARGIN = '-20% 0px -25% 0px'
const AUTO_TAB_MIN_RATIO = 0.38

function StickyStackCard ({ item, index, stackIndex, isFirstCard = false, autoTabInterval = 0 }) {
  const hasTabs = item.overview != null && Array.isArray(item.capabilities) && item.missionImpact != null
  const [activeTab, setActiveTab] = useState('overview')
  const [isCardInView, setIsCardInView] = useState(false)
  const cardRef = useRef(null)
  const tabRefs = useRef({})
  const panelRefs = useRef({})

  useEffect(() => {
    if (!hasTabs) return
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible =
          entry.isIntersecting && entry.intersectionRatio >= AUTO_TAB_MIN_RATIO
        setIsCardInView(visible)
      },
      {
        root: null,
        rootMargin: AUTO_TAB_VIEWPORT_MARGIN,
        threshold: [0, 0.1, 0.2, 0.3, 0.38, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasTabs])

  useEffect(() => {
    if (!isCardInView) {
      setActiveTab('overview')
    }
  }, [isCardInView])

  useEffect(() => {
    if (!hasTabs || !autoTabInterval || autoTabInterval <= 0 || !isCardInView) return
    const id = setInterval(() => {
      setActiveTab((prev) => {
        const i = TAB_ORDER.indexOf(prev)
        const next = (i + 1) % TAB_ORDER.length
        return TAB_ORDER[next]
      })
    }, autoTabInterval)
    return () => clearInterval(id)
  }, [hasTabs, autoTabInterval, isCardInView])

  const focusPanel = (tabName) => {
    if (!tabName) return
    setActiveTab(tabName)
    requestAnimationFrame(() => {
      panelRefs.current[tabName]?.focus()
    })
  }

  const focusTab = (tabName) => {
    if (!tabName) return
    setActiveTab(tabName)
    requestAnimationFrame(() => {
      tabRefs.current[tabName]?.focus()
    })
  }

  const handleTabKeyDown = (e, tabName) => {
    if (e.key !== 'Tab' || e.shiftKey) return
    e.preventDefault()
    focusPanel(tabName)
  }

  const handlePanelKeyDown = (e, tabName) => {
    if (e.key !== 'Tab') return
    if (e.shiftKey) {
      e.preventDefault()
      focusTab(tabName)
      return
    }
    const tabIndex = TAB_ORDER.indexOf(tabName)
    if (tabIndex === -1 || tabIndex === TAB_ORDER.length - 1) return
    e.preventDefault()
    focusTab(TAB_ORDER[tabIndex + 1])
  }

  const contentColClass = `sticky-stack-card-content col-12 col-lg-6 ${index % 2 === 1 ? 'order-lg-2' : ''}`

  return (
    <article
      ref={cardRef}
      className={`sticky-stack-card ${isFirstCard ? 'sticky-stack-card-first' : ''}`}
      style={{
        '--stack-index': stackIndex ?? index,
        '--stack-accent': item.accent || '#DD004A',
        zIndex: index + 1
      }}
    >
      <div className="sticky-stack-card-inner row g-4">
        <div className={contentColClass}>
          {item.title && (
            <h2 className="sticky-stack-title">{item.title}</h2>
          )}

          {hasTabs ? (
            <div className="sticky-stack-tabs">
              <div className="sticky-stack-tab-list" role="tablist" aria-label="Card content tabs">
                <button
                  ref={(el) => { tabRefs.current.overview = el }}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'overview'}
                  aria-controls={`card-${index}-overview`}
                  id={`card-${index}-tab-overview`}
                  className={`sticky-stack-tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                  onFocus={() => setActiveTab('overview')}
                  onKeyDown={(e) => handleTabKeyDown(e, 'overview')}
                >
                  Overview
                </button>
                <button
                  ref={(el) => { tabRefs.current.capabilities = el }}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'capabilities'}
                  aria-controls={`card-${index}-capabilities`}
                  id={`card-${index}-tab-capabilities`}
                  className={`sticky-stack-tab ${activeTab === 'capabilities' ? 'active' : ''}`}
                  onClick={() => setActiveTab('capabilities')}
                  onFocus={() => setActiveTab('capabilities')}
                  onKeyDown={(e) => handleTabKeyDown(e, 'capabilities')}
                >
                  Capabilities
                </button>
                <button
                  ref={(el) => { tabRefs.current.missionImpact = el }}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'missionImpact'}
                  aria-controls={`card-${index}-missionImpact`}
                  id={`card-${index}-tab-missionImpact`}
                  className={`sticky-stack-tab ${activeTab === 'missionImpact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('missionImpact')}
                  onFocus={() => setActiveTab('missionImpact')}
                  onKeyDown={(e) => handleTabKeyDown(e, 'missionImpact')}
                >
                  Mission Impact
                </button>
              </div>
              <div className="sticky-stack-tab-panels">
                {activeTab === 'overview' && (
                  <div
                    ref={(el) => { panelRefs.current.overview = el }}
                    id={`card-${index}-overview`}
                    role="tabpanel"
                    aria-labelledby={`card-${index}-tab-overview`}
                    className="sticky-stack-tab-panel"
                    tabIndex={0}
                    onKeyDown={(e) => handlePanelKeyDown(e, 'overview')}
                  >
                    <p className="sticky-stack-text">{item.overview}</p>
                  </div>
                )}
                {activeTab === 'capabilities' && (
                  <div
                    ref={(el) => { panelRefs.current.capabilities = el }}
                    id={`card-${index}-capabilities`}
                    role="tabpanel"
                    aria-labelledby={`card-${index}-tab-capabilities`}
                    className="sticky-stack-tab-panel"
                    tabIndex={0}
                    onKeyDown={(e) => handlePanelKeyDown(e, 'capabilities')}
                  >
                    <ul className="sticky-stack-bullet-list">
                      {item.capabilities.map((cap, i) => (
                        <li key={i}>{cap}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === 'missionImpact' && (
                  <div
                    ref={(el) => { panelRefs.current.missionImpact = el }}
                    id={`card-${index}-missionImpact`}
                    role="tabpanel"
                    aria-labelledby={`card-${index}-tab-missionImpact`}
                    className="sticky-stack-tab-panel"
                    tabIndex={0}
                    onKeyDown={(e) => handlePanelKeyDown(e, 'missionImpact')}
                  >
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
