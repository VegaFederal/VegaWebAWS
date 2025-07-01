import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import { FaDropbox } from 'react-icons/fa';



const Careers_Main = () => {
    return(
        <>
        <section className='careers_main'>
        <div
        className="
            bg-[url('./assets/Capabilities_Banner.jpg')]   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            h-svh        /* make the section full‑viewport height */
            z-[-1]
        "
        >
        <header>
            <div>
                <Navbar color_career='text-secondary'/>
            </div>
        </header>
        {/* your content here */}   

       
            
        </div>
    </section>

    <section>
        <div
        className="
        bg-white
        bg-cover                        /* cover the entire area */
        bg-center                       /* center it */
        bg-no-repeat                    /* don’t tile it */
        h-screen                        /* make the section full‑viewport height */
        z-[-1]
        flex-col justify-items-center
        "
        >
        <div className=' flex-col justify-items-center bg-gray-600 w-[1400px] h-[500px] rounded-2xl'>
            <h1 className='text-white text-6xl'>Job One</h1>
            <p className='text-white text-3xl max-w-[1350px] mt-[50px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi, doloremque dolore perferendis est totam aperiam mollitia
                 quibusdam labore illo nemo tempore facere autem aliquam sapiente accusamus minus velit possimus!</p>
            <Link to='/careers_two'><button className='bg-white w-[200px] h-[100px] rounded-2xl mt-[100px] font-bold text-2xl text-black'>Apply</button></Link>
        </div>
        <div className='flex-col justify-items-center bg-gray-600 w-[1400px] h-[500px] rounded-2xl mt-[30px]'>
            <h1 className='text-white text-6xl'>Job Two</h1>
            <p className='text-white text-3xl max-w-[1350px] mt-[50px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi, doloremque dolore perferendis est totam aperiam mollitia 
                quibusdam labore illo nemo tempore facere autem aliquam sapiente accusamus minus velit possimus!</p>
            <Link to='/careers_two'><button className='bg-white w-[200px] h-[100px] rounded-2xl mt-[100px] font-bold text-2xl text-black'>Apply</button></Link>
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

export default Careers_Main