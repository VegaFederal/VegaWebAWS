import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer(){
    return (
        <section class='bg-primary bg-cover bg-center lg:h-screen xl:h-fit'>

            <div class='flex flex-col pt-40 lg:ml-[10rem] xl:ml-[100px] gap-5'>

                <h5 class='text-[32px] font-bold text-white'>Vega | Automation. Adaptation. Mission First.</h5>
                <h1 class='text-[28px] text-white mb-12'>Proudly based in St. Louis, serving clients nationwide.</h1>
            </div>
            <div class='flex flex-col lg:ml-[10rem] xl:ml-[100px]'>
                <p class='text-xl text-white'>T REX Center</p>
                <p class='text-xl text-white'>911 Washington Ave</p>
                <p class='text-xl text-white'>St. Louis, MO 63101</p>
            </div>
        </section>
    )
}