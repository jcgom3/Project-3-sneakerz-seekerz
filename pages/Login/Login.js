import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth"
import '../Login/Login.css'


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
        <div className='background'>
          <div className="card">
                <div className="card-hdr">
                 <h2>Login</h2>
                </div>
        <div className="card-body">
        <form onSubmit={handleFormSubmit} id="login">
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email address:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {
            error ? <div>
              <p className="error-text" >The provided credentials are incorrect</p>
            </div> : null
          }
        </form>

        <div className="btn">
            <button type="submit" form="login" value="Submit">
              Submit
            </button>
          </div>
        </div>

        </div>
        <div>
        <Link to="/signup">
          ← Go to Signup
        </Link>
        </div>
        </div>
      </div>
    );
  }
  
  
  export default Login;