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
            bg-no-repeat                    /* don’t tile it */
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

        <div className='flex items-end h-132 gap-5 ml-5'>
            <img src={Arrow} alt='' className=" object-contain h-[134px] w-[82px]"/>
                <div className='flex-col'>
                
                    <h4 className='font-bold text-center text-white text-4xl md:text-left pb-5'>Your New North Star for Government Automation</h4>
                    <p className='max-w-xl tracking-wide text-center text-white md:text-left text-2xl'>AI-powered solutions. Mission-aligned results.
                        Built by insiders who understand the stakes.
                    </p>
                </div>
        </div>
        <div className='flex flex-col pt-5 space-y-4 md:space-x-3 ml-40 mt-30 md:flex-row md:space-y-0'>
            <Link to='/contact'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Let's Talk</button></Link>
        </div> 
        </div>
    </section>
    <section class='bg-white min-h-screen'>
        <div class='flex flex-col md:flex-row items-center px-4 md:px-[100px] py-12'>
            <img src={VOSB_Logo} alt='' className="object-contain h-70 w-70 mb-10 md:mb-[120px]"/>
            <div class='mb-28 md:ml-10'>
                <h2 class='text-3xl md:text-[42px] font-bold ml-15 md:ml-[165px] pt-20'>Who We Are</h2>
                <h3 class='text-2xl md:text-[40px] text-secondary ml-15 md:ml-[165px] pt-15'>We've lived it.</h3>
                <p class='ml-15 md:ml-[165px] text-primary text-lg md:text-[24px] pt-[70px]'>Vega was founded by former government civilians who saw firsthand the challenges of delivering automation to the warfighter.</p>
                <p class='ml-15 md:ml-[165px] text-primary text-lg md:text-[24px] pt-5'>We knew there was a better way — practical, agile, mission-first.</p>
                <p class='ml-15 md:ml-[165px] text-primary text-lg md:text-[24px] pt-5'>Vega brings together automation, AI, and deep domain expertise to unlock efficiency and readiness.</p>
                <p class='ml-15 md:ml-[165px] text-primary text-lg font-bold md:text-[24px] pt-5'>No hype. Just solutions that work, today.</p>
            </div>
        </div>
    </section>
    <section class="
            bg-[url('./assets/Homepage_Banner.jpg')]   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            min-h-screen                        /* make the section full‑viewport height */
            z-[-1]
        ">
        <div class='flex flex-col md:flex-row items-center justify-center min-h-screen ml-10 md:ml-[50px] gap-10 md:gap-50'>
            <h1 class=' text-white text-4xl md:text-[52px] font-bold'>Mission First. <span class='text-secondary'>Always.</span></h1>
            <div class='flex flex-col'>
                <p class='text-2xl md:text-[28px] text-white'>Your Partner in Automation  & Commercial Adaptation</p>
                <p class='text-2xl md:text-[24px] text-white mt-[50px]'>We don’t sell one-size-fits-all platforms.</p>
                <p class='text-2xl md:text-[24px] text-white font-bold mt-[30px]'>We build the right solution for the mission at hand.</p>
            </div>
        </div>
    </section>
    <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            py-16                        /* make the section full‑viewport height */
        ">
        <div class='flex flex-col md:flex-row items-center h-fit md:gap-50 ml-20'>
            <div class='flex-col ml-[-100px] md:ml-[300px] mt-20'>
                <h6 class='text-primary text-[30px] font-bold mb-5'>No project is too complex. </h6>
                <h6 class='text-primary text-[30px] font-bold'>No constraint is too real.</h6>
            </div> 
            <img src={complexProblems} alt='' className="object-contain w-[400px] md:h-[336px] md:w-[508px] ml-5 md:ml-[100px] mt-20 md:mt-[120px]"/>
        </div>
        <div class='flex flex-col-reverse md:flex-row items-center h-fit md:gap-20 md:ml-40'>
            <img src={ThriveTech} alt='' className="object-contain w-[400px] md:h-[291px] md:w-[523px] ml-20 mt-20 md:ml-[100px] md:mt-[120px]"/>
            <div class='flex-col ml-20 md:ml-[300px] mt-20'>
                <h6 class='text-primary text-[30px] font-bold mb-5'>We thrive in the nuances </h6>
                <h6 class='text-primary text-[30px] font-bold'>where mission meets technology.</h6>
            </div> 
        </div>
        <div class='flex flex-col md:flex-row items-center h-fit md:gap-50 md:mr-75'>
            <div class='flex-col ml-20 md:ml-[300px] mt-20'>
                <h6 class='text-primary text-[30px] font-bold mb-5'>“We are your partner in automation</h6>
                <h6 class='text-primary text-[30px] font-bold'>and commercial adaptation.”</h6>
            </div> 
            <img src={PartnerAutomation} alt='' className="object-contain w-[400px] md:h-[316px] md:w-[473px] ml-[100px] mt-[120px]"/>
        </div>
    </section>
    <section class="
            bg-gray-100   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            py-16                       /* make the section full‑viewport height */
        ">
        <div class='flex flex-col items-left gap-5 md:gap-15 ml-20 lg:ml-[500px]'>
            <h1 class='text-[48px] text-primary font-bold mt-[74px]'>How We Work:</h1>
            <ul class='ml-[34px]'>
                <li class='list-disc text-[32px] mb-[24px]'>Small, <span class='font-bold'>elite Tiger Teams</span> — not seat-fillers.</li>
                <li class='list-disc text-[32px] mb-[24px]'>Tailored solutions, integrating the best of what you already have.</li>
                <li class='list-disc text-[32px]'>Designed for today’s realities, not tomorrow’s promises.</li>
            </ul>
        </div>
    </section>
    <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
                                    /* make the section full‑viewport height */
        ">
        <div class='flex items-center ml-85'>
            <h1 class='text-3xl md:text-[52px] font-bold text-secondary mt-[50px]'>"A handshake still means something to us here."</h1>
        </div>
        <div class='flex flex-col items-center bg-primary h-40 mt-[50px]'>
            <h1 class='text-3xl md:text-[52px] font-bold text-white mt-15 md:mt-[35px]'>What We Deliver</h1>
        </div>
        <div class='flex flex-col items-center md:flex-row gap-10 mt-[50px]'>
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
            bg-no-repeat                    /* don’t tile it */
            min-h-screen                        /* make the section full‑viewport height */
            z-[-1]
        ">
        <div class='flex flex-col items-left gap-15 ml-30 xl:ml-[500px] '>
            <h1 class='text-[48px] text-primary font-bold mt-[100px]'>Why Vega?</h1>
            <h3 class='text-[40px] text-secondary '>Because we’ve been you.</h3>
            <h3 class='text-[24px] text-primary mt-[15px] font-bold'>We understand the weight behind every acquisition, every dollar, every decision.</h3>
            <ul class='ml-[34px]'>
                <li class='list-disc text-[24px] mb-[24px]'>Former government civilians — not career consultants.</li>
                <li class='list-disc text-[24px] mb-[24px]'>Deep knowledge of acquisition, readiness, and warfighter needs.</li>
                <li class='list-disc text-[24px] mb-[24px]'>We don’t pitch trendy tech.</li>
                <li class='list-disc text-[24px]'>We deliver effective, tested solutions.</li>
            </ul>
        </div>
    </section>
    <section class="
            bg-primary   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            h-screen                        /* make the section full‑viewport height */
            z-[-1]
        ">
        <div class='flex flex-col items-left gap-15 ml-30 xl:ml-[500px] '>
            <h5 class='text-[48px] text-white font-bold mt-[100px]'>Our Roots.</h5>
            <h3 class='text-[40px] text-white '>Midwestern Values. Global Impact.</h3>
            <ul class='ml-[34px]'>
                <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Former government civilians — not career consultants.</li>
                <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Deep knowledge of acquisition, readiness, and warfighter needs.</li>
                <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>We don’t pitch trendy tech.</li>
                <li class='text-white text-[24px] ml-[-35px]'>We deliver effective, tested solutions.</li>
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
