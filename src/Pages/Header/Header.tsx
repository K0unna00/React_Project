import './Header.scss';
import Logo from './Digiency.svg';
import Dark from './Dark.svg';
import MenuIcon from './menuIcon.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <section className='header'>
            <div className="container">
                <img className="logo" src = {Logo} alt="" />
                <div className="navbar">
                    <Link to="/">
                        <a href="#">Home</a>
                    </Link>
                    <a href="#">About Us</a>
                    <a href="#">Our Work</a>
                    <a href="#">Clients</a>
                    <Link to="/our-blog">
                        <a href="#">Our Blog</a>
                    </Link>
                    <a href="#">Profile</a>
                </div>
                <img className="dark-mode-btn" src = {Dark} alt="" />
                <img className="menu-btn" src= {MenuIcon} alt="" />
            </div>
        </section>
    )
}