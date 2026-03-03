import {Link} from 'react-router-dom'
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg'

export default function Footer(){
    return (
        <>
        
        <section className='bg-primary bg-cover bg-center pl-[10px] mr-[10px] pb-10'>
            <img src={stlSkyline} alt='' className="object-contain w-full"/>
            <div className='relative -mt-6 sm:-mt-10 lg:-mt-16'>
                <div className='flex flex-col pt-6 ml-10 sm:ml-[10rem] lg:ml-[10rem] xl:ml-[100px] gap-3'>
                    <h1 className='text-[32px] font-bold text-white'>Vega | Automate Your Mission</h1>
                    <h2 className='text-[28px] text-white mb-6'>Proudly based in St. Louis, serving clients nationwide.</h2>
                </div>
                <div className='flex flex-col ml-10 sm:ml-[10rem] lg:ml-[10rem] xl:ml-[100px]'>
                    <p className='text-xl text-white'>T-REX Innovation Center</p>
                    <p className='text-xl text-white'>911 Washington Ave, Suite 412</p>
                    <p className='text-xl text-white'>St. Louis, MO 63101</p>
                    <Link to='mailto:Info@vegafederal.com' className='footer-link'>Info@vegafederal.com</Link>
                    <Link
                        to='https://www.linkedin.com/company/vega-fed-solutions/posts/?feedView=all'
                        className='footer-link'
                    >
                    LinkedIn
                </Link>
                </div>
            </div>
        </section>
        </>
    )
}