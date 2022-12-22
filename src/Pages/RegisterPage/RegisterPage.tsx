import './RegisterPage.scss';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { baseURL } from '../../constants';
import { yupResolver } from '@hookform/resolvers/yup';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const schema = yup
  .object({
    firstName: yup.string().required().min(2),
    lastName: yup.string().required().min(2),
    email: yup.string().required().min(5),
    password: yup.string().required().min(8, 'your password must contain at least 8 characters'),
    repeatPassword: yup
      .string()
      .required()
      .min(8, 'your password must contain at least 8 characters')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
    fetch(`${baseURL}/users/register`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data);
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
              <input type="text" placeholder="First Name" {...register('firstName', { required: true })} />
              <p>{errors.firstName?.message}</p>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Last Name" {...register('lastName', { required: true })} />
              <p>{errors.lastName?.message}</p>
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" {...register('email', { required: true })} />
              <p>{errors.email?.message}</p>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" {...register('password', { required: true })} />
              <p>{errors.password?.message}</p>
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="RepeatPassword"
                {...register('repeatPassword', { required: true })}
              />
              <p>{errors.repeatPassword?.message}</p>
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
