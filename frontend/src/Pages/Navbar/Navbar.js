import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authcontext';
import './Navbar.css';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
    navigate('/auth');
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Placement Cell</h2>
      <ul className="navbar-list">
        {user ? (
          <>
            <li className="navbar-item">
              <Link to="/students" className="navbar-button">
                Students
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/student" className="navbar-button">
                Add New Student
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/interviews" className="navbar-button">
                Interview Schedule
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/add-interview" className="navbar-button">
                Schedule Interview
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/allocate-student" className="navbar-button">
                Assign Students
              </Link>
            </li>
            <li className="navbar-item">
              <button onClick={signOut} className="navbar-button">
                Log Out
              </button>
            </li>
          </>
        ) : (
          <li className="navbar-item">
            <Link to="/auth" className="navbar-button">
              Log In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
