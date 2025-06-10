import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer(){
    return (
        <section class='bg-primary bg-cover bg-center h-screen  xl:h-screen'>

                <Link to='/contact'><button className='mt-70 px-9 py-5 text-xl xl:text-2xl font-semibold text-white rounded-2xl bg-secondary hover:bg-red-700 hover:text-white ml-50  xl:mt-[150px] xl:ml-[1200px]'>Discover How Vega Can Optimize Your Mission</button></Link>
            <div class='flex flex-col xl:mt-[300px] xl:ml-[100px] gap-5'>
                <h5 class='text-[32px] font-bold text-white'>Vega | Automation. Adaptation. Mission First.</h5>
                <h1 class='text-[24px] text-white'>Proudly based in St. Louis, serving clients nationwide.</h1>
            </div>
        </section>
    )
}