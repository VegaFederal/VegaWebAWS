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
}) => {
// Team member data - easy to add more people
    const teamMembers = [
        {
            id: id, //1,
            name: name,
            title: title,
            image: image,
            veteranLogo: veteranLogo,
            veteranLogoSize: null,
            details: [
                answer1,
                answer2,
                answer3,
            ] 
        },
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
                                                loading='lazy'
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