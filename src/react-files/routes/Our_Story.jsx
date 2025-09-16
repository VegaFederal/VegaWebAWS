import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Arrow from '../assets/Arrow_Hero.png';
import ThembaHHeadshot from '../assets/OurStory_ThembaHeadshot.jpg'
import RyanPHeadshot from '../assets/OurStory_RPhilipHeadshot.jpg'
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg'
import Footer from '../components/Footer';



const Our_Story = () => {
    return (
        <>
        <section className="">
            <div className="md:overflow-y-hidden overflow-y-visable md:overflow-x-visable overflow-x-hidden h-185 bg-primary">
                
                <div className="md:absolute md:top-0 md:left-0 md:w-full flex flex-col bg-[url('./assets/Our_Story-bg.png')] bg-cover bg-no-repeat">
                    <header>
                        <Navbar color_story='text-secondary'/>
                    </header>
                    <div className="flex items-end pl-5 md:gap-3 xl:gap-5 lg:pl-[2rem] xl:pl-[5rem] mt-100 ">
                        <img 
                            src={Arrow} 
                            alt="Arrow pointing to headline" 
                            className="object-contain h-[5rem] md:h-[8.375rem] md:w-[5.125rem]" 
                            /* 
                            - object-contain: keeps image aspect ratio
                            - h-[8.375rem]: 134px in rem
                            - w-[5.125rem]: 82px in rem
                            */
                        />

                        <div className='h-[4.75rem]  md:h-[7.5rem] xl:h-[8rem] ml-5 '>
                            <h4 className="max-w-md md:max-w-xl xl:max-w-4xl font-bold  text-white text-[1rem] lg:text-left xl:text-4xl md:text-2xl md:pb-2">Our Story</h4>
                            <p className="max-w-md md:max-w-xl text-center text-white md:text-left text-base xl:text-2xl md:text-[1.25rem]">Born inside the mission. Built to serve it better.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class='bg-gray-100 sm:overflow-x-visable overflow-x-hidden'>
            <div class='flex flex-col items-center md:mb-0'>
                <p class='max-w-68/100 ml-5  text-primary text-lg md:text-[24px] pt-5'>Vega was founded by two former government civilians who shared a simple, but powerful belief: <span class='font-bold'>there had to be a better way.</span></p>
                <p class='max-w-68/100 ml-5  text-primary text-lg md:text-[24px] pt-5'>Having served as operators, engineers, program managers, and mission enablers within the Department of Defense and the Intelligence Community, Ryan Phillips and Themba Hinke lived the complexity, the urgency, and the responsibility of delivering technology to the warfighter.</p>
                <p class='max-w-68/100 ml-5  text-primary text-lg md:text-[24px] pt-5'>They knew what most contractors didn’t — the stakes are too high, and the challenges too real, for cookie-cutter solutions.</p>
            </div>
        </section>
        <section className="py-20 bg-white sm:overflow-x-visable overflow-x-hidden">
        <div className="flex justify-center">
            <div className="max-w-70/100 mx-auto text-left space-y-8 px-4">
                <h1 class=' text-primary text-3xl lg:text-[52px] font-bold'>
                    So, they created Vega.
                </h1>
                <p class='text-xl md:text-[28px] text-primary'>
                    A company dedicated to building adaptable, automation-focused solutions grounded in real-world mission needs — not buzzwords.
                </p>
                <p class='text-xl md:text-[24px] text-primary mt-[50px]'>
                    From their earliest projects together at the National Geospatial-Intelligence Agency to today’s partnerships with agencies across the government, Ryan and Themba have stayed true to a simple principle: 
                </p>
                <p class='text-xl md:text-[24px] text-primary mt-[50px]'>
                    Empathy and expertise, together, deliver results.
                </p>
            </div>
        </div>
        </section>
        <section class="
            bg-[url('./assets/OurStory_VegaStarImage.jpg')]   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            h-screen
            md:h-auto                       /* make the section full‑viewport height */
            z-[-1]
            sm:overflow-x-visable overflow-x-hidden
        ">
            <div class='flex flex-col md:flex-row md:items-center justify-center min-h-screen ml-5 md:ml-[50px] lg:ml-[8rem] gap-10 md:gap-50 px-4 '>
                <div className="max-w-70/100 mx-auto text-left space-y-8 px-4">
                    <h1 class=' text-white text-3xl lg:text-[52px] font-bold'>
                        Why Vega?
                    </h1>
                    <h3 class='text-2xl md:text-3xl text-secondary md:pt-5 pt-5'>
                    The name Vega wasn’t an accident.
                    </h3>
                    <p class='text-xl md:text-[28px] text-white'>
                        Vega, the <span class='font-bold'>fifth-brightest star </span> in the night sky, has served as a guiding light for centuries. In the coming millennia, it will become the North Star, once again leading navigators and explorers.                    </p>
                    <p class='text-xl md:text-[24px] text-white mt-[50px]'>
                    Vega Federal reflects this spirit.
                    </p>
                    <p class='text-xl md:text-[24px] text-white mt-[30px]'>
                    A trusted partner.
                    </p>
                    <p class='text-xl md:text-[24px] text-white mt-[30px]'>
                    A fixed point.
                    </p>
                    <p class='text-xl md:text-[24px] text-white mt-[30px]'>
                    A guide through the evolving landscape of defense and intelligence automation.
                    </p>
                    <p class='text-xl md:text-[24px] text-white mt-[30px]'>
                    We don’t just work for the mission — we’ve lived it.                    
                    </p>
                </div>
            </div>
        </section>
        <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            py-16                        /* make the section full‑viewport height */
            sm:overflow-x-visable overflow-x-hidden
        ">
            <div class='flex justify-center'>
                <div className="flex  flex-col items-center max-w-70/100 mx-auto text-left space-y-8 px-4 pt-20">
                <h1 class=' text-primary text-5xl lg:text-[52px] font-bold'>The Founders</h1>
                <div class='flex flex-col xl:flex-row items-center gap-30'>
                    <img src={RyanPHeadshot} alt='' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem]  2xl:h-[316px] 2xl:w-[473px] 2xl:ml-[100px] 2xl:mt-[120px]"/>
                    <div class='flex flex-col'>
                        <h3 class='text-2xl md:text-3xl text-secondary md:pt-5 pt-5 font-bold'>Ryan Phillips</h3>
                        <p class='text-xl md:text-[24px] text-primary mt-[50px] font-bold'>Co-Founder | Veteran | Technologist | Mission Partner</p>
                        <p class='text-xl md:text-[24px] text-primary mt-[50px]'>Ryan brings more than 20 years of experience to Vega, with a career spanning military operations, software engineering, and leadership roles inside NGA. Recognized with the David Packard Excellence in Acquisition Award, Ryan pairs technical depth with an operator’s mindset.</p>
                        <p class='text-xl md:text-[24px] text-primary mt-[50px]'>At Vega, he helps customers navigate the complex realities of modernization without compromising mission focus.</p>
                    </div>
                </div>
                <div class='flex flex-col xl:flex-row-reverse items-center gap-30 mt-20'>
                    <img src={ThembaHHeadshot} alt='' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem]  2xl:h-[316px] 2xl:w-[473px] 2xl:ml-[100px] 2xl:mt-[120px]"/>
                    <div class='flex flex-col pb-30'>
                        <h3 class='text-2xl md:text-3xl text-secondary md:pt-5 pt-5 font-bold'>Themba Hinke</h3>
                        <p class='text-xl md:text-[24px] text-primary mt-[50px] font-bold'>Co-Founder | Systems Architect | Trusted Government Partner</p>
                        <p class='text-xl md:text-[24px] text-primary mt-[50px]'>Themba is a seasoned technical leader with two decades of experience delivering mission-critical systems to the Department of Defense and Intelligence Community. His expertise in platform engineering, modernization, and secure system design has made him a trusted advisor to senior government leaders.</p>
                        <p class='text-xl md:text-[24px] text-primary mt-[50px]'>At Vega, Themba ensures that every solution meets the highest technical and mission-readiness standards.</p>
                        <p class='text-xl md:text-[24px] text-primary mt-[50px] font-bold'>“We didn’t start Vega to be just another contractor. We started it because we knew there was a better way — one rooted in mission, not margins.”</p>
                    </div>
                </div>
                </div>
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
                            <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Former government civilians — not career consultants.</li>
                            <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Deep knowledge of acquisition, readiness, and warfighter needs.</li>
                            <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>We don’t pitch trendy tech.</li>
                            <li class='text-white text-[24px] ml-[-35px]'>We deliver effective, tested solutions.</li>
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

export default Our_Story;
