import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q1gqvch', 'template_dvw7an1', form.current, 'kf6v8NeADqtRdiI5i');

        e.target.reset();  /* ============ for reseting form ============*/
    }

    return (
        <section id='contact' className='contact__margin-top'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>patelchirag7046@gmail.com</h5>
                        <a href='mailto:patelchirag7046@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>Messenge</h5>
                        <a href='https://www.instagram.com/direct/t/105355160855646/' target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+917046925604</h5>
                        <a href='https://wa.me/+917046925604' target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required  autoComplete='on'/>
                    <input type='email' name='email' placeholder='Your Email' required  autoComplete='on'/>
                    <textarea name='message' rows={7} placeholder='Your Message' required autoComplete='on'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;