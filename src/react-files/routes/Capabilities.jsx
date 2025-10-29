
import Navbar from '../components/Navbar'
import Arrow from '../assets/Arrow_Hero.png';
import myImage2 from '../assets/Capabilities_GeoAppDev.jpg';
import myImage3 from '../assets/Capabilities_MobileAppDev.jpg';
import myImage4 from '../assets/Capabilities_BPA.png';
import myImage5 from '../assets/Capabilities_PlatformEnt.jpg';
import myImage6 from '../assets/PDF_Download_Icon.png';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import './HomeStyles.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Slack_Icon from '../assets/White_Slack_Icon.png'
import Slack_Sheet from '../assets/Vega Slick Sheet (1) (1).pdf'


const Capabilities = () => {
    return(
    <>
    <section className='capabilities'>
        <div className="relative w-full hero-lg-aspect md:h-screen md:overflow-y-hidden overflow-y-visible md:overflow-x-visable overflow-x-hidden">
            <div className=" md:absolute md:top-0 xl:top-22 md:left-0 md:w-full h-screen xl:h-full flex flex-col bg-[url('./assets/Homepage_Hero.jpg')] bg-cover bg-center bg-no-repeat">
                <header>
                    <div>
                        <Navbar color_capabilities='text-secondary'/>
                    </div>
                </header>
                {/* your content here */}

                <div className="flex items-end pl-5 md:gap-3 xl:gap-5 lg:pl-[2rem] xl:pl-[5rem] mt-62 md:mt-[13rem] lg:mt-[11rem]">
                    {/* 
                    - flex: enables flexbox layout
                    - items-end: aligns items to the bottom
                    - gap-5: 1.25rem gap between children
                    - pl-5: 1.25rem padding-left (instead of margin-left on the container)
                    - h-[8.25rem]: sets height to 132px in rem units
                    */}
                    <img 
                        src={Arrow} 
                        alt="Arrow pointing to headline" 
                        className="object-contain h-[5rem] xl:mb-9.5 md:h-[7.5rem] md:w-[5.125rem]" 
                        /* 
                        - object-contain: keeps image aspect ratio
                        - h-[8.375rem]: 134px in rem
                        - w-[5.125rem]: 82px in rem
                        */
                    />


                    <div className='h-[4.75rem]  md:h-[7.5rem] xl:h-[8rem] md:mb-10'>
                        <h4 className="max-w-md md:max-w-xl xl:max-w-4xl font-bold text-center text-white text-4xl lg:text-left xl:text-4xl md:text-2xl md:pb-2">Purpose-Built
                            Automation.</h4>
                        <h4 className="max-w-md md:max-w-xl xl:max-w-4xl font-bold text-center text-white text-4xl lg:text-left xl:text-4xl md:text-2xl md:pb-10">Mission—Ready Solutions.</h4>
                        <p className="max-w-md md:max-w-160 text-center text-white md:text-left text-base xl:text-xl md:text-[1.25rem] mb-5">At Vega, we specialize in delivering
                            automation, AI, and technology solutions tailored to the realities of government missions. </p>
                        <p className="max-w-sm md:max-w-140 text-center text-white md:text-left text-base xl:text-xl md:text-[1.25rem]">We don’t just deploy software — we solve complex challenges with precision, empathy, and mission-first execution.</p>
                    </div>
                </div>
                    <div className='flex justify-center xl:max-w-2xl md:justify-start md:pl-30 pb-50 md:space-x-3 pt-60 md:pt-40  md:flex-row md:space-y-0 lg:pl-45'>
                        <a href={Slack_Sheet} download="Capabilities-Slack-Sheet.pdf">
                            <button className='px-7 py-3 lg:px-9 lg:py-4 xl:text-xl lg:text-1.5xl text-xl font-semibold text-white rounded-2xl bg-rose-500 hover:bg-red-600 hover:text-white'>
                                <img src={Slack_Icon} alt="PDF Icon" className="h-10 mr-2 inline" />
                                Download Capabilities Slack Sheet
                            </button>
                        </a>
                </div> 
            </div>
        </div>
    </section>

    <section class='bg-white min-h-fit h-dvh md:min-h-fit 2xl:h-fit sm:overflow-x-visable overflow-x-hidden '>
        <div class='flex flex-col lg:flex-row md:flex-col xl:flex-row  justify-items-center items-center px-4 pt-5 md:pb-20 md:px-[100px] lg:pt-30 xl:pt-40 '>
            <img src={myImage2} alt='' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px]   2xl:ml-[100px] "/> 
            <div class='md:mb-0 xl:mb-15 lg:ml-5 2xl:ml-[10rem]'>
                <h1 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Geospatial Application Development</h1>
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
                <h1 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Mobile Application Development</h1>
                <h3 class='text-2xl md:text-3xl text-secondary ml-5  md:pt-5 pt-5'>Mobile. Performance. Security.</h3>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Vega crafts mobile applications that deliver high performance in the field or at headquarters.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>From concept through deployment, our team builds custom mobile tools that align to your mission objectives and operational realities.</p>
                <ul>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Full lifecycle development — design to sustainment.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Secure, high-performance apps tailored to your mission.</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>App Store support, optimization, and compliance.</li>
                </ul>
            </div>
            <img src={myImage3} alt='' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] 2xl:w-[400px] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] 2xl:ml-[100px]"/>
        </div>
    </section>

    <section class=' bg-white min-h-fit h-dvh md:min-h-fit 2xl:h-fit sm:overflow-x-visable overflow-x-hidden'>
        <div class='flex flex-col lg:flex-row xl:flex-row md:flex-col  items-center px-4 pt-5  md:pb-20 md:pt-10 md:px-[100px] lg:pt-20 xl:pt-30'>
            <img src={myImage4} alt='' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] md:ml-15 lg:ml-[0rem] 2xl:ml-[100px] "/>
            <div class='md:mb-0 xl:mb-15 lg:ml-10 2xl:ml-[10rem]'>
                <h1 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Business Process Automation (BPA)</h1>
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
                <h1 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Platform & Enterprise Services</h1>
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
            <img src={myImage5} alt='' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] 2xl:w-[400px] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] 2xl:ml-[100px] "/>
        </div>
    </section>  

    <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
                                    /* make the section full‑viewport height */
        ">
        <div class='flex items-center '>
            <div class='flex flex-col items-baseline justify-items-center gap-5 md:gap-15 ml-15 md:ml-30 lg:ml-[12rem] pt-16 pb-16 mr-[10px]'>
                <h1 class='text-2xl md:text-[48px] text-primary font-bold  pt-20 md:pt-0'>Our Approach</h1>
                <h3 class='text-3xl md:text-[40px] text-secondary '>Vega doesn’t just automate—we adapt, optimize, and integrate.</h3>
                <p class='text-xl md:text-[24px] text-primary mt-[15px]'>With deep roots in government acquisition and mission readiness, we tailor every solution to the unique environment of our customers. </p>
                <p class='text-xl md:text-[24px] text-primary mt-[15px]'>We understand the responsibility behind every task, every dollar, and every decision.</p>
                <p class='text-xl md:text-[24px] text-primary mt-[15px]'>“Mission success isn’t optional — it’s expected. So is our commitment.”</p>
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
               <div class='flex flex-col items-left gap-15 ml-15 md:ml-30 2xl:ml-[500px] mr-[10px]'>
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
    );
}

export default Capabilities