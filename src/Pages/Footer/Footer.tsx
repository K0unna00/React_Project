import './Footer.scss';
import Logo from "./Logo.png";
import MessageIcon from "./Message.png";
import CopyrightIcon from "./Copyright.png";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <ul className="footer">
                    <li>
                        <div className="title">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="content">
                            <div className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum.
                            </div>
                            <ul className="media">
                                <li><i className="fa-brands fa-facebook"></i></li>
                                <li><i className="fa-brands fa-instagram"></i></li>
                                <li><i className="fa-brands fa-twitter"></i></li>
                                <li><i className="fa-brands fa-skype"></i></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="title">
                            Company
                        </div>
                        <div className="content">
                            <ul>
                                <li>About Us</li>
                                <li>Our Work</li>
                                <li>Client</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="title">
                            Services
                        </div>
                        <div className="content">
                            <ul>
                                <li>Graphic Design</li>
                                <li>UI\UX Design</li>
                                <li>Web Development</li>
                                <li>App Development</li>
                                <li>Web Hosting</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="title">
                            Newsletter
                        </div>
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget varius viverra in.
                            <div className="input">
                                <input type="text" placeholder="info@gmail.com" />
                                <div className="button">
                                    <img src={MessageIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="left">
                        <img src={CopyrightIcon} alt="" />
                        Copyright 2021. All Right Reserved By Ojjomedia
                    </div>
                    <div className="right">
                            <i className="fa-solid fa-circle-up"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}