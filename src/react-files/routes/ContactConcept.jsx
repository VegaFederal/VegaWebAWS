import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';

const ContactConcept = () => {
    return(
        <>
        <section class='contactConcept'>
            <div
        className="
            bg-[url('./assets/Capabilities_Banner.jpg')]   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            h-screen                        /* make the section full‑viewport height */
            z-[-1]
        "
        >
        <header>
            <div>
                <Navbar color_contact='text-secondary'/>
            </div>
        </header>
        {/* your content here */}
        <div className='flex items-center justify-center h-screen'>
            <div className='flex-col justify-items-center w-[600px] bg-white rounded-2xl'>
                    <h4 className='font-bold text-center text-rose-600 text-4xl md:text-left'>Contact us!</h4>
                    <ul className='flex-col justify-items-start '>
                        <li className='font-bold text-black text-2xl mt-[10px]'>Name</li>
                        <li className='font-bold text-2xl mt-[10px]'><input className='bg-white text-black border-gray-400 border-2' placeholder='Your Name Here' required></input></li>
                        <li className='font-bold text-black text-2xl mt-[30px]'>Email</li>
                        <li className='font-bold text-2xl mt-[10px]'><input className='bg-white text-black border-gray-400 border-2' placeholder='Your Email Here' required></input></li>
                        <li className='font-bold text-black text-2xl mt-[30px]'>Phone Number</li>
                        <li className='font-bold text-2xl mt-[10px]'><input className='bg-white text-black border-gray-400 border-2' placeholder='Your Number Here' required></input></li>
                        <li className='font-bold text-black text-2xl mt-[30px]'>Message</li>
                        <li className='font-bold text-2xl mt-[10px] mb-[40px]'><textarea className='bg-white text-black border-gray-400 border-2 resize-none w-[500px] h-[200px]' placeholder='Your Message Here' required></textarea></li>
                    </ul>
                    <button className='mb-[10px] px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Submit</button>
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
                           <h3 class='text-[40px] text-rose-600 '>Midwestern Values. Global Impact.</h3>
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
    );
}

export default ContactConcept