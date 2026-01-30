import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
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
import robbie from '../assets/About_us/Robbie.png'
import joseph from '../assets/About_us/Joseph_K.png'
import RyanE from '../assets/About_us/Ryan_E.png'
import Jessica from '../assets/About_us/Jessica.png'
import Kyle from '../assets/About_us/Kyle.png'
import Brian from '../assets/About_us/Brian.png'
import vetNavy from '../assets/About_us/US_Navy.png' // Navy
import vetArmy from '../assets/About_us/US_Army.png' // Army
import SkipLink from '../components/SkipLink'

const About_Updated = () => {
    // Team member data - easy to add more people
    const teamMembers = [
        {
            id: 1,
            name: "Ryan",
            title: "Founder & CEO",
            image: ryan,
            veteranLogo: vetArmy,
            veteranLogoSize: null,
            details: [
                "Aquinas Mercy High School",
                "Inventing Dance Moves",
                "Winning"
            ] 
        },
        {
            id: 2,
            name: "Themba",
            title: "Co-Founder & Chief Growth Officer",
            image: themba,
            veteranLogo: vetNavy,
            veteranLogoSize: null,
            details: [
                "Stanley-Boyd High (WI)",
                "Cut flower farming",
                "Complex, impossible challenges, especially government bureaucracy."
            ]
        },
        {
            id: 3,
            name: "Mark",
            title: "Director of Cloud Engineering",
            image: mark,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "Pike Central (Petersburg IN)",
                "Coaching Athletes",
                "Steak & Eggs"
            ]
        },
        {
            id: 4,
            name: "Chris",
            title: "Director of Defense Health",
            image: chris,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "Boone High in Boone, IA",
                "Keeping plants alive(sort of).",
                "Coffee, lots of Coffee"
            ]
        },
        {
            id: 5,
            name: "Krista",
            title: "Operations Leader",
            image: krista,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "Parkway South High School",
                "I am really great at putting together a costume",
                "Regular Coca Cola"
            ]
        },
        {
            id: 6,
            name: "Jessica",
            title: "Director of Recruitment",
            image: Jessica,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "Parkway Central High School",
                "Writing",
                "I try to spend my days helping others"
            ]
        },
        {
            id: 7,
            name: "Dan",
            title: "Senior Software Engineer",
            image: dan,
            veteranLogo: vetArmy,
            veteranLogoSize: null,
            details: [
                "Rosary High School",
                "DIY games",
                "Sleep and a fun problem"
            ]
        },
        {
            id: 8,
            name: "Ryan E.",
            title: "Senior Software Engineer",
            image: RyanE,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "Christian Brothers College HS (CBC)",
                "Trail running",
                "Coffee"
            ]
        },
        {
            id: 6,
            name: "Katy",
            title: "Senior UX Designer",
            image: katy,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "The Principia HS",
                "Professional abstract painter",
                "Organic \"Fizz\" Energy Drink"
            ]
        },
        {
            id: 9,
            name: "Joseph K.",
            title: "Software Engineer",
            image: joseph,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "",
                "",
                ""
            ]
        },
        {
            id: 11,
            name: "Owen",
            title: "Software Engineer",
            image: owen,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "Valley Park High School",
                "I am a massive fan of Chess (playing for 18 years!)",
                "A healthy mix between solving interesting problems & Pure Leaf's sweet tea!"
            ]
        },
        {
            id: 12,
            name: "Blas",
            title: "Software Engineer",
            image: blas,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "The Fulton School",
                "Soccer",
                "Completing projects"
            ]
        },
        {
            id: 13,
            name: "Robbie",
            title: "Intern Engineer",
            image: robbie,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "Home school",
                "Learning board games",
                "Doing something that is interesting"
            ]
        },
        {
            id: 14,
            name: "Kyle",
            title: "Senior Geospatial Data Engineer",
            image: Kyle,
            veteranLogo: vetArmy,
            veteranLogoSize: null,
            details: [
                "A Catholic school in southern Louisiana",
                "I have been a clarinetist for nearly 15 years.",
                "Celsius, Monster, Alani, and Crunchwraps"
            ]
        },
        {
            id: 15,
            name: "Brian",
            title: "Director, Solutions Architecture & Delivery",
            image: Brian,
            veteranLogo: null,
            veteranLogoSize: null,
            details: [
                "Lexington High School in Lexington, MA.",
                "I'm surprisingly good at \"la erre vibrante\".",
                "Double espresso with oat milk."
            ]
        }
    ];

    return(
        <>
        <SkipLink />
            <section className='about_concept'>
                <div className='
                    bg-primary
                    bg-cover
                    bg-center
                    bg-no-repeat
                    h-fit
                    z-[-1]
                '>
                    <header>
                        <div>
                            <Navbar color_about="text-secondary"/>
                        </div>
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

                        {/* Responsive Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-24 mb-[100px] px-4 max-w-8xl'>
                            {teamMembers.map((member) => (
                                <div key={member.id} className='flex flex-col items-center'>
                                    {/* Image with veteran logo overlay */}
                                    <div className='relative mb-6'>
                                        <img 
                                            src={member.image} 
                                            alt={member.name} 
                                            className='w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[377px] lg:h-[377px] object-cover'
                                        />
                                        {member.veteranLogo && (
                                            <img 
                                                src={member.veteranLogo} 
                                                alt={`${member.name} veteran logo`} 
                                                className={`absolute top-[5px] right-[5px] ${member.veteranLogoSize}`}
                                            />
                                        )}
                                    </div>
                                    
                                    {/* Name */}
                                    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center'>
                                        {member.name}
                                    </h1>
                                    
                                    {/* Title */}
                                    <h3 className='text-secondary text-xl md:text-2xl lg:text-3xl mb-6 text-center'>
                                        {member.title}
                                    </h3>
                                    
                                    {/* Details */}
                                    <ul className='flex flex-col items-center space-y-2'>
                                        {member.details.map((detail, index) => (
                                            <li key={index} className='text-white text-lg md:text-xl text-center max-w-[300px]'>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section classname='sm:overflow-x-visible overflow-x-hidden'>
                <Footer></Footer>
            </section>

        </>
    )
}

export default About_Updated
