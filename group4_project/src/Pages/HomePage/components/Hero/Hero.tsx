import './Hero.scss'
import HeroTitle from './HeroTitle.png'
import HeroImage from './HeroImage.png'
import FacebookLogo from '../../../../assets/images/FacebookLogo.png'
import InstagramLogo from '../../../../assets/images/InstagramLogo.png'
import TwitterLogo from '../../../../assets/images/TwitterLogo.png'
import SkypeLogo from '../../../../assets/images/SkypeLogo.png'


export const Hero = () =>{
    return(
        <section className="hero">
            <div className="container">
                <div className="left">
                    <div className="title">
                        <img src={HeroTitle} alt="" />
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
                <li className="active"><img src={FacebookLogo} alt="" /></li>
                <li><img src={InstagramLogo} alt="" /></li>
                <li><img src={TwitterLogo} alt="" /></li>
                <li><img src={SkypeLogo} alt="" /></li>
            </ul>
        </section>
    )
} 