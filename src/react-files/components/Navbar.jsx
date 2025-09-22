import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import myImage from '../assets/Logo.png';


const Navbar = ({color_story, color_capabilities,color_contact, color_partner, color_career, color_about}) => {


    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='header'>
        <Link to='/'><img src={myImage} class="w-50"></img></Link>
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
                <Link to='/Contact'><p class={color_contact}>Contact Us</p></Link>
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
                <Link to='/About_concept'><p class={color_about}>Vega Team</p></Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:'#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}}/>)}

        </div>
    </div>
  )
}

export default Navbar
