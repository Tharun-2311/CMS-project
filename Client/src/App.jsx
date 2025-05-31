import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Sign-Up';

import Menu from './pages/Menu';
import Order from './pages/Order'; 


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Sign-Up" element={<Signup />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Order" element={<Order />} />

    </Routes>
  );
}

export default App;
