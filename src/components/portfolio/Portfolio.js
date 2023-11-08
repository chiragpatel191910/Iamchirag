import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.jpg';
// import IMG3 from '../../assets/portfolio3.jpg';
// import IMG4 from '../../assets/portfolio4.jpg';
// import IMG5 from '../../assets/portfolio5.png';
// import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'First Project | Using HTML & CSS',
        github: 'https://github.com/chiragpatel191910?tab=repositories',
        demo: 'https://chiragpatel191910.github.io/Mymobile.com/'
    }
    ,
    {
        id: 2,
        image: IMG2,
        title: 'Under Development',
        github: 'https://github.com/chiragpatel191910?tab=repositories',
        demo: 'https://chiragpatel191910.github.io/Mymobile.com/'
    }
    ,
    {
        id: 3,
        image: IMG2,
        title: 'Under Development',
        github: 'https://github.com/chiragpatel191910?tab=repositories',
        demo: 'https://chiragpatel191910.github.io/Mymobile.com/'
    }
    ,
    {
        id: 4,
        image: IMG2,
        title: 'Under Development',
        github: 'https://github.com/chiragpatel191910?tab=repositories',
        demo: 'https://chiragpatel191910.github.io/Mymobile.com/'
    }
    ,
    {
        id: 5,
        image: IMG2,
        title: 'Under Development',
        github: 'https://github.com/chiragpatel191910?tab=repositories',
        demo: 'https://chiragpatel191910.github.io/Mymobile.com/'
    }
    ,
    {
        id: 6,
        image: IMG2,
        title: 'Under Development',
        github: 'https://github.com/chiragpatel191910?tab=repositories',
        demo: 'https://chiragpatel191910.github.io/Mymobile.com/'
    }
]

function Portfolio() {

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt='Portfolio Pictures'></img>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;