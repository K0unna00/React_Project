import './Projects.scss';
export const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="experience-about">
          <div className="experience-title">
            <h6>Our Experience</h6>
            <h2>
              We Have Completed <span>150+ Projects</span> Succesfully
            </h2>
          </div>
          <div className="experience-text">
            <p className="first-part">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus
              aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.
            </p>
            <p>
              Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut
              amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.
            </p>
          </div>
          <button>Contact Us</button>
        </div>
        <div className="experience-card">
          <div className="lefts">
            <div className="card left">
              <p className="number">250+</p>
              <p>Global Customer</p>
            </div>
            <div className="card left">
              <p className="number">50+</p>
              <p>Team Member</p>
            </div>
          </div>
          <div className="rights">
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
