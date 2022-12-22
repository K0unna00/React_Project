import './RegisterPage.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { baseURL } from '../../constants';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>();
  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    fetch(`${baseURL}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data);
        // console.log(data);
      });
  };
  return (
    <section id="register">
      <div className="container-narrow">
        <div className="register-header">
          <h1>Register</h1>
        </div>
        <div className="register-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input type="text" placeholder="First Name" {...register('firstName')} />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Last Name" {...register('lastName')} />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" {...register('email')} />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" {...register('password')} />
            </div>
            <div className="input-group">
              <input type="password" placeholder="RepeatPassword" {...register('repeatPassword')} />
            </div>
            <div className="input-group">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
