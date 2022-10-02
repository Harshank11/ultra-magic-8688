import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Reports'
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* <Home/> */}
      {/* <Reports/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reports' component={Reports} />
        <Route path='/login' element={<Login/>} />
        <Route path='/tryitfree' element={<Signup/>} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
