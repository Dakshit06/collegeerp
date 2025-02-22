import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home/Home';
import Elections from './components/Elections';
import Login from './components/auth/Login'; // Changed from Register
import SignUp from './components/auth/SignUp'; // Updated import path
import LoginPage from './components/auth/LoginPage'; // Updated import statement
import { auth } from './firebase'; // Updated firebase import path
import { onAuthStateChanged } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/theme.css';
import './styles/animations.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/" element={user ? <Navigate to="/home" /> : <SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
