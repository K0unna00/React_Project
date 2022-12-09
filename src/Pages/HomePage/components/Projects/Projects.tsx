import "./Projects.scss";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="experience">
        <div className="experience-about">
          <div className="experience-title">
            <h6>Our Experience</h6>
            <h2>
              We Have Completed <span>150+</span>
              <br />
              <span>Projects</span> Succesfully
            </h2>
          </div>
          <div className="experience-text">
            <p className="first-part">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              <br />
              imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. <br />
              Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem
              <br />
              vulputate orci eget mi, sed pulvinar.
            </p>
            <p>
              Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
              faucibus <br />
              est, dui interdum ut amet. Adipiscing feugiat vel at posuere in.
              <br /> Pellentesque volutpat vestibulum.
            </p>
          </div>
          <button>Contact Us</button>
        </div>
        <div className="experience-card">
          <div className="left">
            <div className="card left">
              <p className="number">250+</p>
              <p>Global Customer</p>
            </div>
            <div className="card left">
              <p className="number">50+</p>
              <p>Team Member</p>
            </div>
          </div>
          <div className="right">
          <div className="card right">
              <p className="number">156+</p>
              <p>Project Completed</p>
            </div>
            <div className="card right">
              <p className="number">15+</p>
              <p>Our Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
