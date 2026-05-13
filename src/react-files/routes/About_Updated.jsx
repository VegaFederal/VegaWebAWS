import { useRef, useEffect, useState, useLayoutEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkipLink from '../components/SkipLink'
import { teamMembers } from '../Team_members.js'
import './About_Updated.css'

const About_Updated = () => {
  const gridRef = useRef(null)
  const [visibleCards, setVisibleCards] = useState(new Set())

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  /* Lazy reveal: observe each card, add visible class when in viewport */
  useEffect(() => {
    if (!gridRef.current || !teamMembers?.length) return
    const cards = gridRef.current.querySelectorAll('.about-team-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.cardId
            if (id) setVisibleCards((prev) => new Set(prev).add(id))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -20px 0px' }
    )
    cards.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SkipLink />
      <section className='about-concept'>
        <div>
          <header>
            <div>
              <Navbar color_about='text-vega' />
            </div>
          </header>

          <div id='after-navbar' tabIndex={0} className='flex flex-col items-center pt-30'>
                        {/* Header Section */}
                        <div className='flex justify-center mb-[50px] px-4'>
                            <h1 className='text-white text-3xl md:text-5xl font-bold text-center'>Our Team</h1>
                        </div>
                        
                        <div className='flex flex-col items-center mb-[80px] px-4' tabIndex={0}>
                            <h2 className='text-white text-xl md:text-3xl font-bold text-center'>Answers to these questions are below: </h2>
                            <p className='text-white text-base md:text-2xl text-center'>Where did you go to High School? (the "quintessential" STL question)</p>
                            <p className='text-white text-base md:text-2xl text-center'>What's something you are surprisingly good at that has nothing to do with tech?</p>
                            <p className='text-white text-base md:text-2xl text-center'>What is your productivity fuel?</p>
                        </div>

                        {/* Responsive Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
                        <div ref={gridRef} className='about-team-grid'>
                            {teamMembers && teamMembers.map((member) => (
                                <div
                                  key={member.id}
                                  data-card-id={member.id}
                                  className={`about-team-card ${visibleCards.has(String(member.id)) ? 'about-team-card--visible' : ''}`}
                                  tabIndex={0}
                                  role="group"
                                  aria-label={`${member.name}, ${member.title}`}
                                >
                                    <div className='about-team-card__img-wrap'>
                                        <img
                                          src={member.image}
                                          alt={member.name}
                                          loading='lazy'
                                          className='about-team-card__img'
                                        />
                                        {member.veteranLogo && (
                                            <img
                                              src={member.veteranLogo}
                                              alt={`${member.name} veteran logo`}
                                              loading='lazy'
                                              className='about-team-card__veteran-logo'
                                            />
                                        )}
                                    </div>
                                    <h2 className='about-team-card__name'>{member.name}</h2>
                                    <p className='about-team-card__title'>{member.title}</p>
                                    <ul className='about-team-card__details'>
                                        {member.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
          </div>
        </div>
      </section>
      <section className='sm:overflow-x-visible overflow-x-hidden'>
        <Footer />
      </section>
    </>
  )
}

export default About_Updated
