import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>👤 Profile Page</h2>
      <p>Welcome, {username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
