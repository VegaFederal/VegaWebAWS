import Navbar from '../components/Navbar'
import './HomeStyles.css'
import Footer from '../components/Footer';
import Slick_Icon from '../assets/White_Slack_Icon.png'
import PDF_Slick_Sheet from '../assets/Vega_Slick_Sheet.pdf'
import ArmyNavy_Logo from '../assets/ArmyNavy Logos.png'
import Mission_statement from '../assets/collab.jpg'
import SkipLink from '../components/SkipLink'
import VOSB_Logo_White from '../assets/vosb-white-1.png'
import AutomationVideo from '../assets/automationv2.mp4'
import WhitehouseFlag from '../assets/flag.jpg'
import SatelliteVideo from '../assets/satv2.mp4'



const Home = () => {
  return (
    <>
    <SkipLink />
    <section className='hero hero-two-column'>
        <header>
            <Navbar />
        </header>

        <div className="hero-inner">
            {/* Left column: heading, paragraph, CTA */}
            <div className="hero-text-col">
                <div id="after-navbar" tabIndex={-1} className="hero-text-block">
                    <h1 className="hero-title">
                        Automate Your <span className="hero-title-accent">Mission</span>
                    </h1>
                    <p className="hero-lead">Secure automation. Human-centered solutions. Mission-aligned results.</p>
                    <p className="hero-body">At Vega, we automate, design, and deliver solutions that help our federal partners improve efficiency and streamline processes. Our goal is to support decision-makers so they can focus on their mission, while we modernize operations thoughtfully and collaboratively. With a deep understanding of the mission and its stakes, Vega supports more efficient operations so users can stay focused on what matters most.</p>
                </div>
                <div className='flex md:justify-start pt-10 sm:pt-10 md:pt-6 pb-10 sm:pb-20 pl-15 md:pl-30 md:space-x-3 md:flex-row md:space-y-0 xl:pl-45 mx-[5px] md:mx-0'>
                    <a href={PDF_Slick_Sheet} download="Capabilities-Slack-Sheet.pdf">
                        <button className='py-2 px-3 md:px-7 md:py-3 lg:px-9 lg:py-4 xl:text-xl lg:text-1.5xl md:text-xl text-sm font-semibold text-white rounded-2xl bg-secondary hover:bg-red-600 hover:text-white'>
                            <img src={Slick_Icon} alt="" className=" h-10 mr-2 inline" />
                            Download Capabilities Slick Sheet
                        </button>
                    </a>
                </div>
                <div className="hero-vosb">
                    <img src={VOSB_Logo_White} alt="Certified Veteran-Owned Small Business (VOSB)" className="hero-vosb-logo" />
                </div>
            </div>

            {/* Right column: three-image layout (one large, two stacked) */}
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
    </section>
    <section className='bg-white min-h-fit h-dvh md:min-h-fit 2xl:h-fit sm:overflow-x-visable overflow-x-hidden '>
            <div className='flex flex-col lg:flex-row md:flex-col xl:flex-row  items-center px-4 pt-8 lg:pt-0 md:pb-20 md:px-[100px]'>
                <img src={Mission_statement} alt='Picture of people working at a table' className="object-contain w-full max-w-full lg:max-w-[40vw] h-auto 2xl:ml-[0px] lg:ml-0 ml-5 mr-5 lg:mr-0 lg:w-full w-[calc(100%-2.5rem)]"/>                 <div className='md:mb-0 xl:mb-15 lg:ml-5 2xl:ml-[5rem] pt-6 lg:pt-60'>
                    <h2 className='text-2xl md:text-6xl font-bold ml-5 mb-5'>Automation Built for Federal Missions</h2>
                    <p className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Vega provides secure, automated technology services for defense, civilian, and national security agencies.</p>
                    <p className='ml-5 text-primary text-lg md:text-[24px] mb-5'>We help teams streamline workflows, modernize mission-critical systems, and operate with greater clarity without disrupting mission tempo. Our solutions are built for real federal environments where security, compliance, and usability are non-negotiable.</p>
                    <h3 className='text-2xl font-bold md:text-3xl text-primary ml-5 mb-5'>What Our Automation Delivers</h3>
                    <ul className='ml-5 pl-5' style={{ listStyleType: 'disc' }}>
                        <li className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Faster, more reliable workflows</li>
                        <li className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Reduced manual burden for analysts and operators</li>
                        <li className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Secure, compliant systems built for federal environments</li>
                        <li className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Scalable platforms aligned to mission tempo</li>
                        <li className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Clear, intuitive user experiences for complex systems</li>
                    </ul>
                    <h3 className='text-2xl font-bold md:text-3xl text-primary ml-5 mb-5'>Our Mission</h3>
                    <p className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Automate Your Mission. Empower Your People.</p>
                    <p className='ml-5 text-primary text-lg md:text-[24px] mb-5'>At Vega, we help federal agencies operate faster, smarter, and more securely. Through automation, modern engineering, and real federal experience, we remove friction from complex operations so teams can focus on what matters most: mission success.</p>
                    <h3 className='text-2xl font-bold md:text-3xl text-primary ml-5 mb-5'>Our Approach:</h3>
                    <ul className='ml-5 pl-5' style={{ listStyleType: 'disc' }}>
                        <li className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Trust: Partnerships built on integrity, transparency, and hands-on federal experience.</li>
                        <li className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Security: Solutions engineered to protect systems, data, and critical infrastructure from day one.</li>
                        <li className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Impact: Automation that drives measurable gains in efficiency, readiness, and mission execution.</li>
                        <li className='ml-5 text-primary text-lg md:text-[24px] mb-5'>Vega: automating your mission so the people who carry it out can achieve theirs</li>
                    </ul>
                </div>
            </div>
        </section>
    <section className='bg-white sm:overflow-x-visible overflow-x-hidden px-[5px] md:px-0 pt-10'>
        <h2 className='text-white text-2xl md:text-4xl font-bold pt-5 pb-5 bg-primary w-full text-center'>Why Choose Vega?</h2>
        <div className='flex flex-col items-start text-left px-4 pt-5 md:pt-10 md:px-[100px] lg:pt-10 xl:pt-20'>
            <h3 className='text-xl md:text-2xl text-primary pt-5 pb-2 font-bold'>Because When the Mission Matters, Experience Matters.</h3>
            <p className='text-primary text-lg md:text-[24px]'>At Vega, we've walked in your shoes. We know the gravity behind every acquisition, every dollar, and every decision. That's why we think about efficiency on day one and keep working when the stakes are highest.</p>
            <h3 className='text-xl md:text-2xl text-primary pt-8 pb-2 font-bold'>Real Experience, Not Theory</h3>
            <p className='text-primary text-lg md:text-[24px]'>Our company was created by former government civilians and veterans, not career consultants. We understand the mission because we've lived it.</p>
            <h3 className='text-xl md:text-2xl text-primary pt-8 pb-2 font-bold'>Mission-First Expertise</h3>
            <p className='text-primary text-lg md:text-[24px]'>We bring deep knowledge of acquisition, readiness, and warfighter needs. We know what slows teams down and what accelerates them.</p>
            <h3 className='text-xl md:text-2xl text-primary pt-8 pb-2 font-bold'>Proven, Practical Solutions</h3>
            <p className='text-primary text-lg md:text-[24px]'>We don't chase trends or pitch flashy tech. We deliver automation and engineering that are effective, tested, and built to last.</p>
            <h3 className='text-xl md:text-2xl text-primary pt-8 pb-2 font-bold'>A Partner Who Truly Understands</h3>
            <p className='text-primary text-lg md:text-[24px]'>Because when the mission matters, you need more than a vendor. You need a partner who understands the people, the pressure, and the purpose behind every requirement.</p>
        </div>
    </section>
    <section className='bg-white sm:overflow-x-visible overflow-x-hidden px-[5px] md:px-0 pt-10'>
        <h2 className='text-white text-2xl md:text-4xl font-bold pt-5 pb-5 bg-primary w-full text-center'>Who We Are</h2>
        <div className='flex flex-col md:flex-row items-center px-4 pt-5 md:pt-10 md:px-[100px] lg:pt-10 xl:pt-20'>
            <img src={ArmyNavy_Logo} alt='Logos for the Army and Navy' className="object-contain h-40 w-50 md:h-70 md:w-40 lg:w-80 lg:mb-[120px] 2xl:w-80"/>
            <div className='md:mb-0 pb-20 lg:ml-10'>
                <h3 className='text-2xl md:text-3xl text-secondary ml-5 xl:ml-[165px] md:pt-5 pt-5 pb-5'>We've Lived the Mission. Now We Help Automate It.</h3>
                <p className='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] md:pt-5 pt-5'>At Vega, we understand the challenges federal teams face every day. Manual processes, legacy tools, and disconnected systems can slow progress and distract from what matters most, the mission.</p>
                <p className='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] pt-5'>Our focus is simple: deliver practical automation that helps teams work smarter, move faster, and stay mission-ready. We combine automation, artificial intelligence, and deep domain expertise to support federal organizations in ways that are thoughtful, realistic, and effective.</p>
                <p className='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] pt-5'>We don't believe in buzzwords or over-engineered solutions. We build tools that fit the mission, respect existing workflows, and deliver value from day one.</p>
                <p className='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] pt-5'>Grounded in experience. Focused on outcomes. Committed to the mission.</p>
            </div>
        </div>
    </section>
    <section className='sm:overflow-x-visible overflow-x-hidden'>
        <Footer></Footer>
    </section>
    </>
  )
}

export default Home
