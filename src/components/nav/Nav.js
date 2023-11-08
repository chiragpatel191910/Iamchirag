import './nav.css';
import { HiOutlineHome } from 'react-icons/hi'
import { BsPerson } from 'react-icons/bs'
import { BsBarChart } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { PiHandshakeLight } from 'react-icons/pi'
import { useState } from 'react';

function Nav() {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsPerson /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBarChart /></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><PiHandshakeLight /></a>
        </nav>
    )
}

export default Nav;