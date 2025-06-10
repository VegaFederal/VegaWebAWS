
import Navbar from '../components/Navbar'
import myImage from '../assets/Arrow_Hero.png';
import myImage2 from '../assets/Capabilities_GeoAppDev.jpg';
import myImage3 from '../assets/Capabilities_MobileAppDev.jpg';
import myImage4 from '../assets/Capabilities_BPA.png';
import myImage5 from '../assets/Capabilities_PlatformEnt.jpg';
import myImage6 from '../assets/PDF_Download_Icon.png';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import './HomeStyles.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Capabilities = () => {
    return(
    <>
    <section className='capabilities'>
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
                <Navbar color_Capabilities='text-secondary'/>
            </div>
        </header>
        {/* your content here */}

        <div className='flex items-end h-132 gap-5 ml-5'>
            <img src={myImage} alt='' className=" object-contain h-[134px] w-[82px]"/>
                <div className='flex-col'>
                    <h4 className='font-bold text-center text-white text-4xl md:text-left pb-5'>Purpose-Built Automation. Mission—Ready Solutions.</h4>
                    <p className='max-w-x tracking-wide text-center text-white md:text-left text-[24px]'>At Vega, we specialize in delivering automation, AI, and technology solutions tailored to the realities of government missions.</p>
                    <p className='max-w-x tracking-wide text-center text-white md:text-left text-[24px] pt-[40px]'>We don’t just deploy software — we solve complex challenges with precision, empathy, and mission-first execution.</p>
                </div>
        </div>
        <div className='flex flex-col pt-5 space-y-10 md:space-x-10 ml-40 mt-30 md:flex-row md:space-y-0'>
            <Link to='/contact'><button className='px-9 py-5 text-2xl font-semibold text-white rounded-2xl bg-red-500 hover:bg-red-700 hover:text-white'>Let's Talk</button></Link>
            <Link to='/pdf'><button className="text-white text-xl font-bold ml-[1100px] hover:text-red-500 h-[75px] w-[265px]"><img src={myImage6} alt='' className=" object-contain h-[60px] w-[72px]"/>Download Capabilities "Slick" Sheet</button></Link>
        </div> 
        </div>
    </section>

    <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
                                    /* make the section full‑viewport height */
        ">
        <div class='flex items-center h-screen'>
            <img src={myImage2} alt='' className="object-contain h-[236px] w-[422px] ml-[78px] mb-[450px]"/>
            <div class='flex-col mb-[120px]'>
                <h1 class='text-[48px] font-bold ml-[165px] pt-[70px]'>Geospatial Application Development</h1>
                <h3 class='text-[40px] text-rose-600 ml-[165px] pt-[70px]'>Delivering Insights Through Location.</h3>
                <p class='max-w-[778px] ml-[165px] text-slate-900 text-[24px] pt-[70px]'>We build geospatial applications and data services that support critical missions across the National System for Geospatial-Intelligence (NSG) and beyond.</p>
                <p class='max-w-[778px] ml-[165px] text-slate-900 text-[24px] pt-5'>From scalable platforms to targeted data solutions, Vega helps operators analyze, interpret, and act on complex geospatial data — seamlessly integrated into existing mission environments.</p>
                <ul>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-5'>√  Mission-enabling and mission-critical geospatial capabilities.</li>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-5'>√  Custom-built applications and data services.</li>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-5'>√  Designed for multi-domain, multi-platform environments.</li>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-5'>√  Enabling smarter decisions and operational advantage.</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="
            bg-gray-100   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
                                    /* make the section full‑viewport height */
        ">
        <div class='flex items-center h-screen'>
            <div class='flex-col mb-[120px]'>
                <h1 class='text-[48px] font-bold ml-[165px] pt-[70px]'>Mobile Application Development</h1>
                <h3 class='text-[40px] text-rose-600 ml-[165px] pt-[70px]'>Mobile. Performance. Security.</h3>
                <p class='max-w-[656px] ml-[165px] text-slate-900 text-[24px] pt-[50px]'>Vega crafts mobile applications that deliver high performance in the field or at headquarters.</p>
                <p class='max-w-[656px] ml-[165px] text-slate-900 text-[24px] pt-[50px]'>From concept through deployment, our team builds custom mobile tools that align to your mission objectives and operational realities.</p>
                <ul>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-[50px]'>√  Full lifecycle development — design to sustainment.</li>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-5'>√  Secure, high-performance apps tailored to your mission.</li>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-5'>√  App Store support, optimization, and compliance.</li>
                </ul>
            </div>
            <img src={myImage3} alt='' className="object-contain h-[368px] w-[458px] ml-[400px] mb-[300px]"/>
        </div>
    </section>

<section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
                                    /* make the section full‑viewport height */
        ">
        <div class='flex items-center h-screen'>
            <img src={myImage4} alt='' className="object-contain h-[272px] w-[399px] ml-[78px] mb-[450px]"/>
            <div class='flex-col mb-[120px]'>
                <h1 class='text-[48px] font-bold ml-[165px] pt-[70px]'>Business Process Automation (BPA)</h1>
                <h3 class='text-[40px] text-rose-600 ml-[165px] pt-[70px]'>Automation. That Works Where You Do.</h3>
                <p class='max-w-[650px] ml-[165px] text-slate-900 text-[24px] pt-[70px]'>We design and implement business process automation tools that simplify complex workflows, eliminate manual tasks, and enable operators to focus on what matters most — the mission.</p> 
                <ul class='pt[70px]'>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-[70px]'>√   Streamlined workflows across departments.</li>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-5'>√   Reduced repetitive tasks and operational friction.</li>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-5'>√   Integration of disconnected systems for seamless operations.</li>
                    <li class='ml-[165px] text-slate-900 text-[24px] pt-5'>√   Built for reliability, accuracy, and measurable impact.</li>
                </ul>
            </div>
        </div>
    </section>  

    <section class="
            bg-gray-100   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
                                    /* make the section full‑viewport height */
        ">
        <div class='flex items-center h-screen'>
            <div class='flex-col mb-[150px]'>
                <h1 class='text-[48px] font-bold ml-[165px] pt-[70px]'>Platform & Enterprise Services</h1>
                <h3 class='text-[40px] text-rose-600 ml-[165px] pt-[70px]'>Optimizing Infrastructure. Enabling Scale.</h3>
                <p class='max-w-[717px] text-[24px] text-slate-900 ml-[165px] pt-[50px]'>Vega delivers resilient platforms and enterprise services that meet mission demands while respecting government realities.</p>
                <p class='max-w-[717px] text-[24px] text-slate-900 ml-[165px] pt-[50px]'>We specialize in hybrid-cloud, on-premise, and secure environments, optimizing your infrastructure without disrupting operations.</p>
                <ul>
                    <li class='text-[24px] text-slate-900 ml-[165px] pt-[70px]'>√   Hybrid-cloud integration & optimization.</li>
                    <li class='text-[24px] text-slate-900 ml-[165px] pt-5'>√   Enterprise-grade application deployment & sustainment.</li>
                    <li class='text-[24px] text-slate-900 ml-[165px] pt-5'>√   Infrastructure management, monitoring, and optimization.</li>
                    <li class='text-[24px] text-slate-900 ml-[165px] pt-5'>√   Designed to reduce downtime and enhance mission flexibility.</li>
                </ul>
            </div>
            <img src={myImage5} alt='' className="object-contain h-[250px] w-[460px] ml-[400px] mb-[550px]"/>
        </div>
    </section>  

    <section class="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
                                    /* make the section full‑viewport height */
        ">
        <div class='flex items-center h-screen'>
            <div class='flex-col mb-[450px]'>
                <h1 class='text-[48px] font-bold ml-[165px] pt-[70px]'>Our Approuch</h1>
                <h3 class='text-[40px] text-rose-600 ml-[165px] pt-[50px]'>Vega doesn’t just automate—we adapt, optimize, and integrate.</h3>
                <p class='text-[24px] text-slate-900 ml-[165px] pt-[70px]'>With deep roots in government acquisition and mission readiness, we tailor every solution to the unique environment of our customers. </p>
                <p class='text-[24px] text-slate-900 ml-[165px] pt-[30px]'> We understand the responsibility behind every task, every dollar, and every decision.</p>
                <p class='text-[35px] font-bold text-slate-900 ml-[165px] pt-[70px]'>“Mission success isn’t optional — it’s expected. So is our commitment.”</p>
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
                    <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Former government civilians — not career consultants.</li>
                    <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>Deep knowledge of acquisition, readiness, and warfighter needs.</li>
                    <li class='text-white text-[24px] mb-[24px] ml-[-35px]'>We don’t pitch trendy tech.</li>
                    <li class='text-white text-[24px] ml-[-35px]'>We deliver effective, tested solutions.</li>
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

export default Capabilities