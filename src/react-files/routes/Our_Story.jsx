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
        <div class='flex bg-cover bg-primary h-45'>
            <Navbar color_OurStory='text-secondary'/>
        </div>
        <section>
            <div
            className="
                bg-[url('./assets/OurStory_Banner.jpg')]   /* ← your image */
                bg-cover                        /* cover the entire area */
                bg-center                       /* center it */
                bg-no-repeat                    /* don’t tile it */
                                  /* make the section full‑viewport height */
                z-[-1]
            "
            >
            <div className='flex items-end h-132 ml-10 gap-5 md:gap-5 md:ml-50 pb-10'>
                <img src={Arrow} alt='' className=" object-contain w-[50px] mb-10 md:h-[134px] md:w-[82px]"/>
                    <div className='flex-col'>
                        <h4 className='font-bold text-white text-2xl md:text-4xl md:text-left pb-5'>Our Story</h4>
                        <p className='tracking-wide text-xl md:text-2xl text-white md:text-left mb-8'>Born inside the mission. Built to serve it better.
                        </p>
                    </div>
            </div>
            </div>
        </section>
        <section class="
            bg-gray-100   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            py-16                       /* make the section full‑viewport height */
        ">
            <div class='flex flex-col items-center'>
                <p class='max-w-68/100 text-xl lg:text-2xl text-primary mt-[50px]'>Vega was founded by two former government civilians who shared a simple, but powerful belief: <span class='font-bold'>there had to be a better way.</span></p>
                <p class='max-w-68/100 text-xl lg:text-2xl text-primary mt-[50px]'>Having served as operators, engineers, program managers, and mission enablers within the Department of Defense and the Intelligence Community, Ryan Phillips and Themba Hinke lived the complexity, the urgency, and the responsibility of delivering technology to the warfighter.</p>
                <p class='max-w-68/100 text-xl lg:text-2xl text-primary mt-[50px]'>They knew what most contractors didn’t — the stakes are too high, and the challenges too real, for cookie-cutter solutions.</p>
            </div>
        </section>
        <section className="py-20 bg-white">
        <div className="flex justify-center">
            <div className="max-w-70/100 mx-auto text-left space-y-8 px-4">
                <h1 className="text-5xl font-bold pb-15">
                    So, they created Vega.
                </h1>
                <p className="text-xl lg:text-2xl text-primary">
                    A company dedicated to building adaptable, automation-focused solutions grounded in real-world mission needs — not buzzwords.
                </p>
                <p className="text-xl lg:text-2xl text-primary">
                    From their earliest projects together at the National Geospatial-Intelligence Agency to today’s partnerships with agencies across the government, Ryan and Themba have stayed true to a simple principle: 
                </p>
                <p className="text-xl lg:text-2xl text-primary">
                    Empathy and expertise, together, deliver results.
                </p>
            </div>
        </div>
        </section>
        <section className="
                bg-[url('./assets/OurStory_VegaStarImage.jpg')]   /* ← your image */
                bg-cover                        /* cover the entire area */
                bg-center                       /* center it */
                bg-no-repeat                    /* don’t tile it */
                md:h-screen                  /* make the section full‑viewport height */
                z-[-1]
            ">
            <div className="flex justify-center">
                <div className="max-w-70/100 mx-auto text-left space-y-8 px-4">
                    <h1 className="text-5xl font-bold pb-10 pt-30 text-white">
                        Why Vega?
                    </h1>
                    <h3 className="text-[40px] font-bold pb-10 text-secondary">
                    The name Vega wasn’t an accident.
                    </h3>
                    <p className="text-xl lg:text-2xl text-white">
                        Vega, the <span class='font-bold'>fifth-brightest star </span> in the night sky, has served as a guiding light for centuries. In the coming millennia, it will become the North Star, once again leading navigators and explorers.                    </p>
                    <p className="text-xl lg:text-2xl text-white">
                    Vega Federal reflects this spirit.
                    </p>
                    <p className="text-xl lg:text-2xl text-white">
                    A trusted partner.
                    </p>
                    <p className="text-xl lg:text-2xl text-white">
                    A fixed point.
                    </p>
                    <p className="text-xl lg:text-2xl text-white">
                    A guide through the evolving landscape of defense and intelligence automation.
                    </p>
                    <p className="text-xl lg:text-2xl text-white font-bold pt-10 pb-10">
                    We don’t just work for the mission — we’ve lived it.                    
                    </p>
                </div>
            </div>
        </section>
        <section class='bg-white bg-cover bg-center h-auto'>
            <div class='flex justify-center'>
                <div className="max-w-70/100 mx-auto text-left space-y-8 px-4 pt-20">
                <h1 class='text-5xl font-bold text-primary'>The Founders</h1>
                <div class='flex flex-col md:flex-row gap-30'>
                    <img src={RyanPHeadshot} alt='' className="object-contain w-[400px] md:w-[396px] mt-20 md:mt-[100px]"/>
                    <div class='flex flex-col'>
                        <h3 class='text-[40px] font-bold text-secondary'>Ryan Phillips</h3>
                        <p class='font-bold text-2xl pt-20'>Co-Founder | Veteran | Technologist | Mission Partner</p>
                        <p class='text-2xl pt-10'>Ryan brings more than 20 years of experience to Vega, with a career spanning military operations, software engineering, and leadership roles inside NGA. Recognized with the David Packard Excellence in Acquisition Award, Ryan pairs technical depth with an operator’s mindset.</p>
                        <p class='text-2xl pt-10'>At Vega, he helps customers navigate the complex realities of modernization without compromising mission focus.</p>
                    </div>
                </div>
                <div class='flex flex-col md:flex-row-reverse gap-30 mt-20'>
                    <img src={ThembaHHeadshot} alt='' className="object-contain w-[400px] md:w-[396px]"/>
                    <div class='flex flex-col pb-30'>
                        <h3 class='text-[40px] font-bold text-secondary'>Themba Hinke</h3>
                        <p class='font-bold text-2xl pt-20'>Co-Founder | Systems Architect | Trusted Government Partner</p>
                        <p class='text-2xl pt-10'>Themba is a seasoned technical leader with two decades of experience delivering mission-critical systems to the Department of Defense and Intelligence Community. His expertise in platform engineering, modernization, and secure system design has made him a trusted advisor to senior government leaders.</p>
                        <p class='text-2xl pt-10'>At Vega, Themba ensures that every solution meets the highest technical and mission-readiness standards.</p>
                        <p class='text-2xl pt-10 font-bold'>“We didn’t start Vega to be just another contractor. We started it because we knew there was a better way — one rooted in mission, not margins.”</p>
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
                ">
                <div class='flex flex-col items-left gap-15 ml-30 xl:ml-[500px] '>
                    <h5 class='text-[48px] text-white font-bold mt-[100px]'>Our Roots.</h5>
                    <h3 class='text-[40px] text-white '>Midwestern Values. Global Impact.</h3>
                    <ul class='ml-[34px]'>
                        <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Vega calls St. Louis home — by choice.</li>
                        <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Away from the Beltway, we bring a grounded, practical, and human-centered approach.</li>
                        <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>We believe in handshake deals, honest partnerships, and mission-first thinking.</li>
                        <li class='text-white text-[24px] ml-[-35px]'>We meet our customers where they are — literally and figuratively.</li>
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

export default Our_Story;
