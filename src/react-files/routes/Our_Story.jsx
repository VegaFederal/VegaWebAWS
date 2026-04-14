import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkipLink from '../components/SkipLink'
import { HeroSection, TwoColumnSection, CenteredContentSection } from '../components/sections'
import RyanPHeadshot from '../assets/RyanHeadshot.jpeg'
import ThembaHHeadshot from '../assets/ThembaHeadshot.jpg'
import OurStoryHero from '../assets/StLouisSkyLineArial.jpg'
import OurStoryVegaStarVideo from '../assets/StaryNight.mp4'

import '../components/typography.css'
import './Our_Story.css'

const Our_Story = () => {
  return (
    <div className="our-story-page">
      <SkipLink />
      <header>
        <Navbar color_story="text-secondary" />
      </header>

      <HeroSection
        backgroundImage={OurStoryHero}
        title="Our Story"
        subtitle="Born inside the mission. Built to serve it better."
        textAlign="left"
        height="80vh"
        contentMaxWidth="65ch"
      />

      <main id="main-content">
        <CenteredContentSection
          maxWidth="wide"
          align="center"
          bgColor="bg-white"
          className="mb-[-80px]"
          content={<h2>The Founders</h2>}
        />

        <TwoColumnSection
          image={RyanPHeadshot}
          marginR='5rem'
          imageAlt="Headshot of Ryan Phillips"
          bgColor="bg-white"
          className="our-story-founder mb-[-110px]"
          content={
            <div>
              <h3 className="text-secondary fw-bold">Ryan Phillips</h3>
              <p className="fw-bold">Co-Founder | Veteran | Technologist | Mission Partner</p>
              <p>Ryan brings more than 20 years of experience to Vega, with a career spanning military operations, software engineering, and leadership roles inside NGA. Recognized with the David Packard Excellence in Acquisition Award, Ryan pairs technical depth with an operator's mindset.</p>
              <p>At Vega, he helps customers navigate the complex realities of modernization without compromising mission focus.</p>
            </div>
          }
        />

        <TwoColumnSection
          image={ThembaHHeadshot}
          imageAlt="Headshot of Themba Hinke"
          isReversed={true}
          bgColor="bg-white"
          marginL='5rem'


          content={
            <div>
              <h3 className="text-secondary fw-bold">Themba Hinke</h3>
              <p className="fw-bold">Co-Founder | Systems Architect | Trusted Government Partner</p>
              <p>Themba is a seasoned technical leader with two decades of experience delivering mission-critical systems to the Department of Defense and Intelligence Community. His expertise in platform engineering, modernization, and secure system design has made him a trusted advisor to senior government leaders.</p>
              <p>At Vega, Themba ensures that every solution meets the highest technical and mission-readiness standards.</p>
              <p className="fw-bold">"We didn't start Vega to be just another contractor. We started it because we knew there was a better way — one rooted in mission, not margins."</p>
            </div>
          }
        />

        <HeroSection
          backgroundVideo={OurStoryVegaStarVideo}
          title="Why Vega?"
          content={
            <div className="why-vega-content">
              <p className="why-vega-subheading">The name Vega wasn't an accident.</p>
              <p className="why-vega-paragraph">Vega, the <strong>fifth-brightest star</strong> in the night sky, has served as a guiding light for centuries. In the coming millennia, it will become the North Star, once again leading navigators and explorers.</p>
              <p className="why-vega-statement">Vega reflects this spirit.</p>
              <p className="why-vega-statement">A trusted partner.</p>
              <p className="why-vega-statement">A fixed point.</p>
              <p className="why-vega-statement">A guide through the evolving landscape of defense and intelligence automation.</p>
              <p className="why-vega-statement">We don't just work for the mission — we've lived it.</p>
            </div>
          }
          textAlign="left"
          height="80vh"
          contentMaxWidth="65ch"
          className="why-vega-section"
        />
      </main>

      <Footer />
    </div>
  )
}

export default Our_Story