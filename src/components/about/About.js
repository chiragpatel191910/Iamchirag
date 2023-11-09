import './about.css';
import ME from '../../assets/me-about.png';
import { FaAward } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';

function About() {

    return (
        <section id='about' >
            <h5>Get to khow</h5>
            <h2>About Me</h2>

            <div className='container about__container'>

                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='about me'></img>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>0+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <BiGroup className='about__icon' />
                            <h5>Clients</h5>
                            <small>0+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <CgWebsite className='about__icon' />
                            <h5>Projects</h5>
                            <small>2+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Dedicated to delivering high-quality, SEO-optimized websites that not only attract traffic but also convert visitors into loyal customers, thereby amplifying the online presence and visibility of businesses.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's talk</a>
                </div>

            </div>
        </section>
    )
}

export default About;