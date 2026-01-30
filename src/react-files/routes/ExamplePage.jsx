import React, { useRef, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  HeroSection,
  TwoColumnSection,
  BannerSection,
  GridCardSection,
  CenteredContentSection,
  ParallaxSection,
  CarouselSection,
  LinkedPanelsSection
} from '../components/sections'
import Mission_statement from '../assets/Mission_statement.png'
import Mission_statement_2 from '../assets/StandingAroundWhiteboard.jpg'
import ArmyNavy_Logo from '../assets/ArmyNavy Logos.png'
import Homepage_Hero from '../assets/rawImage.jpg'
import Homepage_first_banner from '../assets/Homepage_first_banner.png'
import VOSB_Logo from '../assets/veterans_logo_new.png'
import GeospatialImage from '../assets/1_Geospatial_Application.png'
import MobileImage from '../assets/2_Mobile_Development.png'
import BPAImage from '../assets/3_Business_Process_BPA.png'
import PlatformImage from '../assets/4_Enterprise Platform.png'
import './ExamplePage.css'
import '../components/typography.css'

/**
 * ExamplePage - Demonstrates how to use section components
 * 
 * This is an example of how to create a new page using the template system.
 * Simply import the sections you need and compose your page.
 * All typography and utilities are handled globally.
 */
