import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Arrow from '../assets/Arrow_Hero.png';
import VOSB_Logo from '../assets/VOSB_Logo.png';
import complexProblems from '../assets/Homepage_Image_ComplexProblems.jpg'
import ThriveTech from '../assets/Homepage_ThriveTech.jpg'
import PartnerAutomation from '../assets/Homepage_PartnerAutomation.jpg'
import msnReadSup from '../assets/Homepage_MsnReadSup.jpg'
import tigerTeam from '../assets/Homepage_TigerTeam.jpg'
import GeoIntData from '../assets/Homepage_GeoIntData.jpg'
import AIAutomation from '../assets/Homepage_AI Automation.jpg'
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg'
import './HomeStyles.css'
import Homepage_Cards from '../components/Homepage_Cards';
import Footer from '../components/Footer';




const Home = () => {
  return (

    <>
    <section className='hero'>
        <div
        className="
            bg-[url('./assets/Homepage_Hero.jpg')]   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don't tile it */
            h-screen                        /* make the section full‑viewport height */
            z-[-1]
        "
        >
        <header>
            <div>
                <Navbar />
            </div>
        </header>
        {/* your content here */}

        <div className='flex items-end h-[8.375rem] gap-[1.25rem] ml-[1.25rem]'>
            <img src={Arrow} alt='' className=" object-contain h-[8.375rem] w-[5.125rem]"/>
                <div className='flex-col'>
                
                    <h4 className='font-bold text-center text-white text-[3rem] md:text-left pb-[1.25rem]'>Your New North Star for Government Automation</h4>
                    <p className='max-w-xl tracking-wide text-center text-white md:text-left text-[1.5rem]'>AI-powered solutions. Mission-aligned results.
                        Built by insiders who understand the stakes.
                    </p>
                </div>
        </div>
        <div className='flex flex-col pt-[1.25rem] space-y-[1rem] md:space-x-[0.75rem] ml-[2.5rem] mt-[1.875rem] md:flex-row md:space-y-0'>
            <Link to='/contact'><button className='px-[2.25rem] py-[1.25rem] text-[2rem] font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Let's Talk</button></Link>
        </div> 
        </div>
    </section>
    <section class='bg-white min-h-screen'>
        <div class='flex flex-col md:flex-row items-center px-[0.25rem] md:px-[6.25rem] py-[0.75rem]'>
            <img src={VOSB_Logo} alt='' className="object-contain h-[4.375rem] w-[4.375rem] mb-[0.625rem] md:mb-[7.5rem]"/>
            <div class='mb-[7rem] md:ml-[0.625rem]'>
                <h2 class='text-[1.875rem] md:text-[2.625rem] font-bold ml-[0.9375rem] md:ml-[10.3125rem] pt-[1.25rem]'>Who We Are</h2>
                <h3 class='text-[1.5rem] md:text-[2.5rem] text-secondary ml-[0.9375rem] md:ml-[10.3125rem] pt-[0.9375rem]'>We've lived it.</h3>
                <p class='ml-[0.9375rem] md:ml-[10.3125rem] text-primary text-lg md:text-[1.5rem] pt-[4.375rem]'>Vega was founded by former government civilians who saw firsthand the challenges of delivering automation to the warfighter.</p>
                <p class='ml-[0.9375rem] md:ml-[10.3125rem] text-primary text-lg md:text-[1.5rem] pt-[0.3125rem]'>We knew there was a better way — practical, agile, mission-first.</p>
                <p class='ml-[0.9375rem] md:ml-[10.3125rem] text-primary text-lg md:text-[1.5rem] pt-[0.3125rem]'>Vega brings together automation, AI, and deep domain expertise to unlock efficiency and readiness.</p>
                <p class='ml-[0.9375rem] md:ml-[10.3125rem] text-primary text-lg font-bold md:text-[1.5rem] pt-[0.3125rem]'>No hype. Just solutions that work, today.</p>
            </div>
        </div>
    </section>
    <section class="
            bg-[url('./assets/Homepage_Banner.jpg')]   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don't tile it */
            min-h-screen                        /* make the section full‑viewport height */
            z-[-1]
        ">
        <div class='flex flex-col md:flex-row items-center justify-center min-h-screen ml-[0.625rem] md:ml-[3.125rem] gap-[0.625rem] md:gap-[3.125rem]'>
            <h1 class=' text-white text-[3rem] md:text-[3.25rem] font-bold'>Mission First. <span class='text-secondary'>Always.</span></h1>
            <div class='flex flex-col'>
                <p class='text-[1.5rem] md:text-[1.75rem] text-white'>Your Partner in Automation  & Commercial Adaptation</p>
                <p class='text-[1.5rem] md:text-[1.5rem] text-white mt-[3.125rem]'>We don't sell one-size-fits-all platforms.</p>
                <p class='text-[1.5rem] md:text-[1.5rem] text-white font-bold mt-[1.875rem]'>We build the right solution for the mission at hand.</p>
            </div>
        </div>
    </section>
    <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don't tile it */
            py-[1rem]                        /* make the section full‑viewport height */
        ">
        <div class='flex flex-col md:flex-row items-center h-fit md:gap-[3.125rem] ml-[1.25rem]'>
            <div class='flex-col ml-[-6.25rem] md:ml-[18.75rem] mt-[1.25rem]'>
                <h6 class='text-primary text-[1.875rem] font-bold mb-[0.3125rem]'>No project is too complex. </h6>
                <h6 class='text-primary text-[1.875rem] font-bold'>No constraint is too real.</h6>
            </div> 
            <img src={complexProblems} alt='' className="object-contain w-[25rem] md:h-[21rem] md:w-[31.75rem] ml-[0.3125rem] md:ml-[6.25rem] mt-[1.25rem] md:mt-[7.5rem]"/>
        </div>
        <div class='flex flex-col-reverse md:flex-row items-center h-fit md:gap-[1.25rem] md:ml-[2.5rem]'>
            <img src={ThriveTech} alt='' className="object-contain w-[25rem] md:h-[18.1875rem] md:w-[32.6875rem] ml-[1.25rem] mt-[1.25rem] md:ml-[6.25rem] md:mt-[7.5rem]"/>
            <div class='flex-col ml-[1.25rem] md:ml-[18.75rem] mt-[1.25rem]'>
                <h6 class='text-primary text-[1.875rem] font-bold mb-[0.3125rem]'>We thrive in the nuances </h6>
                <h6 class='text-primary text-[1.875rem] font-bold'>where mission meets technology.</h6>
            </div> 
        </div>
        <div class='flex flex-col md:flex-row items-center h-fit md:gap-[3.125rem] md:mr-[4.6875rem]'>
            <div class='flex-col ml-[1.25rem] md:ml-[18.75rem] mt-[1.25rem]'>
                <h6 class='text-primary text-[1.875rem] font-bold mb-[0.3125rem]'>"We are your partner in automation</h6>
                <h6 class='text-primary text-[1.875rem] font-bold'>and commercial adaptation."</h6>
            </div> 
            <img src={PartnerAutomation} alt='' className="object-contain w-[25rem] md:h-[19.75rem] md:w-[29.5625rem] ml-[6.25rem] mt-[7.5rem]"/>
        </div>
    </section>
    <section class="
            bg-gray-100   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don't tile it */
            py-[1rem]                       /* make the section full‑viewport height */
        ">
        <div class='flex flex-col items-left gap-[0.3125rem] md:gap-[0.9375rem] ml-[1.25rem] lg:ml-[31.25rem]'>
            <h1 class='text-[3rem] text-primary font-bold mt-[4.625rem]'>How We Work:</h1>
            <ul class='ml-[2.125rem]'>
                <li class='list-disc text-[2rem] mb-[1.5rem]'>Small, <span class='font-bold'>elite Tiger Teams</span> — not seat-fillers.</li>
                <li class='list-disc text-[2rem] mb-[1.5rem]'>Tailored solutions, integrating the best of what you already have.</li>
                <li class='list-disc text-[2rem]'>Designed for today's realities, not tomorrow's promises.</li>
            </ul>
        </div>
    </section>
    <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don't tile it */
                                    /* make the section full‑viewport height */
        ">
        <div class='flex items-center ml-[5.3125rem]'>
            <h1 class='text-[1.875rem] md:text-[3.25rem] font-bold text-secondary mt-[3.125rem]'>"A handshake still means something to us here."</h1>
        </div>
        <div class='flex flex-col items-center bg-primary h-[2.5rem] mt-[3.125rem]'>
            <h1 class='text-[1.875rem] md:text-[3.25rem] font-bold text-white mt-[0.9375rem] md:mt-[2.1875rem]'>What We Deliver</h1>
        </div>
        <div class='flex flex-col items-center md:flex-row gap-[0.625rem] mt-[3.125rem]'>
            <Homepage_Cards image={AIAutomation} title='AI Automation' description_one='Automating the tasks that slow you down.' description_two=' Optimizing what matters'/>
            <Homepage_Cards image={msnReadSup} title='Mission Readiness Support' description_one='Ensuring technology truly serves the operator—and the warfighter.'/>
            <Homepage_Cards image={GeoIntData} title='Geospatial Intelligence & Data' description_one='Actionable insights.' description_two='Custom-built tools to enhance decision-making.'/>
            <Homepage_Cards image={tigerTeam} title='Tiger Team Engagement' description_one='Expert-led engagements from concept to deployment.' description_two='Every time.'/>
        </div>
    </section>
    <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don't tile it */
            min-h-screen                        /* make the section full‑viewport height */
            z-[-1]
        ">
        <div class='flex flex-col items-left gap-[0.9375rem] ml-[1.875rem] xl:ml-[31.25rem] '>
            <h1 class='text-[3rem] text-primary font-bold mt-[6.25rem]'>Why Vega?</h1>
            <h3 class='text-[2.5rem] text-secondary '>Because we've been you.</h3>
            <h3 class='text-[1.5rem] text-primary mt-[0.9375rem] font-bold'>We understand the weight behind every acquisition, every dollar, every decision.</h3>
            <ul class='ml-[2.125rem]'>
                <li class='list-disc text-[1.5rem] mb-[1.5rem]'>Former government civilians — not career consultants.</li>
                <li class='list-disc text-[1.5rem] mb-[1.5rem]'>Deep knowledge of acquisition, readiness, and warfighter needs.</li>
                <li class='list-disc text-[1.5rem] mb-[1.5rem]'>We don't pitch trendy tech.</li>
                <li class='list-disc text-[1.5rem]'>We deliver effective, tested solutions.</li>
            </ul>
        </div>
    </section>
    <section class="
            bg-primary   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don't tile it */
            h-screen                        /* make the section full‑viewport height */
            z-[-1]
        ">
        <div class='flex flex-col items-left gap-[0.9375rem] ml-[1.875rem] xl:ml-[31.25rem] '>
            <h5 class='text-[3rem] text-white font-bold mt-[6.25rem]'>Our Roots.</h5>
            <h3 class='text-[2.5rem] text-white '>Midwestern Values. Global Impact.</h3>
            <ul class='ml-[2.125rem]'>
                <li class='text-white text-[1.5rem] mb-[1.5rem] ml-[-2.1875rem]'>Former government civilians — not career consultants.</li>
                <li class='text-white text-[1.5rem] mb-[1.5rem] ml-[-2.1875rem]'>Deep knowledge of acquisition, readiness, and warfighter needs.</li>
                <li class='text-white text-[1.5rem] mb-[1.5rem] ml-[-2.1875rem]'>We don't pitch trendy tech.</li>
                <li class='text-white text-[1.5rem] ml-[-2.1875rem]'>We deliver effective, tested solutions.</li>
            </ul>
        </div>
        <img src={stlSkyline} alt='' className="object-contain w-full"/>
    </section>
    <section>
        <Footer></Footer>
    </section>
    </>
  )
}

export default Home
