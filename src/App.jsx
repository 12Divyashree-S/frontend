import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage';
import SignUp from './components/Signup';
//import ManufacturerPage1 from './components/ManufacturerPage1';
//import ManufacturerPage2 from './components/ManufacturerPage2';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/manufacturer1" element={<ManufacturerPage1 />} />
          <Route path="/manufacturer2" element={<ManufacturerPage2 />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
