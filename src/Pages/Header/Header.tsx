import './Header.scss';
import Logo from './Digiency.svg';
import Dark from './Dark.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <section className='header'>
            <div className="container">
                <div className="logo">
                    <img src = {Logo} alt="" />
                </div>
                <div className="navbar">
                    <Link to="/">
                        <a href="">Home</a>
                    </Link>
                    <a href="">About Us</a>
                    <a href="">Our Work</a>
                    <a href="">Clients</a>
                    <Link to="/our-blog">
                        <a href="">Our Blog</a>
                    </Link>
                    <a href="">Profile</a>
                </div>
                <div className="dark-mode">
                    <img src = {Dark} alt="" />
                </div>
            </div>
        </section>
    )
}