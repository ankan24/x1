import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
     
        <Link to="/login" style={styles.link}>Login</Link>
     
        <Link to="/profile" style={styles.link}>Profile</Link>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      
    </nav>
  );
};

export default Navbar;

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#282c34',
    color: 'white',
    alignItems: 'center',
  } as React.CSSProperties,
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  } as React.CSSProperties,
  button: {
    backgroundColor: '#61dafb',
    color: '#282c34',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
  } as React.CSSProperties,
};
