import Navbar from '../components/Navbar'
import Arrow from '../assets/Arrow_Hero.png';
import ThembaHHeadshot from '../assets/OurStory_ThembaHeadshot.jpg'
import RyanPHeadshot from '../assets/OurStory_RPhilipHeadshot.jpg'
import Footer from '../components/Footer';
import SkipLink from '../components/SkipLink'


const Our_Story = () => {
    return (
        <>
        <SkipLink />
        {/* Skip link as first element */}
        <section className="">
            <div className="overflow-hidden h-screen bg-primary">
                <header className=''>
                        <Navbar color_story='text-secondary'/>
                    </header>
                <div className="md:absolute md:top-0 h-screen md:left-0 md:w-full flex flex-col bg-[url('./assets/stlarch.jpg')] bg-cover bg-no-repeat">
                    
                    <div className="flex items-start pl-5 md:gap-3 xl:gap-5 lg:pl-[2rem] xl:pl-[5rem] mt-55">
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

                        <div id="after-navbar" tabIndex={-1} className='h-[7.5rem] ml-5'>
                            <h4 className="font-bold text-white text-left text-4xl pb-2">Our Story</h4>
                            <p className="max-w-xl text-white text-left text-2xl">Born inside the mission. Built to serve it better.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="
            bg-white   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            py-16                        /* make the section full‑viewport height */
            sm:overflow-x-visable overflow-x-hidden
        ">
            <div className='flex justify-center'>
                <div className="flex  flex-col items-center max-w-70/100 mx-auto text-left space-y-8 px-4 pt-20">
                <h2 className=' text-primary text-5xl lg:text-[52px] font-bold'>The Founders</h2>
                <div className='flex flex-col xl:flex-row items-center gap-30'>
                    <img src={RyanPHeadshot} alt='Headshot of Ryan Phillips' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem]  2xl:h-[316px] 2xl:w-[473px] 2xl:ml-[100px] 2xl:mt-[120px]"/>
                    <div className='flex flex-col'>
                        <h3 className='text-2xl md:text-3xl text-secondary md:pt-5 pt-5 font-bold'>Ryan Phillips</h3>
                        <p className='text-xl md:text-[24px] text-primary mt-[50px] font-bold'>Co-Founder | Veteran | Technologist | Mission Partner</p>
                        <p className='text-xl md:text-[24px] text-primary mt-[50px]'>Ryan brings more than 20 years of experience to Vega, with a career spanning military operations, software engineering, and leadership roles inside NGA. Recognized with the David Packard Excellence in Acquisition Award, Ryan pairs technical depth with an operator’s mindset.</p>
                        <p className='text-xl md:text-[24px] text-primary mt-[50px]'>At Vega, he helps customers navigate the complex realities of modernization without compromising mission focus.</p>
                    </div>
                </div>
                <div className='flex flex-col xl:flex-row-reverse items-center gap-30 mt-20'>
                    <img src={ThembaHHeadshot} alt='Headshot of Themba Hinke' className="object-contain w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem]  2xl:h-[316px] 2xl:w-[473px] 2xl:ml-[100px] 2xl:mt-[120px]"/>
                    <div className='flex flex-col pb-30'>
                        <h3 className='text-2xl md:text-3xl text-secondary md:pt-5 pt-5 font-bold'>Themba Hinke</h3>
                        <p className='text-xl md:text-[24px] text-primary mt-[50px] font-bold'>Co-Founder | Systems Architect | Trusted Government Partner</p>
                        <p className='text-xl md:text-[24px] text-primary mt-[50px]'>Themba is a seasoned technical leader with two decades of experience delivering mission-critical systems to the Department of Defense and Intelligence Community. His expertise in platform engineering, modernization, and secure system design has made him a trusted advisor to senior government leaders.</p>
                        <p className='text-xl md:text-[24px] text-primary mt-[50px]'>At Vega, Themba ensures that every solution meets the highest technical and mission-readiness standards.</p>
                        <p className='text-xl md:text-[24px] text-primary mt-[50px] font-bold'>“We didn’t start Vega to be just another contractor. We started it because we knew there was a better way — one rooted in mission, not margins.”</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="
            bg-[url('./assets/OurStory_VegaStarImage.jpg')]   /* ← your image */
            bg-cover                        /* cover the entire area */
            bg-center                       /* center it */
            bg-no-repeat                    /* don’t tile it */
            h-screen
            md:h-auto                       /* make the section full‑viewport height */
            z-[-1]
            sm:overflow-x-visable overflow-x-hidden
        ">
            <div className='flex flex-col md:flex-row md:items-center justify-center min-h-screen ml-5 md:ml-[50px] lg:ml-[8rem] gap-10 md:gap-50 px-4 '>
                <div className="max-w-70/100 mx-auto text-left space-y-8 px-4">
                    <h2 className=' text-white text-3xl lg:text-[52px] font-bold'>
                        Why Vega?
                    </h2>
                    <h3 className='text-2xl md:text-3xl text-secondary md:pt-5 pt-5'>
                    The name Vega wasn’t an accident.
                    </h3>
                    <p className='text-xl md:text-[28px] text-white'>
                        Vega, the <span className='font-bold'>fifth-brightest star </span> in the night sky, has served as a guiding light for centuries. In the coming millennia, it will become the North Star, once again leading navigators and explorers.                    </p>
                    <p className='text-xl md:text-[24px] text-white mt-[50px]'>
                    Vega reflects this spirit.
                    </p>
                    <p className='text-xl md:text-[24px] text-white mt-[30px]'>
                    A trusted partner.
                    </p>
                    <p className='text-xl md:text-[24px] text-white mt-[30px]'>
                    A fixed point.
                    </p>
                    <p className='text-xl md:text-[24px] text-white mt-[30px]'>
                    A guide through the evolving landscape of defense and intelligence automation.
                    </p>
                    <p className='text-xl md:text-[24px] text-white mt-[30px]'>
                    We don’t just work for the mission — we’ve lived it.                    
                    </p>
                </div>
            </div>
        </section>
        
            
                <section classname='sm:overflow-x-visible overflow-x-hidden'>
                    <Footer></Footer>
                </section>
        </>
        
    )
}

export default Our_Story;
