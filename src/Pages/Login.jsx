
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/css/Login.css'

export default function Login() {
  const savedEmail = 'example@example.com';
const savedPassword = 'password123';


  // const savedEmail = 'example@example.com';
  // const savedPassword = 'password123';

  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered email and password match the saved values
    if (email === savedEmail && password === savedPassword) {
      // Valid credentials
      setError('');
      // Redirect to the home page
      navigateTo('/Home');
    } else {
      // Invalid credentials
      alert('Invalid email or password.');
    }
  }
  
  return (
   
    <>

  {/* Hello world */}
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img
          src="https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?w=996&t=st=1687435020~exp=1687435620~hmac=aad64c4504d2016968e12d50cea27ea42e4ec9b6b4ea4ad5c51daeaa3a32b6a5"
          className="img-fluid"
          alt="Phone image"
        />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example13">
              Email address
            </label>
            <input
              type="email" value={email}
              id="form1Example13" onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg"
            />
           
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example23">
              Password
            </label>
            <input  value={password} 
              type="password"
              id="form1Example23" onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-lg" />
            
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form1Example3"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div>
            {/* <a href="#!">Forgot password?</a> */}
          </div>
          {/* Submit button */}
          {error && <p>{error}</p>}
          <button type="submit" className="btn btn-primary btn-lg btn-block w-100">SignUp</button>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
          <a
            className="btn btn-primary btn-lg btn-block mb-2 w-100"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f me-2  " />
            Continue with Facebook
          </a>
          <a
            className="btn btn-primary btn-lg btn-block w-100 "
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter me-2" />
            Continue with Twitter
          </a>
        </form>
      </div>
    </div>
  </div>
</>

    
  )

  }