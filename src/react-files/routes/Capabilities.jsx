
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
import Slick_Icon from '../assets/White_Slack_Icon.png'
import Slick_Sheet from '../assets/Vega Slick Sheet.pdf'
import SkipLink from '../components/SkipLink'

const Capabilities = () => {
    return(
    <>
    <SkipLink />
    <section className='capabilities'>
        <div className="relative w-full hero-lg-aspect md:h-screen md:overflow-y-hidden overflow-y-visible md:overflow-x-visable overflow-x-hidden">
            <div className=" md:absolute md:top-0 md:left-0 md:w-full h-screen xl:h-full flex flex-col bg-[url('./assets/earthlite.jpg')] bg-cover bg-center bg-no-repeat">
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
                        <a href={Slick_Sheet} download="Capabilities-Slick-Sheet.pdf">
                            <button className='px-7 py-3 lg:px-9 lg:py-4 xl:text-xl lg:text-1.5xl text-xl font-semibold text-white rounded-2xl bg-rose-500 hover:bg-red-600 hover:text-white'>
                                <img src={Slick_Icon} alt="" className="h-10 mr-2 inline" />
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
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Automation, Application Integration & Machine Learning</h2>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>At Vega, we believe automation is the key to accelerating federal missions. By reducing manual effort, improving accuracy, and connecting the right data to the right people, our solutions let operators focus on what matters most. We integrate applications, workflows, and analytics seamlessly, combining thoughtful engineering with practical automation to enable faster, better-informed decisions.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Capabilities include:</span></p>
                <ul>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Workflow automation tailored to mission processes</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Application integration across secure, highly regulated environments</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Machine learning pipelines that turn complex data into actionable insights</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Test automation that improves reliability and reduces repetitive work</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Data visualization and dashboards for intuitive, actionable information</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>User-centered analytics and mission-specific operational insights</li>
                </ul>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Mission Impact:</span> Agencies operate with greater speed, accuracy, and confidence, leveraging automation to deliver mission-critical outcomes faster and more reliably.</p>
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
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Cloud, DevOps & DevSecOps Modernization</h2>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Vega modernizes federal IT environments with a practical, mission-focused approach. We help agencies move to secure, scalable cloud architectures without adding complexity, enabling faster delivery and stronger operational resilience.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Capabilities include:</span></p>
                <ul>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Infrastructure as Code (Ansible, Terraform, CloudFormation, ARM, CDK)</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Multi-cloud engineering (AWS, Azure, Google Cloud, IBM, Oracle, OpenStack)</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>CI/CD pipelines to streamline delivery and reduce manual effort</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>DevSecOps pipelines with security built in from the start</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Containerization and orchestration on modern platforms</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Monitoring, logging, and automated system health checks</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Configuration management for consistent environments</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Secure, reliable application deployment and scaling</li>
                </ul>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Mission Impact:</span> Modernized legacy systems, reduced operational risk, and faster delivery of critical capabilities — all with solutions built to last.</p>
            </div>
            <img src={myImage3} alt='A helmeted figure in a dark, high-tech environment uses a smartphone amid glowing holographic screens and digital maps.' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] 2xl:ml-[100px]"/>
        </div>
    </section>

    <section class=' bg-white min-h-fit h-dvh md:min-h-fit 2xl:h-fit sm:overflow-x-visable overflow-x-hidden'>
        <div class='flex flex-col lg:flex-row xl:flex-row md:flex-col  items-center px-4 pt-5  md:pb-20 md:pt-10 md:px-[100px] lg:pt-20 xl:pt-30'>
            <img src={myImage4} alt='A sleek digital flowchart with interconnected nodes and labels glows in neon pink and blue.' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] md:ml-15 lg:ml-[0rem] 2xl:ml-[100px] "/>
            <div class='md:mb-0 xl:mb-15 lg:ml-10 2xl:ml-[10rem]'>
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Geospatial Engineering & Multi-Sensor Processing</h2>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Vega’s geospatial expertise is a differentiator, helping defense and intelligence partners turn complex sensor data into actionable insights for real-time operations.</p> 
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Capabilities include:</span></p>
                <ul>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Geospatial application development for mission workflows</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Modernization of legacy GEOINT systems for improved speed and usability</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Common Operating Picture (COP) development for shared situational awareness</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Mission-ready situational awareness tools</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Multi-sensor data processing: vector, raster, photogrammetry, LIDAR, RADAR</li>
                </ul>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Mission Impact:</span> Supports DoD, IC, and homeland defense by delivering clear, actionable intelligence and situational awareness.</p>
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
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>User Experience (UX) & Front-End Engineering</h2>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Vega ensures mission systems are intuitive, efficient, and operator-ready by combining UX research, human-centered design, and modern front-end engineering. These capabilities directly complement automation and integration initiatives, making workflows seamless.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Capabilities include:</span></p>
                <ul>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>UX research, workflow analysis, and human-centered design</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Modern UI design and component-based development</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Front-end engineering (React, Angular, Vue)</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Accessibility-compliant interfaces (Section 508 / WCAG)</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Responsive, mobile-ready UI development</li>
                    <li class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>Modernization of legacy operator tools and workflows</li>
                </ul>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Mission Impact:</span> Interfaces are intuitive, efficient, and built for real-world operational use — reducing friction and increasing mission effectiveness.</p>
            </div>
            <img src={myImage5} alt='A futuristic, neon-lit visualization shows layered digital platforms and interconnected data blocks floating in a high-tech network.' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] 2xl:h-[291px] 2xl:w-[523px] 2xl:ml-[100px] "/>
        </div>
    </section>  

    <section class='bg-white sm:overflow-x-visable overflow-x-hidden'>
        <div class='flex flex-col md:items-center xl:items-start items-center min-h-fit ml-5 md:ml-[50px] lg:pl-[2rem] px-4 pt-10 md:pt-20 md:pb-20'>
            <div class='md:mb-0 xl:mb-15 lg:ml-0 2xl:ml-[6rem] w-full'>
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Recent Federal Contracting Activity</h2>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Missile Defense Agency SHIELD IDIQ —</span> Major contract position, ceiling of $151B, enabling rapid delivery of innovative defense capabilities.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>UI/UX Modernization Initiatives —</span> Supporting federal programs with intuitive, mission-ready interfaces for operators.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'><span class='font-semibold'>Geospatial & Automation Projects —</span> Driving multi-sensor integration and workflow automation across intelligence and defense missions.</p>
            </div>
        </div>
    </section>

    <section class='bg-[#F2F2F7] sm:overflow-x-visable overflow-x-hidden'>
        <div class='flex flex-col md:items-center items-center min-h-fit ml-5 md:ml-[50px] lg:pl-[2rem] px-4 pt-10 md:pt-20 md:pb-20'>
            <div class='md:mb-0 xl:mb-15 lg:ml-0 2xl:ml-[6rem]'>
                <h2 class='text-2xl md:text-4xl font-bold ml-5  md:pt-0 pt-10'>Why Choose Vega?</h2>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5 font-semibold'>Because When the Mission Matters, Experience Matters.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5'>At Vega, we’ve walked in your shoes. We know the gravity behind every acquisition, every dollar, and every decision. That’s why we build solutions that work on day one—and keep working when the stakes are highest.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5 font-semibold'>Real Experience, Not Theory</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-2 pt-2'>Our team is made up of former government civilians—not career consultants. We understand the mission because we’ve lived it.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5 font-semibold'>Mission‑First Expertise</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-2 pt-2'>We bring deep knowledge of acquisition, readiness, and warfighter needs. We know what slows teams down—and what accelerates them.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5 font-semibold'>Proven, Practical Solutions</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-2 pt-2'>We don’t chase trends or pitch flashy tech. We deliver automation and engineering that are effective, tested, and built to last.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-5 pt-5 font-semibold'>A Partner Who Truly Understands</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-2 pt-2'>Because when the mission matters, you need more than a vendor.</p>
                <p class='ml-5  text-primary text-lg md:text-[24px] md:pt-2 pt-2'>You need a partner who understands the people, the pressure, and the purpose behind every requirement.</p>
            </div>
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