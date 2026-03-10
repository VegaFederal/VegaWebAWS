import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  HeroSection,
  TwoColumnSection,
  BannerSection,
  CenteredContentSection,
} from '../components/sections'
import Homepage_Hero from '../assets/Homepage_Hero_New.png'
import VOSB_Logo_2 from '../assets/veterans_logo_new.png'
import Mission_statement from '../assets/Mission_statement.png'
import ArmyNavy_Logo from '../assets/ArmyNavy Logos.png'
import PDF_Slack_Sheet from '../assets/Vega_Slick_Sheet.pdf'
import Slack_Icon from '../assets/White_Slack_Icon.png'
import './Homepage2.css'

/**
 * Homepage2 - Component-based homepage layout aligned with the current site
 */
const Homepage2 = () => {
  return (
    <div className="homepage2-page">
      <header>
        <Navbar />
      </header>

      <HeroSection
        backgroundImage={Homepage_Hero}
        height="100vh"
        backgroundColor=""
        imageOpacity={1}
        imageBlur="0px"
        title="Automate Your Mission"
        subtitle="Secure automation. Human-centered solutions. Mission-aligned results."
        paragraph="At Vega Federal, we automate, design, and deliver solutions that help our federal partners improve efficiency and streamline processes. Our goal is to support decision-makers so they can focus on their mission, while we modernize operations thoughtfully and collaboratively. With a deep understanding of the mission and its stakes, Vega Federal supports more efficient operations so users can stay focused on what matters most."
        logoImage={VOSB_Logo_2}
        logoAlt="Certified Veteran-Owned Small Business (VOSB) logo"
        logoSize="180px"
        ctaText="Download Capabilities Slick Sheet"
        ctaLink={PDF_Slack_Sheet}
        ctaIcon={Slack_Icon}
        ctaIconAlt="Slack icon"
        ctaIsExternal={true}
        ctaDownload={true}
        ctaTextColor="text-white"
        ctaBackgroundColor="bg-primary"
        ctaBorderColor="border-primary"
        ctaHoverColor="hover:text-primary"
        ctaHoverBackgroundColor="hover:bg-primary"
        ctaHoverBorderColor="hover:border-primary"
      />

      <TwoColumnSection
        image={Mission_statement}
        imageAlt="Mission statement"
        imageFirst={true}
        className="homepage2-two-column"
        content={
          <div>
            <h1>Automation Built for Federal Missions</h1>
            <p>Vega Federal Solutions provides secure, automated technology services for defense, civilian, and national security agencies. <br />We help teams streamline workflows, modernize mission-critical systems, and operate with greater clarity without disrupting mission tempo. Our solutions are built for real federal environments where security, compliance, and usability are non-negotiable.</p>
            <p>With deep federal experience and technical expertise, we understand the requirements, regulations, and mission pressures agencies face. We design automation-driven, scalable solutions that improve efficiency, reduce risk, and strengthen overall mission performance.</p>
            <h4>What Our Automation Delivers</h4>
            <ul className="homepage2-bullets">
              <li>Faster, more reliable workflowss</li>
              <li>Reduced manual burden for analysts and operators</li>
              <li>Secure, compliant systems built for federal environments</li>
              <li>Scalable platforms aligned to mission tempo</li>
              <li>Clear, intuitive user experiences for complex systems</li>
            </ul>
            <h4>Our Mission</h4>
            <p>Automate Your Mission. Empower Your People.</p>
            <p className="homepage2-paragraph">At Vega Federal Solutions, we help federal agencies operate faster, smarter, and more securely. Through automation, modern engineering, and real federal experience, we remove friction from complex operations so teams can focus on what matters most: mission success.</p>
            <h4>Our Approach:</h4>
            <ul className="homepage2-bullets">
              <li>Trust: Partnerships built on integrity, transparency, and hands-on federal experience.</li>
              <li>Security: Solutions engineered to protect systems, data, and critical infrastructure from day one.</li>
              <li>Impact: Automation that drives measurable gains in efficiency, readiness, and mission execution.</li>
              <li>Vega Federal Solutions: automating your mission so the people who carry it out can achieve theirs</li>
            </ul>
          </div>
        }
        bgColor="bg-white"
      />

      <BannerSection
        title="Why Choose Vega?"
        bgColor="bg-primary"
        textColor="text-white"
        height="60px"
      />

      <CenteredContentSection
        maxWidth="two-column"
        content={
          <div>
            <h5 className="h5-bold">Because When the Mission Matters, Experience Matters.</h5>
            <h5 className="h5-regular double-space"> At Vega, we've walked in your shoes. We know the gravity behind every acquisition, every dollar, and every decision. That's why we build solutions that work on day one and keep working when the stakes are highest.</h5>
            <h5 className="h5-bold">Real Experience, Not Theory.</h5>
            <h5 className="h5-regular double-space">Our team is made up of former government civilians, not career consultants. We understand the mission because we've lived it.</h5>
            <h5 className="h5-bold">Mission-First Expertise</h5>
            <h5 className="h5-regular double-space">Our team is made up of former government civilians, not career consultants. We understand the mission because we've lived it.</h5>
            <h5 className="h5-bold">Proven, Practical Solutions</h5>
            <h5 className="h5-regular double-space">We don't chase trends or pitch flashy tech. We deliver automation and engineering that are effective, tested, and built to last.</h5>
            <h5 className="h5-bold">A Partner Who Truly Understands</h5>
            <h5 className="h5-regular double-space">Because when the mission matters, you need more than a vendor. You need a partner who understands the people, the pressure, and the purpose behind every requirement.</h5>
          </div>
        }
        bgColor="bg-white"
      />

      <BannerSection
        title="Who We Are"
        bgColor="bg-primary"
        textColor="text-white"
        height="60px"
      />

      <TwoColumnSection
        image={ArmyNavy_Logo}
        imageAlt="Army and Navy logos"
        imageFirst={true}
        imageSize="400px"
        imageColumnSpan={4}
        contentColumnSpan={8}
        className="homepage2-two-column"
        content={
          <div>
            <h4 className='h4-regular-red'>We've Lived the Mission. Now We Help Automate It.</h4>
            <p className="homepage2-paragraph">At Vega Federal Solutions, we understand the challenges federal teams face every day. Manual processes, legacy tools, and disconnected systems can slow progress and distract from what matters most, the mission.</p>
            <p className="homepage2-paragraph">Our focus is simple: deliver practical automation that helps teams work smarter, move faster, and stay mission-ready. We combine automation, artificial intelligence, and deep domain expertise to support federal organizations in ways that are thoughtful, realistic, and effective.</p>
            <p className="homepage2-paragraph">We don't believe in buzzwords or over-engineered solutions. We build tools that fit the mission, respect existing workflows, and deliver value from day one.</p>
            <p className="homepage2-paragraph">Grounded in experience. Focused on outcomes. Committed to the mission.</p>
          </div>
        }
        bgColor="bg-white"
      />
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  )
}

export default Homepage2

