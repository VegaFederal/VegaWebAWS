import {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import Logo_Blue from '../assets/vega_logo_blue.png';
import Logo_White from '../assets/vega_logo_white.png';

const Navbar = ({color_story, color_capabilities,color_contact, color_partner, color_career, color_about}) => {
    const[click, setClick] = useState(false);
    const[scrolled, setScrolled] = useState(false);
    
    const handleClick = () => setClick(!click);

    

    return (
        <div className={`header ${scrolled ? 'scrolled bg-white' : 'bg-white'}`}>
            
            <Link to='/'><img src={Logo_White} alt='Vega logo' className="w-45 pb-3 mobile-image"></img>
                         <img src={Logo_Blue} alt='Vega logo' className="w-45 pb-3 desktop-image"></img></Link>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='text-primary nav-item'>
                    <Link to='/'><p className='nav-item home'>Home</p></Link>
                </li>
                <li className='text-primary nav-item'>
                    <Link to='/Capabilities'><p className={`${color_capabilities} nav-item`}>Capabilities</p></Link>
                </li>
                <li className='text-white nav-item'>
                    <Link to='/Our_Story'><p className={`${color_story} nav-item`}>Our Story</p></Link>
                </li>
                <li className='text-primary nav-item'>
                    <Link to='/Careers'><p className={`${color_career} nav-item`}>Careers</p></Link>
                </li>
                <li className='text-primary nav-item'>
                    <Link to='/About'><p className={`${color_about} nav-item`}>Vega Team</p></Link>
                </li>
                <li class='text-primary nav-item'>
                    <Link to='/ExamplePage'><p>Example Page</p></Link>
                </li>
                <li class='text-primary nav-item'>
                    <Link to='/Homepage2'><p>Homepage 2</p></Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                
                {click ? (<FaTimes size={20} style={{color:'#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}}/>)}
            </div>
            
        </div>
    )
}

export default Navbar
