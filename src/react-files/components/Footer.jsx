import React from 'react'
import {Link} from 'react-router-dom'
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg'

export default function Footer(){
    return (
        <>
        
        <section class='bg-primary bg-cover bg-center lg:h-screen xl:h-fit pl-[10px] mr-[10px]'>
            <img src={stlSkyline} alt='' className="object-contain w-full"/>
            <div class='flex flex-col pt-40 ml-10 sm:ml-[10rem] lg:ml-[10rem] xl:ml-[100px] gap-5'>

                <h1 class='text-[32px] font-bold text-white'>Vega Fed Solutions | Automate Your Mission</h1>
                <h2 class='text-[28px] text-white mb-12'>Proudly based in St. Louis, serving clients nationwide.</h2>
            </div>
            <div class='flex flex-col ml-10 sm:ml-[10rem] lg:ml-[10rem] xl:ml-[100px] pb-30'>
                <p class='text-xl text-white'>T-REX Innovation Center</p>
                <p class='text-xl text-white'>911 Washington Ave, Suite 412</p>
                <p class='text-xl text-white'>St. Louis, MO 63101</p>
                <Link to='mailto:Info@vegafederal.com' class='text-xl text-white underline mt-5' style="color: white">Info@vegafederal.com</Link>
            </div>
        </section>
        </>
    )
}