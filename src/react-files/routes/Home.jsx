import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkipLink from '../components/SkipLink'
import {
  TwoColumnSection,
  BannerSection,
  CenteredContentSection,
  MissionWithCardsSection,
} from '../components/sections'
import Slick_Icon from '../assets/White_Slack_Icon.png'
import PDF_Slick_Sheet from '../assets/Vega_Slick_Sheet.pdf'
import ArmyNavy_Logo from '../assets/ArmyNavy Logos.png'
import Mission_statement from '../assets/collab.jpg'
import VOSB_Logo_White from '../assets/vosb-white-1.png'
import AutomationVideo from '../assets/automationv2.mp4'
import WhitehouseFlag from '../assets/flag.jpg'
import SatelliteVideo from '../assets/satv2.mp4'
import './HomeStyles.css'
import '../components/typography.css'

const Home = () => {
  return (
    <>
    <SkipLink />
    <section className='hero hero-two-column'>
        <header>
          <Navbar />
        </header>

        <div className="hero-inner">
          <div className="hero-text-col">
            <div id="after-navbar" tabIndex={-1} className="hero-text-block">
              <h1 className="hero-title">
                Automate Your <span className="hero-title-accent">Mission</span>
              </h1>
              <p className="hero-lead">Secure automation. Human-centered solutions. Mission-aligned results.</p>
              <p className="hero-body">At Vega, we automate, design, and deliver solutions that help our federal partners improve efficiency and streamline processes. Our goal is to support decision-makers so they can focus on their mission, while we modernize operations thoughtfully and collaboratively. With a deep understanding of the mission and its stakes, Vega supports more efficient operations so users can stay focused on what matters most.</p>
            </div>
            <div className="hero-cta-wrap">
              <a href={PDF_Slick_Sheet} download="Vega_Capabilities.pdf">
                <button className="hero-cta">
                  <img src={Slick_Icon} alt="" className="hero-cta-icon" />
                  Download Capabilities Slick Sheet
                </button>
              </a>
            </div>
            <div className="hero-vosb">
              <img src={VOSB_Logo_White} alt="Certified Veteran-Owned Small Business (VOSB)" className="hero-vosb-logo" />
            </div>
          </div>

          <div className="hero-images-col">
            <div className="hero-images-grid">
              <div className="hero-img hero-img-large">
                <video src={AutomationVideo} autoPlay loop muted playsInline aria-hidden="true" />
              </div>
              <div className="hero-img hero-img-small">
                <img src={WhitehouseFlag} alt="White House with American flag" />
              </div>
              <div className="hero-img hero-img-small">
                <video src={SatelliteVideo} autoPlay loop muted playsInline aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <a href="#home-mission-intro" className="hero-scroll-arrow" aria-label="Scroll to next section">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="5 11 12 16 19 11" />
          </svg>
        </a>
      </section>

      <div id="home-mission-intro">
      <CenteredContentSection
        maxWidth="two-column"
        align="center"
        bgColor="bg-white"
        className="home-mission-intro"
        content={
          <div>
            <h2>Automation Built for Federal Missions</h2>
            <p>Vega provides secure, automated technology services for defense, civilian, and national security agencies.</p>
            <p>We help teams streamline workflows, modernize mission-critical systems, and operate with greater clarity without disrupting mission tempo. Our solutions are built for real federal environments where security, compliance, and usability are non-negotiable.</p>
          </div>
        }
      />
      </div>

      <TwoColumnSection
        image={Mission_statement}
        imageAlt="Picture of people working at a table"
        imageFirst={true}
        bgColor="bg-white"
        className="home-mission-delivers"
        borderOverlay={true}
        content={
          <div>
            <h2>What Our Automation Delivers</h2>
            <ul className="home-bullets">
              <li>Faster, more reliable workflows</li>
              <li>Reduced manual burden for analysts and operators</li>
              <li>Secure, compliant systems built for federal environments</li>
              <li>Scalable platforms aligned to mission tempo</li>
              <li>Clear, intuitive user experiences for complex systems</li>
            </ul>
          </div>
        }
      />

      <MissionWithCardsSection
        className="home-mission-approach"
        missionTitle={<h2>Our <br/>Mission<br/></h2>}
        missionContent={
          <>
            <p>Automate Your Mission. Empower Your People.</p>
            <p>At Vega, we help federal agencies operate faster, smarter, and more securely. Through automation, modern engineering, and real federal experience, we remove friction from complex operations so teams can focus on what matters most: mission success.</p>
          </>
        }
        cards={[
          { title: 'Trust', text: 'Partnerships built on integrity, transparency, and hands-on federal experience.' },
          { title: 'Security', text: 'Solutions engineered to protect systems, data, and critical infrastructure from day one.' },
          { title: 'Impact', text: 'Automation that drives measurable gains in efficiency, readiness, and mission execution.' },
          { title: 'Vega', text: 'Automating your mission so the people who carry it out can achieve theirs.' },
        ]}
      />

      <BannerSection
        title="Why Choose Vega?"
        bgColor="bg-primary"
        textColor="text-white"
        height="60px"
        centerContent={true}
        className="home-banner"
      />

      <CenteredContentSection
        maxWidth="two-column"
        align="left"
        bgColor="bg-white"
        className="home-why-choose"
        content={
          <div>
            <h5 className="fw-bold">Because When the Mission Matters, Experience Matters.</h5>
            <p>At Vega, we've walked in your shoes. We know the gravity behind every acquisition, every dollar, and every decision. That's why we think about efficiency on day one and keep working when the stakes are highest.</p>
            <h5 className="fw-bold">Real Experience, Not Theory</h5>
            <p>Our company was created by former government civilians and veterans, not career consultants. We understand the mission because we've lived it.</p>
            <h5 className="fw-bold">Mission-First Expertise</h5>
            <p>We bring deep knowledge of acquisition, readiness, and warfighter needs. We know what slows teams down and what accelerates them.</p>
            <h5 className="fw-bold">Proven, Practical Solutions</h5>
            <p>We don't chase trends or pitch flashy tech. We deliver automation and engineering that are effective, tested, and built to last.</p>
            <h5 className="fw-bold">A Partner Who Truly Understands</h5>
            <p>Because when the mission matters, you need more than a vendor. You need a partner who understands the people, the pressure, and the purpose behind every requirement.</p>
          </div>
        }
      />

      <BannerSection
        title="Who We Are"
        bgColor="bg-primary"
        textColor="text-white"
        height="60px"
        centerContent={true}
        className="home-banner"
      />

      <TwoColumnSection
        image={ArmyNavy_Logo}
        imageAlt="Logos for the Army and Navy"
        imageFirst={true}
        imageSize="320px"
        bgColor="bg-white"
        className="home-who-we-are"
        content={
          <div>
            <h4 className="text-secondary">We've Lived the Mission. Now We Help Automate It.</h4>
            <p>At Vega, we understand the challenges federal teams face every day. Manual processes, legacy tools, and disconnected systems can slow progress and distract from what matters most, the mission.</p>
            <p>Our focus is simple: deliver practical automation that helps teams work smarter, move faster, and stay mission-ready. We combine automation, artificial intelligence, and deep domain expertise to support federal organizations in ways that are thoughtful, realistic, and effective.</p>
            <p>We don't believe in buzzwords or over-engineered solutions. We build tools that fit the mission, respect existing workflows, and deliver value from day one.</p>
            <p>Grounded in experience. Focused on outcomes. Committed to the mission.</p>
          </div>
        }
      />

      <Footer />
    </>  
  )
}

export default Home