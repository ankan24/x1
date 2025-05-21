import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PrivateRoute from './routes/PrivateRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import Navbar from './pages/Navbar';

const PandPRouting: React.FC = () => {
  return (
    <AuthProvider>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
        </Routes>
      
    </AuthProvider>
  );
};

export default PandPRouting;
