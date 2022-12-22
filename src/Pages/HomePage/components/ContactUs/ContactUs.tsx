import './ContactUs.scss';
import { ContactCard } from '../ContactCard/ContactCard';
import frame1 from './Frames/Frame 1.svg';
import frame2 from './Frames/Frame 2.svg';
import frame3 from './Frames/Frame 3.svg';
import frame4 from './Frames/Frame 4.svg';
import location from './map-pin.svg';
import mail from './mail.svg';
import msgPic from './message-pic.svg';
import phone from './phone-call.svg';

export const ContactUs = () => {
  let descriptionText = `158 ralegih sit, houston, yk 5896,uk`;
  return (
    <section id="contact-us">
      <div className="container">
        <div className="contact-info">
          <h6 className="contact-word">Contact Us</h6>
          <h2 className="contact-header">
            Feel{' '}
            <span className="orange">
              Free <br /> to Contact
            </span>{' '}
            With Us
          </h2>
        </div>
        <div className="contact-items">
          <ContactCard
            logo={mail}
            mainHeader="Drop a line"
            subHeader="Mail Us"
            description="Support87@gmial.com"
            secondDescription="ijkuiu874@gmial.com"
          />
          <ContactCard
            logo={phone}
            mainHeader="24/7 Service"
            subHeader="Call Us"
            description="+880 265 98745 "
            secondDescription="+895 855 85589"
          />
          <ContactCard
            logo={location}
            mainHeader="Location"
            subHeader="Visit Us"
            description={descriptionText}
          />
        </div>
        <div className="send-message">
          <div className="left-part">
            <img src={msgPic} alt="pic" />
          </div>
          <div className="right-part">
            <h3 className="message-header">
              Send Your <span className="orange">Message To Us</span>
            </h3>
            <form>
              <div className="form-top">
                <div className="input-group">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                  <input type="tel" placeholder="Mobile No" />
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div className="form-bottom">
                <div className="input-group text-area">
                  <textarea placeholder="Send Message"></textarea>
                </div>
              </div>
            </form>
            <button type="submit">Send Message</button>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8594.252853589076!2d49.71585139108298!3d40.397169452167866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030812a5a383cf3%3A0x9162d867f69b245c!2zUW9idSDEsG1hbSDGj2xpIE3JmXNjaWRp!5e0!3m2!1str!2s!4v1671728572670!5m2!1str!2s"
            width="600"
            height="450"
            loading="lazy"
            title="maps"
          ></iframe>
        </div>
        <div className="frames">
          <img src={frame1} alt="frame1" />
          <img src={frame2} alt="frame2" />
          <img src={frame3} alt="frame3" />
          <img src={frame4} alt="frame4" />
        </div>
      </div>
    </section>
  );
};
