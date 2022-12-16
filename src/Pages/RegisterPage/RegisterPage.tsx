import './RegisterPage.scss';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <section id="register">
      <div className="container-narrow">
        <div className="register-header">
          <h1>Register</h1>
        </div>
        <div className="register-body">
          <form>
            <div className="input-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-group">
              <Link to={'/'}>
                <button type="submit">Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
