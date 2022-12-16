import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { loginSlice } from './redux/loginPageSlice';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const onLoginPress = () => {
    dispatch(loginSlice.actions.setLoginUser({ email: 'Salam', password: '********' }));
  };

  return (
    <section id="login">
      <div className="container-narrow">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        <div className="login-body">
          <form>
            <div className="input-group">
              <input type="text" placeholder="User Name" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-group">
              <div className="remember-me">
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
              <a href=" ">Forget Password</a>
            </div>
            <div className="input-group">
              <Link to={'/'}>
                <button onClick={onLoginPress} type="submit">
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
