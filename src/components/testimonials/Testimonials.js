import './testimonials.css';
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avtar: AVATAR1,
        name: 'Nia',
        review: 'The professional and efficient handling of the project has made a substantial impact on our business. We appreciate the dedication to delivering a high-quality product that aligns perfectly with our vision.',
    }
    ,
    {
        avtar: AVATAR2,
        name: 'Jax',
        review: 'The comprehensive SEO strategy has significantly improved our search engine rankings, leading to a noticeable boost in organic traffic and conversions. We are impressed with the measurable results.',
    }
    ,
    {
        avtar: AVATAR3,
        name: 'Broden',
        review: 'The responsive design and user-friendly interface of the application have garnered positive feedback from our users, and the app has become an essential part of our service offering.',
    },
    {
        avtar: AVATAR4,
        name: 'Elia',
        review: 'The content strategy implemented by the team has significantly increased our online visibility and user engagement. We are delighted with the results and it will definately give us a huge profit as well.',
    }
]

function Testimonials() {

    return (
        <section id='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avtar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avtar} alt='avatar'></img>
                                </div>
                                <h5>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials;