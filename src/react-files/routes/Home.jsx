import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Arrow from '../assets/Arrow_Hero.png';
import VOSB_Logo from '../assets/VOSB_Logo.png';
import VOSB_Logo_2 from '../assets/veterans_logo_new.png';
import complexProblems from '../assets/Homepage_Image_ComplexProblems.jpg'
import ThriveTech from '../assets/Homepage_ThriveTech.jpg'
import PartnerAutomation from '../assets/Homepage_PartnerAutomation.jpg'
import msnReadSup from '../assets/Home_card_2.png'
import tigerTeam from '../assets/Home_card_4.png'
import GeoIntData from '../assets/Home_card_3.png'
import AIAutomation from '../assets/Home_card_1.png'
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg'
import './HomeStyles.css'
import Homepage_Cards from '../components/Homepage_Cards';
import Footer from '../components/Footer';
import PDF_Icon from '../assets/PDF_Download_Icon.png'
import Slack_Icon from '../assets/White_Slack_Icon.png'
import PDF_Slack_Sheet from '../assets/Vega Slick Sheet (1).pdf'
import ArmyNavy_Logo from '../assets/ArmyNavy Logos.png'
import Mission_statement from '../assets/Homepage_overview.jpg'
import SkipLink from '../components/SkipLink'



const Home = () => {
  return (
    <>
    <SkipLink />
    <section className='hero'>
        <div className="relative w-full hero-lg-aspect h-fit md:h-screen md:overflow-y-hidden overflow-y-visible md:overflow-x-visable overflow-x-hidden">
            <div className="md:absolute md:top-0 md:left-0 md:w-full h-screen xl:h-full flex flex-col bg-[url('./assets/Arch2.jpeg')] bg-cover bg-center bg-no-repeat">
                <header>
                    <Navbar />
                </header>

                {/* Skip target - content right after navbar */}
                <div className="flex items-end pl-5 md:gap-3 xl:gap-5 lg:pl-[2rem] xl:pl-[5rem] mt-40 md:mt-[rem] lg:mt-[13rem]">
                {/* 
                    - flex: enables flexbox layout
                    - items-end: aligns items to the bottom
                    - gap-5: 1.25rem gap between children
                    - pl-5: 1.25rem padding-left (instead of margin-left on the container)
                    - h-[8.25rem]: sets height to 132px in rem units
                    */}
                    <img 
                        src={Arrow} 
                        alt="" 
                        className="object-contain h-[5rem] xl:mb-9.5 md:h-[7.5rem] md:w-[5.125rem]" 
                    />


                    <div id="after-navbar" tabIndex={-1} className='h-[4.75rem] md:h-[7.5rem] xl:h-[8rem] md:mb-10'>
                        <h4 className="max-w-md md:max-w-xl xl:max-w-4xl font-bold text-center text-white text-4xl lg:text-left xl:text-4xl md:text-2xl md:pb-2">Automate Your Mission</h4>
                        <p className="max-w-md md:max-w-160 text-center text-white md:text-left text-base xl:text-xl md:text-[1.25rem] mb-5">AI-powered solutions. Mission-aligned results. Built by insiders who understand the stakes.</p>
                    </div>
                </div>
                <div className='flex md:justify-start pt-20 sm:pt-10 md:pt-0 pb-10 sm:pb-20 pl-15 md:pl-30 md:space-x-3 md:flex-row md:space-y-0 xl:pl-45 mx-[5px] md:mx-0'>
                    <a href={PDF_Slack_Sheet} download="Capabilities-Slack-Sheet.pdf">
                        <button className='py-2 px-3 md:px-7 md:py-3 lg:px-9 lg:py-4 xl:text-xl lg:text-1.5xl md:text-xl text-sm font-semibold text-white rounded-2xl bg-secondary hover:bg-red-600 hover:text-white'>
                            <img src={Slack_Icon} alt="" className=" h-10 mr-2 inline" />
                            Download Capabilities Slick Sheet
                        </button>
                    </a>
                </div> 
                <img src={VOSB_Logo_2} alt='Certified Veteran-Owned Small Business (VOSB) logo' className="object-contain ml-30 sm:ml-80 h-40 w-40 md:h-[12rem] md:w-[12rem] opacity-100 brightness-100 contrast-100"/>

            </div>
        </div>
    </section>
    <section class='bg-white min-h-fit h-dvh md:min-h-fit 2xl:h-fit sm:overflow-x-visable overflow-x-hidden '>
            <div class='flex flex-col lg:flex-row md:flex-col xl:flex-row  items-center px-4 pt- md:pb-20 md:px-[100px]'>
                <img src={Mission_statement} alt='Picture of people working at a table' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:h-[1000px] 2xl:w-[1000px] 2xl:ml-[0px] "/> 
                <div class='md:mb-0 xl:mb-15 lg:ml-5 2xl:ml-[5rem] pt-60'>
                    <h2 class='text-2xl md:text-6xl font-bold ml-5 mb-5'>Overview</h2>
                    <p class='ml-5  text-primary text-lg md:text-[24px] mb-5'>Vega Federal Solutions delivers secure, automated, and mission-ready technology services to federal agencies across defense, civilian, and national security sectors. We help government organizations streamline operations, modernize critical systems, and operate with confidence in a rapidly evolving digital landscape.</p>
                    <p class='ml-5  text-primary text-lg md:text-[24px] mb-5'>With deep federal experience and technical expertise, we understand the requirements, regulations, and mission pressures agencies face. We design automation-driven, scalable solutions that improve efficiency, reduce risk, and strengthen overall mission performance.</p>
                    <h3 class='text-2xl font-bold md:text-3xl text-primary ml-5 mb-5'>Our Mission</h3>
                    <p class='ml-5 text-primary text-lg md:text-[24px] mb-7'>To empower federal agencies with secure, scalable, and future-ready solutions that enhance mission execution and protect national interests. We focus on technologies and automation that optimize workflows, accelerate modernization, and build operational resilience.</p>
                    <p class='ml-5 text-primary text-lg md:text-[24px] mb-3'>Our mission is grounded in three principles:</p>
                    <ul>
                        <li class='ml-5 text-primary text-lg md:text-[24px] mb-5'>Trust — Partnerships built on integrity and transparency.</li>
                        <li class='ml-5 text-primary text-lg md:text-[24px] mb-5'>Security — Solutions that safeguard systems, data, and critical infrastructure.</li>
                        <li class='ml-5 text-primary text-lg md:text-[24px] mb-5'>Impact — Measurable outcomes that improve efficiency and mission readiness.</li>
                    </ul>
                </div>
            </div>
        </section>
    <section class="
            bg-white
            sm:overflow-x-visible overflow-x-hidden
            px-[5px] md:px-0
        ">
        <div class='flex flex-col items-center bg-primary h-20 md:h-30 lg:h-30  overflow-x-hidden mx-[5px] md:mx-0'>
            <h2 class='text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-5 md:mt-10'>Core Capabilities</h2>
        </div>
        <div class='flex flex-col items-center md:flex-row gap-10 md:gap-1 lg:gap-5 md:mt-5 mt-[50px] mx-[5px] md:mx-0'>
            <Homepage_Cards image={AIAutomation} title='Geospatial Application Development & Intelligence Visualization' description_one='Mission-ready geospatial tools and visualizations that help analysts interpret, act, and deliver insight at speed..'/>
            <Homepage_Cards image={msnReadSup} title='AI & Machine Learning Integration' description_one='Applied AI and machine learning that enhance intelligence workflows and speed decision-making—without adding complexity.'/>
            <Homepage_Cards image={GeoIntData} title='Mission-Critical  UX Design' description_one='Human-centered design for classified systems—clarity, usability, and confidence in high-stakes environments.'/>
            <Homepage_Cards image={tigerTeam} title='Cloud Infrastructure & DevSecOps' description_one='Secure, scalable cloud and DevSecOps pipelines engineered for mission tempo and IC compliance.'/>
        </div>
    </section>
    <section class='bg-white sm:overflow-x-visible overflow-x-hidden px-[5px] md:px-0 pt-10'>
        <h2 class='text-white text-2xl md:text-4xl font-bold pt-5 pb-5 bg-primary w-full text-center'>Who We Are</h2>
        <div class='flex flex-col md:flex-row items-center px-4 pt-5 md:pt-10 md:px-[100px] lg:pt-10 xl:pt-20'>
            <img src={ArmyNavy_Logo} alt='Logos for the Army and Navy' className="object-contain h-40 w-50 md:h-70 md:w-40 lg:w-80 lg:mb-[120px] 2xl:w-80"/>
            <div class='md:mb-0 pb-20 lg:ml-10'>
                <h3 class='text-2xl md:text-3xl text-secondary ml-5 xl:ml-[165px] md:pt-5 pt-5 pb-20'>We've lived it.</h3>
                <p class='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Vega was founded by former government civilians who saw firsthand the challenges of delivering automation to the warfighter.</p>
                <p class='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] pt-5'>We knew there was a better way — practical, agile, mission-first.</p>
                <p class='ml-5 xl:ml-[165px] text-primary text-lg md:text-[24px] pt-5'>Vega brings together automation, AI, and deep domain expertise to unlock efficiency and readiness.</p>
                <p class='ml-5 xl:ml-[165px] text-primary text-lg font-bold md:text-[24px] pt-5'>No hype. Just solutions that work, today.</p>
            </div>
        </div>
    </section>
    <section classname='sm:overflow-x-visible overflow-x-hidden'>
        <Footer></Footer>
    </section>
    </>
  )
}

export default Home
