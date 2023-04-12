import './Header.scss';
import { Link } from 'react-router-dom';
import { RootState } from '../../modules/redux/store';
import { useSelector } from 'react-redux';
import Dark from './Dark.svg';
import Logo from './Digiency.svg';
import MenuIcon from './menuIcon.png';

export const Header = () => {
  const login = useSelector((state: RootState) => state.login);

  // console.log(login.isSigned);

  return (
    <section className="header">
      <div className="container">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/our-blog">Our Blog</Link>
          <Link to="/login">{login.email ? <Link to="/profile">Profile</Link> : 'Log In'}</Link>
        </div>
        <img className="dark-mode-btn" src={Dark} alt="" />
        <img className="menu-btn" src={MenuIcon} alt="" />
      </div>
    </section>
  );
};
