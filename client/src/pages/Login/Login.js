import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth"
import './Login.css'
import loginImg from '../../images/login.jpg'


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="Login">
      <div className='wrapper'>
        <img src = {loginImg} alt='' className='img'/>

        <div className="card">
          <div className="card-hdr">
            <h2 className='sgn-h2'>Login</h2>
          </div>
          
          <div className="card-body">
          <form onSubmit={handleFormSubmit} id="login">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="email@here.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
            {
              error ? <div>
                <p className="error-text" >The provided credentials are incorrect</p>
              </div> : null
            }
          </form>
          </div>

          <div className='card-ftr'>
            <button className='login-login-btn' type="submit" form="login" value="Submit">
              Login
            </button>
            <Link className ='login-signup-btn' to="/signup">
            Go to Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;