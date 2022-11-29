import { ContactCard } from "../ContactCard/ContactCard";
import mail from "./mail.svg";
import phone from "./phone-call.svg";
import location from "./map-pin.svg";
import msgPic from "./message-pic.svg";
import "./ContactUs.scss";

export const ContactUs = () => {
    let descriptionText = `158 ralegih sit, houston, yk 5896,uk`;
    return(
        <section id="contact-us">
            <div className="container">
                <div className="contact-info">
                    <h6 className="contact-word">Contact Us</h6>
                    <h2 className="contact-header">Feel <span className="orange">Free <br /> to Contact</span> With Us</h2>
                </div>
                <div className="contact-items">
                    <ContactCard logo= { mail } mainHeader= "Drop a line" subHeader="Mail Us" description="Support87@gmial.com" secondDescription="ijkuiu874@gmial.com"/>
                    <ContactCard logo= { phone } mainHeader= "24/7 Service" subHeader="Call Us" description="+880 265 98745 " secondDescription="+895 855 85589"/>
                    <ContactCard logo= { location } mainHeader= "Location" subHeader="Visit Us" description= { descriptionText }/>
                </div>
                <div className="send-message">
                    <div className="left-part">
                        <img src={ msgPic } alt="pic" />
                    </div>
                    <div className="right-part">
                        <h3 className="message-header">Send Your <span className="orange">Message To Us</span></h3>
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
                    </div>
                </div>
            </div>
        </section>
    );
};