import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import myImage from '../assets/dance.gif';




const Copy_Eight = () => {
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

    <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            md:py-16                       /* make the section full‑viewport height */
            sm:overflow-x-visable overflow-x-hidden
        ">
        <div class='flex flex-col items-left gap-5 md:gap-15 ml-20 max-w-[22rem] md:max-w-full lg:ml-[10rem] 2xl:ml-[500px] '>
                    
                        <h1 class='text-2xl md:text-3xl lg:text-4xl text-primary font-bold mt-15 md:mt-[74px]'>Our Super Team</h1>
                        <h3 class='text-2xl md:text-3xl text-secondary  md:pt-5 pt-5'>Vega doesn’t just automate—we adapt, optimize, and integrate.</h3>
                        <p class=' text-primary text-lg md:text-[24px] md:pt-5 pt-5'>With deep roots in government acquisition and mission readiness, we tailor every solution
                         to the unique environment of our customers.</p>
                        <p class='  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>We understand the responsibility behind every task, every dollar, and every decision.</p>
                        <p class='  text-primary text-[48px] md:text-[24px] md:pt-5 pt-5 font-bold'>“Mission success isn’t optional — it’s expected. So is our commitment.”</p>
                </div>
    </section>
    <section class="
                    bg-primary   /* ← your image */
                    bg-cover                        /* cover the entire area */
                    bg-center                       /* center it */
                    bg-no-repeat                    /* don’t tile it */
                    h-screen                        /* make the section full‑viewport height */
                    z-[-1]
                    sm:overflow-x-visable overflow-x-hidden
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
            <section classname='sm:overflow-x-visable overflow-x-hidden'>
                <Footer></Footer>
            </section><section class="
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

export default Copy_Eight