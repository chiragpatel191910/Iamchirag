
import CHIRAG_CV from '../../assets/CHIRAG_CV.pdf';

function CTA() {

    return (
        <div className="cta">
            <a href={CHIRAG_CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA;