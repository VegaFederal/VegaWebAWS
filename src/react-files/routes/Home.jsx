import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Arrow from '../assets/Arrow_Hero.png';
import VOSB_Logo from '../assets/VOSB_Logo.png';
import VOSB_Logo_2 from '../assets/vosb-white-1.png';
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
import PDF_Icon from '../assets/PDF_Download_Icon.png'
import PDF_Slack_Sheet from '../assets/Vega Slick Sheet (1).pdf'
import ArmyNavy_Logo from '../assets/ArmyNavy Logos.png'




const Home = () => {
  return (

    <>
    <section className='hero pt-22'>
        <div className="relative w-full hero-lg-aspect h-screen md:h-auto md:overflow-y-hidden overflow-y-visible md:overflow-x-visable overflow-x-hidden">
            <div className="md:absolute md:top-0 md:left-0 md:w-full h-228 flex flex-col bg-[url('./assets/Homepage_Hero.jpg')] bg-cover bg-center bg-no-repeat">
                <header>
                    <Navbar />
                </header>

                {/* your content here */}

                <div className="flex items-end pl-5 md:gap-3 xl:gap-5 lg:pl-[2rem] xl:pl-[5rem] mt-40 md:mt-[25.2rem] lg:mt-[13rem]">
                {/* 
                    - flex: enables flexbox layout
                    - items-end: aligns items to the bottom
                    - gap-5: 1.25rem gap between children
                    - pl-5: 1.25rem padding-left (instead of margin-left on the container)
                    - h-[8.25rem]: sets height to 132px in rem units
                */}
                <img 
                    src={Arrow} 
                    alt="Arrow pointing to headline" 
                    className="object-contain h-[5rem] xl:mb-4 md:h-[7.5rem] md:w-[5.125rem]" 
                    /* 
                    - object-contain: keeps image aspect ratio
                    - h-[8.375rem]: 134px in rem
                    - w-[5.125rem]: 82px in rem
                    */
                />
                    <div className='h-[4.75rem] md:h-[7.5rem] xl:h-[8rem]'>
                        <h4 className="max-w-md md:max-w-xl xl:max-w-4xl font-bold text-center text-white text-[1rem] lg:text-left xl:text-3xl md:text-2xl md:pb-2">
                        Automate Your Mission
                        </h4>
                        <p className="max-w-md md:max-w-xl text-center text-white md:text-left text-base xl:text-xl md:text-[1.25rem]">
                        AI-powered solutions. Mission-aligned results. Built by insiders who understand the stakes.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center md:justify-start pb-20 md:pl-30 md:space-x-3 md:flex-row md:space-y-0 xl:pl-40'>
                    <a href={PDF_Slack_Sheet} download="Capabilities-Slack-Sheet.pdf">
                        <button className='py-2 px-3 md:px-7 md:py-3 lg:px-9 lg:py-4 xl:text-xl lg:text-1.5xl md:text-xl text-sm font-semibold text-white rounded-2xl bg-[#001837] hover:bg-[#001225] hover:text-white'>
                            <img src={PDF_Icon} alt="PDF Icon" className=" h-10 mr-2 inline" />
                            Download Capabilities Slack Sheet
                        </button>
                    </a>
                </div> 
                <img src={VOSB_Logo_2} alt='VOSB Logo' className="object-contain ml-80 md:h-[12rem] md:w-[12rem] opacity-100 brightness-100 contrast-100"/>

            </div>
        </div>
    </section>
    <section class='bg-white sm:overflow-x-visible overflow-x-hidden'>
        <div class='flex flex-col md:flex-row items-center px-4 pt-5 md:pt-10 md:px-[100px] lg:pt-10 xl:pt-20'>
            <img src={ArmyNavy_Logo} alt='' className="object-contain h-40 w-50 md:h-70 md:w-40 lg:w-80 lg:mb-[120px] 2xl:w-80"/>
            <div class='md:mb-0 pb-20 lg:ml-10'>
                <h2 class='text-2xl md:text-4xl font-bold ml-5 xl:ml-[165px] md:pt-0 pt-10'>Who We Are</h2>
                <h3 class='text-2xl md:text-3xl text-secondary ml-5 xl:ml-[165px] md:pt-5 pt-5'>We've lived it.</h3>
                <p class='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Vega was founded by former government civilians who saw firsthand the challenges of delivering automation to the warfighter.</p>
                <p class='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] pt-5'>We knew there was a better way — practical, agile, mission-first.</p>
                <p class='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] pt-5'>Vega brings together automation, AI, and deep domain expertise to unlock efficiency and readiness.</p>
                <p class='ml-5 xl:ml-[165px] text-primary text-lg font-bold md:text-[24px] pt-5'>No hype. Just solutions that work, today.</p>
            </div>
        </div>
    </section>
    <section class="
            bg-[url('./assets/Homepage_first_banner.png')]
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            py-35
            z-[-1]
            sm:overflow-x-visible overflow-x-hidden
        ">
        <div class='flex flex-col md:flex-row md:items-center justify-center ml-5 md:ml-[50px] lg:ml-[8rem] gap-10 md:gap-50 px-4 '>
            <h1 class=' text-white text-3xl lg:text-[52px] font-bold'>Mission First. <span class='text-secondary'>Always.</span></h1>
            <div class='flex flex-col'>
                <p class='text-xl md:text-[28px] text-white'>Your Partner in Automation &<br/>Commercial Adaptation</p>
                
                <p class='text-xl md:text-[24px] text-white mt-[50px]'>We don't sell one-size-fits-all platforms.</p>
                <p class='text-xl md:text-[24px] text-white font-bold mt-[30px]'>We build the right solution for the mission at hand.</p>
            </div>
        </div>
    </section>
    <section className="bg-white py-20 w-full">
        <div className="flex flex-col gap-y-8 w-full">
            {/* Row 1: Image left, text right */}
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 lg:gap-60">
            <img src={complexProblems} alt="" className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:w-[400px] 2xl:h-[336px]" />
            <div className="flex flex-col items-center md:items-start">
                <h6 className="text-primary text-md md:text-xl 2xl:text-[30px] font-bold mb-2 text-center md:text-left">No project is too complex.</h6>
                <h6 className="text-primary text-md md:text-xl 2xl:text-[30px] font-bold text-center md:text-left">No constraint is too real.</h6>
            </div>
            </div>
            {/* Row 2: Image right, text left */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center md:gap-20 lg:gap-60">
            <img src={ThriveTech} alt="" className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:w-[400px] 2xl:h-[291px]" />
            <div className="flex flex-col items-center md:items-end">
                <h6 className="text-primary text-md md:text-xl 2xl:text-[30px] font-bold mb-2 text-center md:text-right">We thrive in the nuances</h6>
                <h6 className="text-primary text-md md:text-xl 2xl:text-[30px] font-bold text-center md:text-right">where mission meets technology.</h6>
            </div>
            </div>
            {/* Row 3: Image left, text right */}
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 lg:gap-60">
            <img src={PartnerAutomation} alt="" className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:w-[400px] 2xl:h-[316px]" />
            <div className="flex flex-col items-center md:items-start">
                <h6 className="text-primary text-md md:text-xl 2xl:text-[30px] font-bold mb-2 text-center md:text-left">“We are your partner in automation</h6>
                <h6 className="text-primary text-md md:text-xl 2xl:text-[30px] font-bold text-center md:text-left">and commercial adaptation.”</h6>
            </div>
            </div>
        </div>
    </section>
    <section class="
            bg-gray-100   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            py-10                     /* make the section full‑viewport height */
            sm:overflow-x-visible overflow-x-hidden
        ">
        <div class='flex flex-col items-left gap-5 md:gap-15 ml-20 max-w-[22rem] md:max-w-full lg:ml-[10rem] 2xl:ml-[500px] '>
            <h1 class='text-2xl md:text-3xl lg:text-4xl text-primary font-bold pt-0'>How We Work:</h1>
            <ul class='ml-10'>
                <li class='list-disc text-xl md:text-2xl lg:text-3xl mb-[24px]'>Small, <span class='font-bold'>elite Tiger Teams</span> — not seat-fillers.</li>
                <li class='list-disc text-xl md:text-2xl lg:text-3xl mb-[24px]'>Tailored solutions, integrating the best of what you already have.</li>
                <li class='list-disc text-xl md:text-2xl lg:text-3xl'>Designed for today’s realities, not tomorrow’s promises.</li>
            </ul>
        </div>
    </section>
    <section class="
            bg-white
            sm:overflow-x-visible overflow-x-hidden
        ">
        <div class='flex items-center justify-center h-30 md:h-10 lg:h-15 md:pt-10 lg:pt-15 md:max-w-full'>
            <h1 class='text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  text-center  font-extrabold text-secondary '>"A handshake still means something to us here."</h1>
        </div>
        <div class='flex flex-col items-center bg-primary h-20 md:h-30 lg:h-30 md:mt-10 lg:mt-15 overflow-x-hidden'>
            <h1 class='text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-5 md:mt-10'>What We Deliver</h1>
        </div>
        <div class='flex flex-col items-center md:flex-row gap-10 md:gap-1 lg:gap-5 md:mt-5 mt-[50px]'>
            <Homepage_Cards image={AIAutomation} title='AI Automation' description_one='Automating the tasks that slow you down.' description_two=' Optimizing what matters'/>
            <Homepage_Cards image={msnReadSup} title='Mission Readiness Support' description_one='Ensuring technology truly serves the operator—and the warfighter.'/>
            <Homepage_Cards image={GeoIntData} title='Geospatial Intelligence & Data' description_one='Actionable insights.' description_two='Custom-built tools to enhance decision-making.'/>
            <Homepage_Cards image={tigerTeam} title='Tiger Team Engagement' description_one='Expert-led engagements from concept to deployment.' description_two='Every time.'/>
        </div>
    </section>
    <section class="
            bg-white   /* ← your image */
            bg-cover            /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            py-20                   /* make the section full‑viewport height */
            sm:overflow-x-visible overflow-x-hidden
        ">
        <div class='flex flex-col items-left gap-5 md:gap-15 ml-15 md:ml-30 lg:ml-[10rem] 2xl:ml-[500px] '>
            <h1 class='text-3xl md:text-[48px] text-primary font-bold  pt-20 md:pt-0'>Why Vega?</h1>
            <h3 class='text-3xl md:text-[40px] text-secondary '>Because we’ve been you.</h3>
            <h3 class='text-xl md:text-[24px] text-primary mt-[15px] font-bold'>We understand the weight behind every acquisition, every dollar, every decision.</h3>
            <ul class='ml-[34px]'>
                <li class='list-disc text-xl mb-[24px]'>Former government civilians — not career consultants.</li>
                <li class='list-disc text-xl mb-[24px]'>Deep knowledge of acquisition, readiness, and warfighter needs.</li>
                <li class='list-disc text-xl mb-[24px]'>We don’t pitch trendy tech.</li>
                <li class='list-disc text-xl'>We deliver effective, tested solutions.</li>
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
            sm:overflow-x-visible overflow-x-hidden
        ">
        <div class='flex flex-col items-left gap-15 ml-15 md:ml-30 2xl:ml-[500px] '>
            <h5 class='text-[48px] text-white font-bold mt-[100px]'>Our Roots.</h5>
            <h3 class='text-[40px] text-secondary  '>Midwestern Values. Global Impact.</h3>
            <ul class='ml-[34px]'>
                <li class='text-white text-[24px] mb-[24px] ml-[-35px] font-bold'>Former government civilians — not career consultants.</li>
                <li class='text-white text-[24px] mb-[24px] ml-[-35px] font-bold'>Deep knowledge of acquisition, readiness, and warfighter needs.</li>
                <li class='text-white text-[24px] mb-[24px] ml-[-35px] font-bold'>We don’t pitch trendy tech.</li>
                <li class='text-white text-[24px] ml-[-35px] font-bold'>We deliver effective, tested solutions.</li>
            </ul>
        </div>
        <img src={stlSkyline} alt='' className="object-contain w-full"/>
    </section>
    <section classname='sm:overflow-x-visible overflow-x-hidden'>
        <Footer></Footer>
    </section>
    </>
  )
}

export default Home
