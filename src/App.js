import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home/Home';
import Elections from './components/Elections';
import Login from './components/auth/Login';
import SignUp from './components/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/theme.css';
import './styles/animations.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
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
          <Route path="/" element={user ? <Navigate to="/home" /> : <SignUp />} />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/" />}
          />
          <Route path="/elections" element={<Elections />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
