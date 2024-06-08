
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Main from './components/Main';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Register from './components/Register';
import { useState, useEffect } from 'react';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      handleAuth();
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Main handleAuth={handleAuth} userLoggedIn={userLoggedIn} />}
          exact={true}
        />
        <Route
          path="/signin"
          element={<Signin handleAuth={handleAuth} />}
          exact={true}
        />
        <Route path="/details" element={<ProductDetails />} exact={true} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
