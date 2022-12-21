import './Profile.scss';
import Hasbullah from './hasbulla.jpg';
import Graphic from './graphic.png';
import UI from './ui.png';
import Software from './software.png';
import App from './app.png';

export const Profile = () => {
  return (
    <section className="profile">
      <div className="container">
        <img id='hasbulla'  src={Hasbullah} alt="" />
        <div className="head-name"><h1>My name is <span>Bakhtiyar</span>. Digital Product Designer</h1></div>
        <div className="about">
          <div className="keys">
            <p className="full-name">Full Name: </p>
            <p className="user-name">User Name: </p>
            <p className="e-mail">E-mail: </p>
            <p className="position">Position: </p>
          </div>
          <div className="values">
              <p className="full-name">Bakhtiyar Atakishiyev</p>
              <p className="user-name">@K0unna</p>
              <p className="e-mail">MessiGoat@gmail.com</p>
              <p className="position">Fullstack Developer sj</p>
          </div>
        </div>
      </div>
    </section>
  );
};
