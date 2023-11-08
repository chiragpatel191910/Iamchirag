import {BiLogoLinkedinSquare} from 'react-icons/bi';
import {FaGithubSquare} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

function HeaderSocials(){

    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/chirag-patel-70964662924456760433/" target="_blank" rel="noreferrer"><BiLogoLinkedinSquare/></a>
            <a href="https://github.com/chiragpatel191910" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
            <a href="https://www.instagram.com/chiragpatel191910/" target="_blank" rel="noreferrer"><FiInstagram/></a>
        </div>
    )
}

export default HeaderSocials;