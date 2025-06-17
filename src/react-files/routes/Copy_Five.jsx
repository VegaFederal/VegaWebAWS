import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import myImage from '../assets/toad.gif';




const Copy_Five = () => {
    return(
        <>
        <section className='about_us'>
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
                <Navbar color_about="text-secondary"/>
            </div>
        </header>
        {/* your content here */}  
        <section className='flex justify-center items-center h-[700px]'>
            <div className='flex bg-gray-500 w-[1840px] h-[650px] items-center justify-evenly'>
                <img src={myImage} alt='' className=" object-contain h-[650px] w-[500px]"></img>
                                <div className='flex justify-center items-center bg-gray-300 w-[1300px] h-[600px]'>
                                    <p className='font-bold md:text-[42px]'>Description Here</p>
                                </div>
            </div>    
        </section> 
        <section className='flex justify-evenly items-end h-[240px] flex-wrap content-end'>
            <div className='flex bg-white w-[200px] h-[200px] justify-center items-center'>
                <Link to='/copy'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Picture Here</button></Link>
            </div>
            <div className='flex bg-white w-[200px] h-[200px] justify-center items-center'>
                <Link to='/copy_two'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Picture Here</button></Link>
            </div>
            <div className='flex bg-white w-[200px] h-[200px] justify-center items-center'>
                <Link to='/copy_three'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Picture Here</button></Link>
            </div>
            <div className='flex bg-white w-[200px] h-[200px] justify-center items-center'>
                <Link to='/copy_four'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Picture Here</button></Link>
            </div>
            <div className='flex bg-white w-[200px] h-[200px] justify-center items-center'>
                <Link to='/copy_five'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Picture Here</button></Link>
            </div>
            <div className='flex bg-white w-[200px] h-[200px] justify-center items-center'>
                <Link to='/copy_six'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Picture Here</button></Link>
            </div>
            <div className='flex bg-white w-[200px] h-[200px] justify-center items-center'>
                <Link to='/copy_seven'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Picture Here</button></Link>
            </div>
            <div className='flex bg-white w-[200px] h-[200px] justify-center items-center'>
                <Link to='/copy_eight'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-rose-600 hover:bg-red-700 hover:text-white'>Picture Here</button></Link>
            </div>
        </section>
        </div>
    </section>

    <section className='bg-white bg-cover bg-center h-screen'>
        <div class='flex items-center  h-screen w-screen'>
                    <div class='flex-col ml-[165px] text-nowrap w-screen'>
                        <h1 class='text-[48px] font-bold pt-[70px] '>Our Super Team</h1>
                        <h3 class='text-[40px] text-rose-600 pt-[70px] '>Vega doesn’t just automate—we adapt, optimize, and integrate.</h3>
                        <p class='text-slate-900 text-[24px] pt-[50px]'>With deep roots in government acquisition and mission readiness, we tailor every solution
                         to the unique environment of our customers.</p>
                        <p class='text-slate-900 text-[24px] pt-[50px]'>We understand the responsibility behind every task, every dollar, and every decision.</p>
                        <p class='text-slate-900 text-[48px] pt-[50px] font-bold'>“Mission success isn’t optional — it’s expected. So is our commitment.”</p>
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
    )
}

export default Copy_Five