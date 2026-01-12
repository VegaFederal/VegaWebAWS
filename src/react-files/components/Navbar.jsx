import React, {useState, useEffect} from 'react'
import {Link, ScrollRestoration} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import myImage from '../assets/vega_logo_blue.png';

const Navbar = ({color_story, color_capabilities,color_contact, color_partner, color_career, color_about}) => {
    const[click, setClick] = useState(false);
    const[scrolled, setScrolled] = useState(false);
    
    const handleClick = () => setClick(!click);

    

    return (
        <div className={`header ${scrolled ? 'scrolled bg-white' : 'bg-white'}`}>
            
            <Link to='/'><img src={myImage} alt='Vega Federal logo' class="w-45 pb-3"></img></Link>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li class='text-primary nav-item'>
                    <Link to='/Capabilities'><p class={color_capabilities} className='text-white xl:text-primary'>Capabilities</p></Link>
                </li>
                <li class='text-white nav-item'>
                    <Link to='/Our_Story'><p class={color_story} className='text-white xl:text-primary'>Our Story</p></Link>
                </li>
                <li class='text-primary nav-item'>
                    <Link to='/Careers'><p class={color_career} className='text-white xl:text-primary'>Careers</p></Link>
                </li>
                <li class='text-primary nav-item'>
                    <Link to='/About'><p class={color_about} className='text-white xl:text-primary'>Vega Team</p></Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                <label>Hamburger menu icon</label>
                {click ? (<FaTimes size={20} style={{color:'#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}}/>)}
            </div>
            
        </div>
    )
}

export default Navbar
