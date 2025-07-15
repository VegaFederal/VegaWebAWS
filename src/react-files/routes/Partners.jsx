import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import myImage from '../assets/Appian_logo.png'
import myImage2 from '../assets/Clarity_logo.png'
import myImage3 from '../assets/Gov_logo1.jpg'
import myImage4 from '../assets/Gov_logo2.png'
import myImage5 from '../assets/Navy_logo.png'



const Partners = () => {
    return(
        <>
        <section className='partners'>
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
                <Navbar color_partner='text-secondary'/>
            </div>
        </header>
            <div
        className="
        
        flex-col
        flex-wrap
        justify-items-center
        pt-[170px]

        "
        >
            
            <h4 className='font-bold text-center text-white text-4xl md:text-left mb-5'>Our Partners</h4>
            <div className='flex'>    
                <img src={myImage} alt='' className="object-contain h-20 w-30 md:h-50 md:w-20 lg:w-40 lg:mb-[120px] 2xl:w-80"/> 
                <img src={myImage2} alt='' className="object-contain h-20 w-30 md:h-50 md:w-20 lg:w-40 lg:mb-[120px] 2xl:w-80"/>
            </div>
                
            <h4 className='font-bold text-center text-white text-4xl md:text-left mb-5'>Our Customers</h4>
                    
            <div className='flex '>     
                <img src={myImage4} alt='' className="object-contain h-20 w-30 md:h-50 md:w-20 lg:w-40 lg:mb-[120px] 2xl:w-80"/> 
                <img src={myImage3} alt='' className="object-contain h-20 w-30 md:h-50 md:w-20 lg:w-40 lg:mb-[120px] 2xl:w-80"/>
                <img src={myImage5} alt='' className="object-contain h-20 w-30 md:h-50 md:w-20 lg:w-40 lg:mb-[120px] 2xl:w-80"/>
            </div>
        </div>
        
        {/* your content here */}         
        </div>
    </section>

    <section className='flex-col'>
        
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
        </section>
    </>
    )
}

export default Partners