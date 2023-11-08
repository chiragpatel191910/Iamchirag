import './services.css';
import { BiCheck } from 'react-icons/bi'
function Services() {

    return (
        <section id='services'>
            <h5>What I Offer !</h5>
            <h2>Services</h2>
            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Visual Design & Responsive Design </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Interactive Elements </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Consistency & Accessibility </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Consistency, Accessibility </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>User Research </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Information Architecture </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>A/B Testing </p>
                        </li>
                    </ul>
                </article>

                {/* ======================== END OF UI/UX DESIGN ============================ */}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Custom Web Design </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive Web Development</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>E-commerce Solutions </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content Management Systems (CMS) </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Search Engine Optimization (SEO)</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Cross-Browser Compatibility</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Performance Optimization </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>API Integration </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Maintenance and Support </p>
                        </li>
                    </ul>
                </article>

                {/* ======================== END OF WEB DEVELOPMENT ============================ */}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Creativity & Versatility</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Consistency</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Audience Engagement </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Analytical Skills </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Understanding of Trends </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Brand Alignment </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Collaboration </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Adaptability </p>
                        </li>
                    </ul>
                </article>

            {/* ======================== END OF CONTENT CREATION ============================ */}

            </div>
        </section>
    )
}

export default Services;