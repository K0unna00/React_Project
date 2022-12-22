import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../models/user';
import { baseURL } from '../../constants';
import { loginSlice } from './redux/loginPageSlice';
import { setValueInLocalStorage } from '../../services/localStorage.service';
import { useDispatch } from 'react-redux';

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<LoginFormData>();
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    fetch(`${baseURL}/users/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setValueInLocalStorage('authToken', data.access_token);
        const user: User = {
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.email,
        };
        dispatch(loginSlice.actions.setLoginUser(user));
      });
  };

  // const onLoginPress = () => {
  //   dispatch(loginSlice.actions.setLoginUser({ email: 'Salam', password: '********' }));
  // };

  return (
    <section id="login">
      <div className="container-narrow">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        <div className="login-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input type="text" placeholder="Email" {...register('email')} />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" {...register('password')} />
            </div>
            <div className="input-group">
              <div className="remember-me">
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
              <a href=" ">Forget Password</a>
            </div>
            <div className="input-group last">
              <button type="submit">Login</button>
            </div>
            <div>
              <Link to="/register" className="register">
                <i>Register</i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
