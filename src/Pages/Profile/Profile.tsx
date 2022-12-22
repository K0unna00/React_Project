import './Profile.scss';
import { RootState } from '../../modules/redux/store';
import { useSelector } from 'react-redux';
import Hasbullah from './hasbulla.jpg';

export const Profile = () => {
  const user = useSelector((state: RootState) => state.login);

  return (
    <section className="profile">
      <div className="container">
        <img id="hasbulla" src={Hasbullah} alt="" />
        <div className="head-name">
          <h1>
            Greetings, <span>{user.firstName}</span>. Digital Product Designer
          </h1>
        </div>
        <div className="about">
          <div className="keys">
            <p className="full-name">Full Name: </p>
            <p className="e-mail">E-mail:</p>
          </div>
          <div className="values">
            <p className="full-name">
              {user.firstName} {user.lastName}
            </p>
            <p className="e-mail">{user.email}</p>
            {/* <p className="position">
              <button>LogOut</button>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
