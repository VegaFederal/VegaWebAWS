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
            
            <Link to='/' onClick={() => document.activeElement?.blur()}><img src={myImage} class="w-45 pb-3" alt="Vega Federal Logo"></img></Link>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li class='text-primary'>
                    <Link to='/Capabilities' onClick={() => document.activeElement?.blur()}><p class={color_capabilities}>Capabilities</p></Link>
                    
                </li>
                <li class='text-primary font-bold'>
                    |
                </li>
                <li class='text-primary'>
                    <Link to='/Our_Story' class='text-primary' onClick={() => document.activeElement?.blur()}><p class={color_story}>Our Story</p></Link>
                </li>
                <li class='text-primary font-bold'>
                    |
                </li>
                <li class='text-primary'>
                    <Link to='/Careers' onClick={() => document.activeElement?.blur()}><p class={color_career}>Careers</p></Link>
                </li>
                <li class='text-primary font-bold'>
                    |
                </li>
                <li class='text-primary'>
                    <Link to='/About' onClick={() => document.activeElement?.blur()}><p class={color_about}>Vega Team</p></Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:'#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}}/>)}
            </div>
            
        </div>
    )
}

export default Navbar
