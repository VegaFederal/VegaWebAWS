import React from 'react'
import './MissionWithCardsSection.css'

/**
 * MissionWithCardsSection – One section: mission (left) + vertical hover-expand cards (right).
 * Uses Bootstrap container, row, col, and card. Each card shows title only; hover (or focus) expands to show description.
 *
 * @param {string} missionTitle - Left column heading (e.g. "Our Mission")
 * @param {React.ReactNode} missionContent - Left column content (paragraphs)
 * @param {Array<{ title: string, text: string }>} cards - Four cards: title + text (shown on hover)
 * @param {string} className - Additional section class
 */
const MissionWithCardsSection = ({
  missionTitle = 'Our Mission',
  missionContent,
  cards = [],
  className = ''
}) => {
  const sectionClasses = `mission-cards-section ${className}`.trim()

  return (
    <section className={sectionClasses} aria-label={missionTitle}>
      <div className="container">
        <div className="row g-3 g-lg-4 align-items-start">
          <div className="col-12 col-lg-5 mission-cards-left-col">
            <div className="mission-cards-mission">
              {missionTitle && <h2 className="mb-3">{missionTitle}</h2>}
              <div className="text-secondary">
                {missionContent}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 d-flex flex-column gap-2" role="list">
            {cards.map((card, i) => (
              <article
                key={i}
                className="card mission-cards-card shadow-sm"
                role="listitem"
                tabIndex={0}
              >
                <div className="card-body py-3 px-3 px-md-4 d-flex justify-content-between align-items-center mission-cards-card-header">
                  <h5 className="card-title mb-0 fs-6 fs-md-5 fw-semibold text-dark">{card.title}</h5>
                  <span className="mission-cards-card-indicator small text-muted" aria-hidden="true">
                    <span className="mission-cards-card-indicator-icon" />
                    <span className="ms-1">Hover to expand</span>
                  </span>
                </div>
                <div className="mission-cards-card-detail">
                  <div className="card-body pt-0 px-3 px-md-4 pb-3">
                    <p className="card-text mb-0 small">{card.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionWithCardsSection
