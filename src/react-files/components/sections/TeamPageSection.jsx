import './TeamPageSection.css'
import SkipLink from '../SkipLink'

/**
 * TwoColumnSection - Image and text side-by-side section
 * Uses grid layout for responsive two-column design
 * 
 * @param {number} id
 * @param {string} image - Image source URL
 * @param {string} name - The person's name
 * @param {string} title - The person's job title
 * @param {string} answer1
 * @param {string} answer2
 * @param {string} answer3 
 * @param {string} veteranLogo - Get whether or not the person needs the veteran logo
 * 
 * @param {number} id2
 * @param {string} image2 - Image source URL
 * @param {string} name2 - The person's name
 * @param {string} title2 - The person's job title
 * @param {string} answer4
 * @param {string} answer5
 * @param {string} answer6 
 * @param {string} veteranLogo2 - Get whether or not the person needs the veteran logo
 * 
 * @param {number} id3
 * @param {string} image3 - Image source URL
 * @param {string} name3 - The person's name
 * @param {string} title3 - The person's job title
 * @param {string} answer7
 * @param {string} answer8
 * @param {string} answer9 
 * @param {string} veteranLogo3 - Get whether or not the person needs the veteran logo
 * 
 * @param {number} id4
 * @param {string} image4 - Image source URL
 * @param {string} name4 - The person's name
 * @param {string} title4 - The person's job title
 * @param {string} answer10
 * @param {string} answer11
 * @param {string} answer12
 * @param {string} veteranLogo4 - Get whether or not the person needs the veteran logo
 */

const TeamPageSection = ({
    id,
    image,
    name = ' ',
    title = ' ',
    answer1 = ' ',
    answer2 = ' ',
    answer3 = ' ',
    veteranLogo,

    id2,
    image2,
    name2 = ' ',
    title2 = ' ',
    answer4 = ' ',
    answer5 = ' ',
    answer6 = ' ',
    veteranLogo2,

    id3,
    image3,
    name3 = ' ',
    title3 = ' ',
    answer7 = ' ',
    answer8 = ' ',
    answer9 = ' ',
    veteranLogo3,

    id4,
    image4,
    name4 = ' ',
    title4 = ' ',
    answer10 = ' ',
    answer11 = ' ',
    answer12 = ' ',
    veteranLogo4
}) => {
// Team member data - easy to add more people
    const teamMembers = [
        {
            id: id, //1,
            name: name, //"Ryan",
            title: title, //"Founder & CEO",
            image: image, //ryan,
            veteranLogo: veteranLogo,
            veteranLogoSize: null,
            details: [
                answer1, //"Aquinas Mercy High School",
                answer2, //"Inventing Dance Moves",
                answer3, //"Winning"
            ] 
        },
        {
            id: id2,
            name: name2, //"Themba",
            title: title2, //"Co-Founder & Chief Growth Officer",
            image: image2,
            veteranLogo: veteranLogo2,
            veteranLogoSize: null,
            details: [
                answer4, //"Stanley-Boyd High (WI)",
                answer5, //"Cut flower farming",
                answer6 //"Complex, impossible challenges, especially government bureaucracy."
            ]
        },
        {
            id: id3,
            name: name3, //"Mark",
            title: title3, //"Director of Cloud Engineering",
            image: image3, //mark,
            veteranLogo: veteranLogo3,
            veteranLogoSize: null,
            details: [
                answer7, //"Pike Central (Petersburg IN)",
                answer8, //"Coaching Athletes",
                answer9, //"Steak & Eggs"
            ]
        },
        {
            id: id4,
            name: name4, //"Chris",
            title: title4, //"Director of Defense Health",
            image: image4, //chris,
            veteranLogo: veteranLogo4,
            veteranLogoSize: null,
            details: [
                answer10, //"Boone High in Boone, IA",
                answer11, //"Keeping plants alive(sort of).",
                answer12, //"Coffee, lots of Coffee"
            ]
        }
    ];

    return(
        <>
        <SkipLink />
            <section className='about_concept'>
                <div class="container-fluid">
                    <div id="after-navbar" tabIndex={-1} className='col'>
                        {/* Responsive Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
                        <div id="div" className='gap-8 lg:gap-16 xl:gap-24'>
                            {teamMembers.map((member) => (
                                <div key={member.id} className='col flex flex-col items-center'>
                                    {/* Image with veteran logo overlay */}
                                    <div className='relative mb-6'>
                                        <img 
                                            id = "img"
                                            src={member.image} 
                                            alt={member.name} 
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
                                    <h1 id="h1" className=' text-3xl md:text-4xl lg:text-5xl'>
                                        {member.name}
                                    </h1>
                                    
                                    {/* Title */}
                                    <h3 id="h3" className='text-xl md:text-2xl lg:text-3xl'>
                                        {member.title}
                                    </h3>
                                    
                                    {/* Details */}
                                    <ul className='col'>
                                        {member.details.map((detail, index) => (
                                            <li id="li" key={index} className='text-lg md:text-xl'>
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

            

            


    {/*return (
        <div class="container-fluid" className={sectionClasses}>
            <div class="col">
                <img 
                    src={image} 
                    alt={imageAlt} 
                    className='w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[377px] lg:h-[377px] object-cover'
                />
                <div class='col'>
                    <h2>
                        {name}
                    </h2>
                    <h3>
                        {title}
                    </h3>
                    <ul>
                        <li>
                            {answer1}
                        </li>
                        <li>
                            {answer2}
                        </li>
                        <li>
                            {answer3}
                        </li>
                    </ul>
                </div>
            </div>
        </div>*/}
    </>
    )

}

export default TeamPageSection