import './Hero.scss'
import HeroImage from './HeroImage.png'


export const Hero = () =>{
    return(
        <section className="hero">
            <div className="container">
                <div className="left">
                    <div className="title">
                        We Are The Best <span>Digital Agency</span> for business
                    </div>
                    <div className="text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>
                    <button>
                        Contact Us
                    </button>
                </div>
                <div className="right">
                    <img src={HeroImage} alt="" />
                </div>
            </div>
            <ul className="media">
                <li><i className="fa-brands fa-facebook-f"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-skype"></i></li>
            </ul>
        </section>
    )
} 