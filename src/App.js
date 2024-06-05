
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Main from './components/Main';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} exact={true} />
        <Route path="/signin" element={<Signin />} exact={true} />
        <Route path="/details" element={<ProductDetails />} exact={true} />
      </Routes>
    </div>
  );
}

export default App;
