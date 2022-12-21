import './Footer.scss';
import CopyrightIcon from './Copyright.svg';
import Logo from './Digiency.svg';
import MessageIcon from './Message.svg';
import { Link } from 'react-router-dom';

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, cursus egestas etiam posuere
                vitae cursus consectetur eu. Cursus vitae porttitor libero est posuere.
              </div>
              <ul className="media">
                <li>
                  <i className="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-skype"></i>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="title">Company</div>
            <div className="content">
              <ul>
                <li><Link className='links' to= '/about-us'>About Us</Link></li>
                <li><Link className='links' to='/our-work'>Our Work</Link></li>
                <li><Link className='links' to='/clients'>Client</Link></li>
                <li><Link className='links' to='/our-blog'>Our Blog</Link></li>
                <li><Link className='links' to='/contact-us'>Contact Us</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <div className="title">Services</div>
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
            <div className="title">Newsletter</div>
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
  );
};
