import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkipLink from '../components/SkipLink'
import { HeroSection, StickyStackSection, CenteredContentSection } from '../components/sections'
import GeospatialImage from '../assets/repairing_arm.jpg'
import MobileImage from '../assets/StockPhotoLookingAtWhiteboard.JPG'
//buildingsoffice2.jpg
import BPAImage from '../assets/satelliteOverRiver.mp4'
import PlatformImage from '../assets/uiMeeting.jpg'
import SlickIcon from '../assets/White_Slack_Icon.png'
import SlickSheet from '../assets/Vega Slick Sheet.pdf'
import HomepageHero from '../assets/rawImage.jpg'
import CapabilitiesHeroVideo from '../assets/movingGears.mp4'
import './Capabilities.css'
import '../components/typography.css'

/**
 * Capabilities Page - Uses Bootstrap for layout and StickyStackSection (scrolling cards).
 * No Tailwind; styling via Capabilities.css (same format as ExamplePage).
 */
const Capabilities = () => {
  const stickyStackItems = [
    {
      eyebrow: 'Automation',
      title: 'Automation & Machine Learning',
      overview: 'At Vega, we believe automation is the key to accelerating federal missions. By reducing manual effort, improving accuracy, and connecting the right data to the right people, our solutions let operators focus on what matters most. We integrate applications, workflows, and analytics seamlessly, combining thoughtful engineering with practical automation to enable faster, better-informed decisions.',
      capabilities: [
        'User-centered analytics and mission-specific operational insights',
        'Data visualization and dashboards for intuitive, actionable information',
        'Test automation that improves reliability and reduces repetitive work',
        'Machine learning pipelines that turn complex data into actionable insights',
        'Quantifiable benefits: time savings percentages, cost reduction estimates, accuracy improvements',
        'Workflow automation tailored to mission processes'
      ],
      missionImpact: 'Agencies operate with greater speed, accuracy, and confidence, leveraging automation to deliver mission-critical outcomes faster and more reliably.',
    //   ctaText: 'Explore Capabilities',
    //   ctaLink: '/Capabilities',
      image: GeospatialImage,
      imageAlt: 'Geospatial application visualization',
      accent: '#DD004A'
    },
    {
      eyebrow: 'Cloud & DevSecOps',
      title: 'Cloud, DevOps & DevSecOps Modernization',
      overview: 'Vega modernizes federal IT environments with a practical, mission-focused approach. We help agencies move to secure, scalable cloud architectures without adding complexity, enabling faster delivery and stronger operational resilience.',
      capabilities: [
        'Secure, reliable application deployment and scaling',
        'Configuration management for consistent environments',
        'Monitoring, logging, and automated system health checks',
        'Containerization and orchestration on modern platforms',
        'DevSecOps pipelines with security built in from the start',
        'CI/CD pipelines to streamline delivery and reduce manual effort',
        'Multi-cloud engineering (AWS, Azure, Google Cloud, IBM, Oracle, OpenStack)',
        'Infrastructure as Code (Ansible, Terraform, CloudFormation, ARM, CDK)'
      ],
      missionImpact: 'Modernized legacy systems, reduced operational risk, and faster delivery of critical capabilities — all with solutions built to last.',
    //   ctaText: 'Learn More',
    //   ctaLink: '/Capabilities',
      image: MobileImage,
      imageAlt: 'Mobile and cloud development',
      accent: '#DD004A'
    },
    {
      title: 'Geospatial Engineering & Multi-Sensor Processing',
      overview: "Vega's geospatial expertise is a differentiator, helping defense and intelligence partners turn complex sensor data into actionable insights for real-time operations.",
      capabilities: [
        'Multi-sensor data processing: vector, raster, photogrammetry, LIDAR, RADAR',
        'Mission-ready situational awareness tools',
        'Common Operating Picture (COP) development for shared situational awareness',
        'Modernization of legacy GEOINT systems for improved speed and usability',
        'Geospatial application development for mission workflows'
      ],
      missionImpact: 'Supports DoD, IC, and homeland defense by delivering clear, actionable intelligence and situational awareness.',
    //   ctaText: 'View Geospatial',
    //   ctaLink: '/Capabilities',
      image: BPAImage,
      imageAlt: 'Business process and geospatial',
      accent: '#DD004A'
    },
    {
      title: 'Mission Focused User Experience',
      overview: 'Vega ensures mission systems are intuitive, efficient, and operator-ready by combining UX research, human-centered design, and modern front-end engineering. These capabilities directly complement automation and integration initiatives, making workflows seamless.',
      capabilities: [
        'Modernization of legacy operator tools and workflows',
        'Responsive, mobile-ready UI development',
        'Accessibility-compliant interfaces (Section 508 / WCAG)',
        'Front-end engineering (React, Angular, Vue)',
        'Modern UI design and component-based development',
        'UX research, workflow analysis, and human-centered design'
      ],
      missionImpact: 'Interfaces are intuitive, efficient, and built for real-world operational use — reducing friction and increasing mission effectiveness.',
    //   ctaText: 'See UX Work',
    //   ctaLink: '/Capabilities',
      image: PlatformImage,
      imageAlt: 'Enterprise platform and UX',
      accent: '#DD004A'
    }
  ]

  return (
    <div className="capabilities-page">
      <SkipLink />
      <header>
        <Navbar color_capabilities="text-secondary" />
      </header>

      {/* Hero - component-based, same pattern as ExamplePage */}
      <HeroSection
        backgroundVideo={CapabilitiesHeroVideo}
        imageOpacity={0.6}
        title={
          <>
            Purpose-Built Automation.<br />
            Mission—Ready Solutions.
          </>
        }
        subtitle=""
        paragraph={
            <>
              At Vega, we specialize in delivering automation, AI, and technology solutions tailored to the realities of government missions.
              <span className="hero-paragraph-gap">We don't just deploy software — we solve complex challenges with precision, empathy, and mission-first execution.</span>
            </>
          }
        ctaText="Download Capabilities Slick Sheet"
        ctaDownloadFilename="Capabilities-Slick-Sheet.pdf"
        textAlign="left"
        ctaLink={SlickSheet}
        ctaIcon={SlickIcon}
        height="100vh"
        contentMaxWidth="75ch"
      />

      <main id="main-content">
        {/* Scrolling cards - StickyStackSection (same component as ExamplePage) */}
        <StickyStackSection
          title="Our Capabilities"
          subtitle="Mission-ready automation, cloud, geospatial, and UX—built for federal missions."
          items={stickyStackItems}
          backgroundColor="#F2F2F7"
        />

        {/* Recent Federal Contracting - CenteredContentSection */}
        <CenteredContentSection
          bgColor="bg-white"
          maxWidth="two-column"
          align="center"
          className="capabilities-contracting-section"
          content={
            <>
              <h2>Recent Federal Contracting Activity</h2>
              <p className="contracting-item">
                <strong>Missile Defense Agency SHIELD IDIQ —</strong> Major contract position, ceiling of $151B, enabling rapid delivery of innovative defense capabilities.
              </p>
              <p className="contracting-item">
                <strong>UI/UX Modernization Initiatives —</strong> Supporting federal programs with intuitive, mission-ready interfaces for operators.
              </p>
              <p className="contracting-item">
                <strong>Geospatial & Automation Projects —</strong> Driving multi-sensor integration and workflow automation across intelligence and defense missions.
              </p>
            </>
          }
        />

        <section className="footer-section">
          <Footer />
        </section>
      </main>
    </div>
  )
}

export default Capabilities
