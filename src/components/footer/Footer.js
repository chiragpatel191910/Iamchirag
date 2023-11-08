import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

function Footer() {

    return (
        <footer>
        <a href='#' className='footer__logo'>CHIRAG POKAR</a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#testimonials'>Testimonials</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href='https://www.facebook.com/profile.php?id=100009264981190' target='__blank' rel='noreferrer'><FaFacebookF/></a>
            <a href='https://www.instagram.com/chiragpatel191910/' target='__blank' rel='noreferrer'><FiInstagram/></a>
            <a href='https://twitter.com' target='__blank' rel='noreferrer'><IoLogoTwitter/></a>
        </div>

        <div className='footer__copyright'>
            <small>&copy; CHIRAG POKAR | All Rights Reserved 2023</small>
        </div>
        </footer>
    )
}

export default Footer;