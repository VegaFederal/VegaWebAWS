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
import map from '../assets/About_us/map.png'


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
                        <div className='flex justify-center mb-[50px]'>
                            <h1 className='text-white text-5xl font-bold'>Our Team</h1>
                        </div>
                        <div className='flex flex-col items-center mb-[80px]'>
                            <h3 className='text-white text-3xl font-bold'>Answers to these questions are below: </h3>
                            <p className='text-white text-2xl'>Where did you go to High School? (the “quintessential” STL question)</p>
                            <p className='text-white text-2xl'>What's something you are surprisingly good at that has nothing to do with tech?</p>
                            <p className='text-white text-2xl'>Wnat’s the coolest thing you’ve automated in your personal life?</p>
                        </div>
                        <div className='flex justify-center mb-[40px]'>
                            <img src={ryan} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={themba} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={brent} alt='' className='w-[377px] h-[377px]'></img>
                        </div>
                        <div className='flex justify-center mb-[20px]'>
                            <h1 className='text-white text-5xl font-bold mr-[320px]'>Ryan</h1>
                            <h1 className='text-white text-5xl font-bold mr-[320px]'>Themba</h1>
                            <h1 className='text-white text-5xl font-bold'>Brent</h1>
                        </div>
                        <div className='flex justify-center mb-[20px]'>
                            <h3 className='text-secondary text-3xl mr-[150px]'>Co-Founder & Co-Owner</h3>
                            <h3 className='text-secondary text-3xl mr-[150px]'>Co-Founder & Co-Owner</h3>
                            <h3 className='text-secondary text-3xl'>Senior Software Engineer</h3>
                        </div>
                        <div className='flex justify-center mb-[100px]'>
                            <ul className='flex flex-col items-center mr-[250px]'>
                                <li className='text-white text-xl'> Point One </li>
                                <li className='text-white text-xl'> Point Two </li>
                                <li className='text-white text-xl'> Point Three </li>
                            </ul>
                            <ul className='flex flex-col items-center mr-[250px]'>
                                <li className='text-white text-xl'>Stanley-Boyd High (WI)</li>
                                <li className='text-white text-xl'> Cut flower farming </li>
                                <li className='text-white text-xl max-w-100 text-center'> Complex, impossible challenges, especially government bureaucracy. </li>
                            </ul>
                            <ul className='flex flex-col items-center'>
                                <li className='text-white text-xl'> Point One </li>
                                <li className='text-white text-xl'> Point Two </li>
                                <li className='text-white text-xl'> Point Three </li>
                            </ul>
                        </div>
                        <div className='flex justify-center mb-[40px]'>
                            <img src={dan} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={blas} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={katy} alt='' className='w-[377px] h-[377px]'></img>
                        </div>
                        <div className='flex justify-center mb-[20px]'>
                            <h1 className='text-white text-5xl font-bold mr-[390px]'>Dan</h1>
                            <h1 className='text-white text-5xl font-bold mr-[390px]'>Blas</h1>
                            <h1 className='text-white text-5xl font-bold'>Katy</h1>
                        </div>
                        <div className='flex justify-center mb-[20px]'>
                            <h3 className='text-secondary text-3xl mr-[200px]'>Senior Software Engineer</h3>
                            <h3 className='text-secondary text-3xl mr-[250px]'>Software Engineer</h3>
                            <h3 className='text-secondary text-3xl pr-[20px]'>Senior UX Designer</h3>
                        </div>
                        <div className='flex justify-center mb-[100px]'>
                            <ul className='flex flex-col items-center mr-[400px]'>
                                <li className='text-white text-xl'> Point One </li>
                                <li className='text-white text-xl'> Point Two </li>
                                <li className='text-white text-xl'> Point Three </li>
                            </ul>
                            <ul className='flex flex-col items-center mr-[400px]'>
                                <li className='text-white text-xl'> Point One </li>
                                <li className='text-white text-xl'> Point Two </li>
                                <li className='text-white text-xl'> Point Three </li>
                            </ul>
                            <ul className='flex flex-col items-center'>
                                <li className='text-white text-xl'> Point One </li>
                                <li className='text-white text-xl'> Point Two </li>
                                <li className='text-white text-xl'> Point Three </li>
                            </ul>
                        </div>
                        <div className='flex justify-center mb-[40px]'>
                            <img src={krista} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={chris} alt='' className='w-[377px] h-[377px] mr-[100px]'></img>
                            <img src={mark} alt='' className='w-[377px] h-[377px]'></img>
                        </div>
                        <div className='flex justify-center mb-[20px]'>
                            <h1 className='text-white text-5xl font-bold mr-[360px]'>Krista</h1>
                            <h1 className='text-white text-5xl font-bold mr-[360px]'>Chris</h1>
                            <h1 className='text-white text-5xl font-bold'>Mark</h1>
                        </div>
                        <div className='flex justify-center mb-[20px]'>
                            <h3 className='text-secondary text-3xl mr-[200px] pl-[70px]'>Operations Leader</h3>
                            <h3 className='text-secondary text-3xl mr-[140px]'>Director of Defense Health</h3>
                            <h3 className='text-secondary text-3xl'>Chief Technology Officer</h3>
                        </div>
                        <div className='flex justify-center mb-[100px]'>
                            <ul className='flex flex-col items-center mr-[400px]'>
                                <li className='text-white text-xl'> Point One </li>
                                <li className='text-white text-xl'> Point Two </li>
                                <li className='text-white text-xl'> Point Three </li>
                            </ul>
                            <ul className='flex flex-col items-center mr-[400px]'>
                                <li className='text-white text-xl'> Point One </li>
                                <li className='text-white text-xl'> Point Two </li>
                                <li className='text-white text-xl'> Point Three </li>
                            </ul>
                            <ul className='flex flex-col items-center'>
                                <li className='text-white text-xl'> Point One </li>
                                <li className='text-white text-xl'> Point Two </li>
                                <li className='text-white text-xl'> Point Three </li>
                            </ul>
                        </div>
                        <div className='flex justify-center mb-[40px]'>
                            <img src={owen} alt='' className='w-[377px] h-[377px]'></img>
                        </div>
                        <div className='flex justify-center mb-[20px]'>
                            <h1 className='text-white text-5xl font-bold'>Owen</h1>
                        </div>
                        <div className='flex justify-center mb-[20px]'>
                            <h3 className='text-secondary text-3xl'>Software Engineer</h3>
                        </div>
                        <div className='flex justify-center pb-[200px]'>
                            <ul className='flex flex-col items-center'>
                                <li className='text-white text-xl'> Point One </li>
                                <li className='text-white text-xl'> Point Two </li>
                                <li className='text-white text-xl'> Point Three </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            <section className='
                    bg-primary
                    bg-cover
                    bg-center
                    bg-no-repeat
                     h-fit
                    z-[-1]'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-white text-5xl font-bold mb-[100px]'>
                                What's our favorite vacation spot?
                            </h1>
                            <img src={map} alt='' className='h-screen w-screen'></img>
                        </div>
                    </section>
        </>
    )
}

export default About_concept