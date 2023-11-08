import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';


function Header() {

    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>CHIRAG PATEL</h1>
                <h5 className='text-light'>MERN Stack Developer</h5>
                <CTA />
                <HeaderSocials/>
                <div className='me'>
                    <img src={ME} alt='MySelf'></img>
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;