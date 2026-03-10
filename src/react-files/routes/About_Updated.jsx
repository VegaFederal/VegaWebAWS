//import {
  //  TeamPageSection
//} from '../components/sections'
import TeamPageSection from '../components/sections/TeamPageSection';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import ryan from '../assets/About_us/Ryan.png'
import themba from '../assets/About_us/Themba.png'
import brent from '../assets/About_us/Brent.png'
import dan from '../assets/About_us/Dan.png'
import blas from '../assets/About_us/Blas.png'
import krista from '../assets/About_us/Krista.png'
import chris from '../assets/About_us/Chris.png'
import mark from '../assets/About_us/Mark.png'
import owen from '../assets/About_us/Owen.png'
import robbie from '../assets/About_us/Robbie.png'
import joseph from '../assets/About_us/Joseph_K.png'
import RyanE from '../assets/About_us/Ryan_E.png'
import Jessica from '../assets/About_us/Jessica.png'
import Kyle from '../assets/About_us/Kyle.png'
import Brian from '../assets/About_us/Brian.png'
import vetNavy from '../assets/About_us/US_Navy.png' // Navy
import vetArmy from '../assets/About_us/US_Army.png' // Army
import Nick from '../assets/About_us/Nick.png'
const About_Updated = () => {
    
    return(
        <>
            <section className='about_concept'>
                <div className='bg-primary bg-cover bg-center bg-no-repeat h-fit z-[-1]'>

                    <header>
                        <Navbar />
                    </header>

                    <div id="after-navbar" tabIndex={-1} className='flex flex-col items-center pt-30'>
                        {/* Header Section */}
                        <div className='flex justify-center mb-[50px] px-4'>
                            <h1 className='text-white text-3xl md:text-5xl font-bold text-center'>Our Team</h1>
                        </div>
                        
                        <div className='flex flex-col items-center mb-[80px] px-4'>
                            <h2 className='text-white text-xl md:text-3xl font-bold text-center'>Answers to these questions are below: </h2>
                            <p className='text-white text-base md:text-2xl text-center'>Where did you go to High School? (the "quintessential" STL question)</p>
                            <p className='text-white text-base md:text-2xl text-center'>What's something you are surprisingly good at that has nothing to do with tech?</p>
                            <p className='text-white text-base md:text-2xl text-center'>What is your productivity fuel?</p>
                        </div>
                    </div>
                    

                    

                    <TeamPageSection
                        id = {1}
                        image = {ryan}
                        veteranLogo = {vetArmy}
                        name = "Ryan"
                        title = "Founder & CEO"
                        answer1 = "Aquinas Mercy High School"
                        answer2 = "Inventing Dance Moves"
                        answer3 = "Winning"

                        id2 = {2}
                        image2 = {themba}
                        veteranLogo2 = {vetNavy}
                        name2 = "Themba"
                        title2 = "Co-Founder & Chief Growth Officer"
                        answer4 = "Stanley-Boyd High (WI)"
                        answer5 = "Cut flower farming"
                        answer6 = "Complex, impossible challenges, especially government bureaucracy."

                        id3 = {3}
                        image3 = {mark}
                        name3 = "Mark"
                        title3 = "Director of Cloud Engineering"
                        answer7 = "Pike Central (Petersburg IN)"
                        answer8 = "Coaching Athletes"
                        answer9 = "Steak & Eggs"

                        id4 = {4}
                        image4 = {chris}
                        name4 = "Chris"
                        title4 = "Director of Cloud Engineering"
                        answer10 = "Boone High in Boone, IA"
                        answer11 = "Keeping plants alive(sort of)."
                        answer12 = "Coffee, lots of Coffee"
                    />
                    <TeamPageSection
                        id = {1}
                        image = {krista}
                        name = "Krista"
                        title = "Operations Leader"
                        answer1 = "Parkway South High School"
                        answer2 = "I am really great at putting together a costume"
                        answer3 = "Regular Coca Cola"

                        id2 = {2}
                        image2 = {Jessica}
                        name2 = "Jessica"
                        title2 = "Director of Recruitment"
                        answer4 = "Parkway Central High School"
                        answer5 = "Writing"
                        answer6 = "I try to spend my days helping others"

                        id3 = {3}
                        image3 = {dan}
                        veteranLogo3 = {vetArmy}
                        name3 = "Dan"
                        title3 = "Senior Software Engineer"
                        answer7 = "Rosary High School"
                        answer8 = "DIY games"
                        answer9 = "Sleep and a fun problem"

                        id4 = {4}
                        image4 = {RyanE}
                        name4 = "Ryan E."
                        title4 = "Senior Software Engineer"
                        answer10 = "Christian Brothers College HS (CBC)"
                        answer11 = "Trail running"
                        answer12 = "Coffee"
                    />

                    <TeamPageSection
                        id = {1}
                        image = {joseph}
                        name = "Joseph K."
                        title = "Software Engineer"
                        answer1 = ""
                        answer2 = ""
                        answer3 = ""

                        id2 = {2}
                        image2 = {Nick}
                        name2 = "Nick"
                        title2 = "Software Engineer"
                        answer4 = "Moses lake High school, WS"
                        answer5 = "Whistling and jujitsu"
                        answer6 = "The ability to learn something new"

                        id3 = {3}
                        image3 = {blas}
                        name3 = "Blas"
                        title3 = "Software Engineer"
                        answer7 = "The Fulton School"
                        answer8 = "Soccer"
                        answer9 = "Completing projects"

                        id4 = {4}
                        image4 = {robbie}
                        name4 = "Robbie"
                        title4 = "Intern Engineer"
                        answer10 = "Home school"
                        answer11 = "Learning board games"
                        answer12 = "Doing something that is interesting"
                    />

                    <TeamPageSection
                        id = {1}
                        image = {Kyle}
                        veteranLogo = {vetArmy}
                        name = "Kyle"
                        title = "Senior Geospatial Data Engineer"
                        answer1 = "A Catholic school in southern Louisiana"
                        answer2 = "I have been a clarinetist for nearly 15 years."
                        answer3 = "Celsius, Monster, Alani, and Crunchwraps"

                        id2 = {2}
                        image2 = {Brian}
                        name2 = "Brian"
                        title2 = "Director, Solutions Architecture & Delivery"
                        answer4 = "Lexington High School in Lexington, MA."
                        answer5 = 'I am surprisingly good at "la erre vibrante".'
                        answer6 = "Double espresso with oat milk."
                    />

                    <section className="footer-section">
                        <Footer />
                    </section>
                </div>
            </section>
        </>
        
    )
}

export default About_Updated
