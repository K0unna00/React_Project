import './LoginPage.scss';

export const LoginPage = () => {
  return (
    <section id="login">
      <div className="container-narrow">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        <div className="login-body">
          <form action="post">
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
                <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
