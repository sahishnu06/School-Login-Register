import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <img
        src={require("../assets/images/Vector 1-2.png")}
        className="image1"
        alt="Background"
      />
        <img
        src={require("../assets/images/Mobile Vector .png")}
        className="image3"
        alt="Background-mobile"
      />
      <div className="logo">
        <h1>LOGO</h1>
      </div>
  
      <div className="login-container">
        <div className="left-panel">
          <h1>LOREM IPSUM</h1>
          <h2>Instructions:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas eu volutpat potenti
            tellus viverra ultrices facilisis arcu. 
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Egestas eu volutpat potenti tellus viverra ultrices facilisis
              arcu.
            </li>
          </ul>
        </div>
      
       
        <div className="right-panel">
          <h2>Sign in to your account</h2>
          <form>
            <label>Email:</label>
            <input type="email" placeholder="example@gmail.com" required />
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
            <div className="recovery">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#">Forgot your password?</a>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
      <img
        src={require("../assets/images/Students.png")}
        className="image2"
        alt="students"
      />
      <div class="circle">
        <p class="text">
        <Link to="/register">Register<br/> Today!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;