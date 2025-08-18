import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import stlSkyline from '../assets/Footer Stl Skyline Banner.jpg';
import spotify from '../assets/About_us/Spotify_logo.png'
import army from '../assets/About_us/Army_logo.png'
import navy from '../assets/About_us/Navy_logo.png'
import ryan from '../assets/About_us/Ryan.png'
import themba from '../assets/About_us/Themba.png'
import brent from '../assets/About_us/Brent.png'
import dan from '../assets/About_us/Dan.png'
import blas from '../assets/About_us/Blas.png'
import katy from '../assets/About_us/Katy.png'
import krista from '../assets/About_us/Krista.png'
import chris from '../assets/About_us/Chris.png'
import mark from '../assets/About_us/Mark.png'
import owen from '../assets/About_us/Owen.png'


const About_concept = () => {
    return(
        <>
            <section className='about_concept'>
                <div
                className='
                    bg-primary
                    bg-cover
                    bg-center
                    bg-no-repeat
                     h-fit
                    z-[-1]
                '
                >
                    <header>
                        <div>
                            <Navbar color_about="text-secondary"/>
                        </div>
                    </header>
                    <div className='flex-col items-center'>
                        <div className='flex justify-center mb-[100px]'>
                            <img src={ryan} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={themba} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={brent} alt='' className='w-[377px] h-[377px]'></img>
                        </div>
                        <div className='flex justify-center mb-[100px]'>
                            <img src={dan} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={blas} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={katy} alt='' className='w-[377px] h-[377px]'></img>
                        </div>
                        <div className='flex justify-center mb-[100px]'>
                            <img src={krista} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={chris} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={mark} alt='' className='w-[377px] h-[377px]'></img>
                        </div>
                        <div className='flex justify-center'>
                            <img src={owen} alt='' className='w-[377px] h-[377px]'></img>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About_concept