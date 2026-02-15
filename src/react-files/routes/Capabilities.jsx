
import Navbar from '../components/Navbar'
import Arrow from '../assets/Arrow_Hero.png';
import geospatialVideo from '../assets/stockSatimg.mp4';
import myImage3 from '../assets/Ux_design.jpg';
import myImage4 from '../assets/businessprocesses.jpg';
import myImage5 from '../assets/buildingsoffice.jpg';
import myImage6 from '../assets/PDF_Download_Icon.png';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import './HomeStyles.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Slack_Icon from '../assets/White_Slack_Icon.png'
import Slack_Sheet from '../assets/Vega Slick Sheet (1) (1).pdf'
import SkipLink from '../components/SkipLink'


const Capabilities = () => {
    return(
    <>
    <SkipLink />
    <section className='capabilities'>
        <div className="relative w-full hero-lg-aspect md:h-screen md:overflow-y-hidden overflow-y-visible md:overflow-x-visable overflow-x-hidden">
            <div className=" md:absolute md:top-0 md:left-0 md:w-full h-screen xl:h-full flex flex-col bg-[url('./assets/Capabilities_hero.jpg')] bg-cover bg-center bg-no-repeat">
                <header>
                    <div>
                        <Navbar color_capabilities='text-secondary'/>
                    </div>
                </header>
                {/* your content here */}

                <div className="flex items-end pl-5 md:gap-3 xl:gap-5 lg:pl-[2rem] xl:pl-[5rem] mt-62 md:mt-[16rem] lg:mt-[13rem]">
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
                        /* 
                        - object-contain: keeps image aspect ratio
                        - h-[8.375rem]: 134px in rem
                        - w-[5.125rem]: 82px in rem
                        */
                    />


                    <div id="after-navbar" tabIndex={-1} className='h-[4.75rem]  md:h-[7.5rem] xl:h-[8rem] md:mb-10'>
                        <h4 className="max-w-md md:max-w-xl xl:max-w-4xl font-bold text-center text-white text-4xl lg:text-left xl:text-4xl md:text-2xl md:pb-2">Purpose-Built
                            Automation.</h4>
                        <h4 className="max-w-md md:max-w-xl xl:max-w-4xl font-bold text-center text-white text-4xl lg:text-left xl:text-4xl md:text-2xl md:pb-10">Mission—Ready Solutions.</h4>
                        <p className="max-w-md md:max-w-160 text-center text-white md:text-left text-base xl:text-xl md:text-[1.25rem] mb-5">At Vega, we specialize in delivering
                            automation, AI, and technology solutions tailored to the realities of government missions. </p>
                        <p className="max-w-sm md:max-w-140 text-center text-white md:text-left text-base xl:text-xl md:text-[1.25rem]">We don't just deploy software — we solve complex challenges with precision, empathy, and mission-first execution.</p>
                    </div>
                </div>
                    <div className='flex justify-center xl:max-w-2xl md:justify-start md:pl-30 pb-50 md:space-x-3 pt-60 md:pt-40  md:flex-row md:space-y-0 lg:pl-45'>
                        <a href={Slack_Sheet} download="Capabilities-Slack-Sheet.pdf">
                            <button className='px-7 py-3 lg:px-9 lg:py-4 xl:text-xl lg:text-1.5xl text-xl font-semibold text-white rounded-2xl bg-rose-500 hover:bg-red-600 hover:text-white'>
                                <img src={Slack_Icon} alt="" className="h-10 mr-2 inline" />
                                Download Capabilities Slick Sheet
                            </button>
                        </a>
                </div> 
            </div>
        </div>
    </section>

    <main id="main-content" tabIndex={-1}>
    <section class='bg-white min-h-fit h-dvh md:min-h-fit 2xl:h-fit sm:overflow-x-visable overflow-x-hidden '>
        <div class='flex flex-col lg:flex-row md:flex-col xl:flex-row  justify-items-center items-center px-4 pt-5 md:pb-20 md:px-[100px] lg:pt-30 xl:pt-40 '>
        {/* <img src={myImage2} alt='A futuristic digital world map displays glowing neon data overlays, grids, and interface elements.' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px]   2xl:ml-[100px] "/>  */}
            <video
                src={geospatialVideo}
                className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] 2xl:ml-[100px]"
                autoPlay
                muted
                loop
                playsInline
                aria-label="A futuristic digital world map displays glowing neon data overlays, grids, and interface elements."
            /> 
            <div class='md:mb-0 xl:mb-15 lg:ml-5 2xl:ml-[10rem]'>
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Geospatial Application Development</h2>
                <h3 class='text-2xl md:text-3xl text-secondary ml-5  md:pt-5 pt-5'>Delivering Insights Through Location.</h3>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>We build geospatial applications and data services that support critical missions across the National System for Geospatial-Intelligence (NSG) and beyond.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>From scalable platforms to targeted data solutions, Vega helps operators analyze, interpret, and act on complex geospatial data — seamlessly integrated into existing mission environments.</p>
                <ul>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Mission-enabling and mission-critical geospatial capabilities.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Custom-built applications and data services.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Designed for multi-domain, multi-platform environments.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Enabling smarter decisions and operational advantage.</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="
            bg-[#F2F2F7]
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            h-fit
            md:h-auto                       /* make the section full‑viewport height */
            z-[-1]
            sm:overflow-x-visable overflow-x-hidden
            
        ">
        <div class='flex flex-col lg:flex-row xl:flex-row md:flex-col  md:items-center items-center min-h-fit ml-5 md:ml-[50px] lg:pl-[1.5rem] gap-10 md: px-4 pt-10'>
            <div class='md:mb-0 xl:mb-15 2xl:ml-[6.25rem]'>
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Mobile Application Development</h2>
                <h3 class='text-2xl md:text-3xl text-secondary ml-5  md:pt-5 pt-5'>Mobile. Performance. Security.</h3>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Vega crafts mobile applications that deliver high performance in the field or at headquarters.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>From concept through deployment, our team builds custom mobile tools that align to your mission objectives and operational realities.</p>
                <ul>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Full lifecycle development — design to sustainment.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Secure, high-performance apps tailored to your mission.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>App Store support, optimization, and compliance.</li>
                </ul>
            </div>
            <img src={myImage3} alt='A helmeted figure in a dark, high-tech environment uses a smartphone amid glowing holographic screens and digital maps.' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] 2xl:w-[400px] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] 2xl:ml-[100px]"/>
        </div>
    </section>

    <section class=' bg-white min-h-fit h-dvh md:min-h-fit 2xl:h-fit sm:overflow-x-visable overflow-x-hidden'>
        <div class='flex flex-col lg:flex-row xl:flex-row md:flex-col  items-center px-4 pt-5  md:pb-20 md:pt-10 md:px-[100px] lg:pt-20 xl:pt-30'>
            <img src={myImage4} alt='A sleek digital flowchart with interconnected nodes and labels glows in neon pink and blue.' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] md:ml-15 lg:ml-[0rem] 2xl:ml-[100px] "/>
            <div class='md:mb-0 xl:mb-15 lg:ml-10 2xl:ml-[10rem]'>
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Business Process Automation (BPA)</h2>
                <h3 class='text-2xl md:text-3xl text-secondary ml-5  md:pt-5 pt-5'>Automation. That Works Where You Do.</h3>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>We design and implement business process automation tools that simplify complex workflows, eliminate manual tasks, and enable operators to focus on what matters most — the mission.</p> 
                <ul>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Streamlined workflows across departments.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Reduced repetitive tasks and operational friction.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Integration of disconnected systems for seamless operations.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Built for reliability, accuracy, and measurable impact.</li>
                </ul>
            </div>
        </div>
    </section>  

    <section class="
            bg-[#F2F2F7]
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            h-fit
            md:h-auto                       /* make the section full‑viewport height */
            z-[-1]
            sm:overflow-x-visable overflow-x-hidden
            
        ">
        <div class='flex flex-col lg:flex-row xl:flex-row md:flex-col  md:items-center items-center min-h-fit ml-5 md:ml-[50px] lg:pl-[2rem] gap-10  px-4 pt-10'>
            <div class='md:mb-0 xl:mb-15 lg:ml-0 2xl:ml-[6rem]'>
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Platform & Enterprise Services</h2>
                <h3 class='text-2xl md:text-3xl text-secondary ml-5  md:pt-5 pt-5'>Optimizing Infrastructure. Enabling Scale.</h3>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Vega delivers resilient platforms and enterprise services that meet mission demands while respecting government realities.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>We specialize in hybrid-cloud, on-premise, and secure environments, optimizing your infrastructure without disrupting operations.</p>
                <ul>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Hybrid-cloud integration & optimization.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Enterprise-grade application deployment & sustainment.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Infrastructure management, monitoring, and optimization.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Designed to reduce downtime and enhance mission flexibility.</li>
                </ul>
            </div>
            <img src={myImage5} alt='A futuristic, neon-lit visualization shows layered digital platforms and interconnected data blocks floating in a high-tech network.' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] 2xl:w-[400px] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] 2xl:ml-[100px] "/>
        </div>
    </section>  


           <section classname='sm:overflow-x-visible overflow-x-hidden'>
               <Footer></Footer>
           </section>
    </main>
    </>
    );
}

export default Capabilities