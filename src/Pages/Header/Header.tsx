import './Header.scss';
import Logo from './Digiency.svg';
import Dark from './Dark.svg';

export const Header = () => {
    return(
        <section className='header'>
            <div className="container">
                <div className="logo">
                    <img src = {Logo} alt="" />
                </div>
                <div className="navbar">
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Our Work</a>
                    <a href="">Clients</a>
                    <a href="">Our Blog</a>
                    <a href="">Profile</a>
                </div>
                <div className="dark-mode">
                    <img src = {Dark} alt="" />
                </div>
            </div>
        </section>
    )
}