const ExamplePage = () => {
  const parallaxWrapperRef = useRef(null)
  const [lineVisible, setLineVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLineVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (parallaxWrapperRef.current) {
      observer.observe(parallaxWrapperRef.current)
    }

    return () => {
      if (parallaxWrapperRef.current) {
        observer.unobserve(parallaxWrapperRef.current)
      }
    }
  }, [])

  return (
    <div className="example-page">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <HeroSection
        backgroundImage={Homepage_Hero}
        backgroundColor=""
        imageOpacity={0.6}
        imageBlur="2px"
        title="Automate Your Mission"
        subtitle="AI-powered solutions. Mission-aligned results. Built by insiders who understand the stakes."
        logoSize="180px"
        logoImage={VOSB_Logo}
        logoAlt="Certified Veteran-Owned Small Business (VOSB) logo"
        ctaText="View Our Capabilities"
        ctaLink="/Capabilities"
        height="85vh"
      />

      {/* Two-Column Section */}
      <TwoColumnSection
        image={Mission_statement_2}
        imageAlt="Mission statement"
        imageFirst={false}
        content={
          <div>
            <h2 style={{ marginBottom: '2rem' }}><span style={{ fontWeight: 'normal' }}>Operating</span><br />With Purpose</h2>
            <div style={{ 
                width: '60px', 
                height: '3px', 
                backgroundColor: '#DD004A',
                marginBottom: '2rem'
              }}></div>
            <p>Vega Federal Solutions delivers secure, automated, and mission-ready technology services to federal agencies across defense, civilian, and national security sectors. We help government organizations streamline operations, modernize critical systems, and operate with confidence in a rapidly evolving digital landscape.</p>
            {/* <p>With deep federal experience and technical expertise, we understand the requirements, regulations, and mission pressures agencies face. We design automation-driven, scalable solutions that improve efficiency, reduce risk, and strengthen overall mission performance.</p> */}
          </div>
        }
        bgColor="bg-white"
      />

      {/* Parallax Section */}
      <div ref={parallaxWrapperRef} className={`example-parallax-wrapper ${lineVisible ? 'animate-line' : ''}`}>
        <div className="example-parallax-vertical-line"></div>
        <ParallaxSection
          backgroundImage={Homepage_first_banner}
          title={<h2 style={{ marginBottom: '2rem' }}><span style={{ fontWeight: 'normal' }}>Our Mission</span><br />Is Your Mission</h2>}
          content="With deep federal experience and technical expertise, we understand the requirements, regulations, and mission pressures agencies face. We design automation-driven, scalable solutions that improve efficiency, reduce risk, and strengthen overall mission performance."
          overlayOpacity={0.5}
          imageBlur={0}
          height="70vh"
          parallaxSpeed={0.5}
        />
      </div>

      {/* Linked Panels Section */}
      <LinkedPanelsSection
        items={[
          {
            shortTitle: 'Geospatial Tools',
            title: 'Geospatial Application Development & Intelligence Visualization',
            text: 'Mission-ready geospatial tools and visualizations that help analysts interpret, act, and deliver insight at speed.',
            image: GeospatialImage,
            imageAlt: 'Geospatial application visualization'
          },
          {
            shortTitle: 'AI Integration',
            title: 'AI & Machine Learning Integration',
            text: 'Applied AI and machine learning that enhance intelligence workflows and speed decision-making—without adding complexity.',
            image: BPAImage,
            imageAlt: 'Automation and decision support'
          },
          {
            shortTitle: 'UX Design',
            title: 'Mission-Critical UX Design',
            text: 'Human-centered design for classified systems—clarity, usability, and confidence in high-stakes environments.',
            image: MobileImage,
            imageAlt: 'Mobile mission interface'
          },
          {
            shortTitle: 'Cloud DevSecOps',
            title: 'Cloud Infrastructure & DevSecOps',
            text: 'Secure, scalable cloud and DevSecOps pipelines engineered for mission tempo and IC compliance.',
            image: PlatformImage,
            imageAlt: 'Enterprise cloud platform'
          }
        ]}
        bgColor="bg-white"
      />

      {/* Carousel Section */}
      <CarouselSection
        items={[
          <div key="1" className="carousel-card">
            <h3>Mission-Ready Automation</h3>
            <p>
              We streamline workflows with secure, compliant automation so teams
              can focus on outcomes instead of manual overhead.
            </p>
          </div>,
          <div key="2" className="carousel-card">
            <h3>Modernized Data Pipelines</h3>
            <p>
              From ingestion to insight, we build resilient data pipelines that
              deliver timely intelligence across missions.
            </p>
          </div>,
          <div key="3" className="carousel-card">
            <h3>Secure Cloud Enablement</h3>
            <p>
              We help agencies migrate and operate in the cloud with zero-trust
              security baked into every layer.
            </p>
          </div>
        ]}
        autoPlay={false}
        showDots={true}
        showArrows={true}
        bgColor="bg-white"
      />

      {/* Banner Section
      <BannerSection
        title="Core Capabilities"
        bgColor="bg-primary"
        textColor="text-white"
      /> */}

      {/* Grid Card Section */}
      <GridCardSection
        cards={[
          <div key="1" style={{ background: '#f2f2f7', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Capability 1</h3>
            <p>Description of capability</p>
          </div>,
          <div key="2" style={{ background: '#f2f2f7', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Capability 2</h3>
            <p>Description of capability</p>
          </div>,
          <div key="3" style={{ background: '#f2f2f7', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Capability 3</h3>
            <p>Description of capability</p>
          </div>,
          <div key="4" style={{ background: '#f2f2f7', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Capability 4</h3>
            <p>Description of capability</p>
          </div>
        ]}
        columns={{ mobile: 1, tablet: 2, desktop: 4 }}
        bgColor="bg-white"
      />

      {/* Centered Content Section */}
      <CenteredContentSection
        content={
          <div>
            <h2 style={{ textAlign: 'center' }}>Our Mission</h2>
            <p style={{ textAlign: 'center' }}>To empower federal agencies with secure, scalable, and future-ready solutions.</p>
          </div>
        }
        bgColor="bg-white"
        maxWidth="default"
      />

      {/* Reversed Two-Column Section */}
      <TwoColumnSection
        image={ArmyNavy_Logo}
        imageAlt="Army and Navy logos"
        imageFirst={false}
        content={
          <div>
            <h3 style={{ color: '#DD004A' }}>We've lived it.</h3>
            <p>Vega was founded by former government civilians who saw firsthand the challenges.</p>
            <p>We knew there was a better way — practical, agile, mission-first.</p>
          </div>
        }
        bgColor="bg-white"
      />

      {/* Footer */}
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  )
}

export default ExamplePage

