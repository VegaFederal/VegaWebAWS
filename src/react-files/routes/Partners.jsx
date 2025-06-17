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
            
            <h4 className='font-bold text-center text-white text-4xl md:text-left pb-[50px]'>Our Partners</h4>
            <div className='flex pt-[25px]'>    
                <img src={myImage} alt='' className=" object-contain h-[160px] w-[386px]"/> 
                <img src={myImage2} alt='' className=" object-contain h-[174px] w-[376px]"/>
            </div>
                
            <h4 className='font-bold text-center text-white text-4xl md:text-left pb-[50px]'>Our Customers</h4>
                    
            <div className='flex pt-[25px]'>     
                <img src={myImage4} alt='' className=" object-contain h-[196px] w-[196px]"/> 
                <img src={myImage3} alt='' className=" object-contain h-[207px] w-[207px]"/>
                <img src={myImage5} alt='' className=" object-contain h-[209px] w-[209px]"/>
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

export default Partners