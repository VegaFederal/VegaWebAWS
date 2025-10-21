import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import myImage from '../assets/Logo.png';

const Navbar = ({color_story, color_capabilities,color_contact, color_partner, color_career, color_about}) => {
    const[click, setClick] = useState(false);
    const[scrolled, setScrolled] = useState(false);
    
    const handleClick = () => setClick(!click);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50; // Change 50 to adjust when it shrinks
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header ${scrolled ? 'scrolled bg-primary' : 'bg-primary'}`}>
            <Link to='/'><img src={myImage} class="w-45 pb-3"></img></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/Capabilities'><p class={color_capabilities}>Capabilities</p></Link>
                </li>
                <li class='text-white font-bold'>
                    |
                </li>
                <li>
                    <Link to='/Our_Story'><p class={color_story}>Our Story</p></Link>
                </li>
                <li class='text-white font-bold'>
                    |
                </li>
                <li>
                    <Link to='/Partners'><p class={color_partner}>Our Partners</p></Link>
                </li>
                <li class='text-white font-bold'>
                    |
                </li>
                <li>
                    <Link to='/Careers'><p class={color_career}>Careers</p></Link>
                </li>
                <li class='text-white font-bold'>
                    |
                </li>
                <li>
                    <Link to='/About'><p class={color_about}>Vega Team</p></Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:'#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}}/>)}
            </div>
        </div>
    )
}

export default Navbar
