import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authcontext';
import axios from 'axios';
import "./auth.css"

// Set the base URL for axios requests
axios.defaults.baseURL = "https://codingnijas1.onrender.com"
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const switchMode = () => {
    setIsSignUp((prev) => !prev);
  };
  
  
  const submitHandler = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Sign up logic
      try {
        const { data } = await axios.post('/api/users/register', { name, email, password });
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/student'); // or dashboard
      } catch (error) {
        if (error.response) {
          console.error('Error response:', error.response.data);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    } else {
      // Sign in logic
      try {
        const { data } = await axios.post('/api/users/login', { email, password });
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/student'); // or dashboard
      } catch (error) {
        if (error.response) {
          console.error('Error response:', error.response.data);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    }
  };
  
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitHandler}>
        {isSignUp && (
          <input
            type="text"
            placeholder="Name"
            className="auth-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth-button">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={switchMode} className="auth-switch-button">
        {isSignUp ? 'Already have an account? Sign In' : 'New user? Sign Up'}
      </button>
    </div>
  );
};

export default Auth;
