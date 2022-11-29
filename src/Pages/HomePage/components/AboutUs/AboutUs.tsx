import "./AboutUs.scss";
import imgAboutUs from "./about-us.svg";
import fileIcon from "./file-icon.svg";
import codeIcon from "./code-icon.svg";
import settingIcon from "./setting-icon.svg";
import arrowIcon from "./arrow-icon.svg";

export const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
      <p className="about-us-text"> About Us</p>
        <div className="up">
          <div className="image">
            <img src={ imgAboutUs } alt="" />
          </div>
          <div className="text">
            <h1>
              We Are{" "}
              <span>
                {" "}
                Making <br /> Ideas Better{" "}
              </span>
              For Everyone
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
              aenean. Nisi, lectus aliquet aliquam consectetur augue praesent.
              Lorem vulputate orci eget mi, sed pulvinar. <br /> <br /> Ornare
              etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus
              est, dui interdum ut amet. Adipiscing feugiat vel at posuere in.
              Pellentesque volutpat vestibulum.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="under">
          <div className="items item1">
            <img src={fileIcon} alt="" />{" "}
            <p>World leader in consulting and finance</p>
          </div>
          <div className="items item2">
            <img src={codeIcon} alt="" />
            <p>A focused team with a specialized skill</p>
          </div>
          <div className="items item3">
            <img src={settingIcon} alt="" />
            <p>Trusted and professional advisors for you</p>
          </div>
          <div className="items item4">
            <img src={arrowIcon} alt="" />
            <p>Trusted and professional advisors for you</p>
          </div>
        </div>
      </div>
    </section>
  );
};