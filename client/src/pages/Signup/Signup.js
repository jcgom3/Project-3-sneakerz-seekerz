import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import signupImg from '../../images/login.jpg'
import './Signup.css'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="Signup">
      <div className='wrapper'>
      <img src={signupImg} alt='' className='img'></img>

      <div className='card'>
      <div className='card-hdr'>
      <h2>Signup</h2>
      </div
      >
      <div className='card-body'>
      <form onSubmit={handleFormSubmit} id='signup' className='signup-form'>
          <label htmlFor="firstName">First Name:</label>
          <input className='sgn-input'
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input className='sgn-input'
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input className='sgn-input'
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <label htmlFor="pwd">Password:</label>
          <input className='sgn-input'
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
      </form>
      <div className="card-ftr">
          <button className="sgn-signup-btn"type="submit" form='signup' value='submit'>
            Sign up!
          </button>
          <Link className='sgn-login-btn' to="/login">
            Go to Login
          </Link>
          </div>
      </div>
      </div>
    </div>
    </div>
  );

}

export default Signup