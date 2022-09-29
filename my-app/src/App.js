import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Reports.js';
import Products from './Pages/Products';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home/>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/reports' component={Reports} />
        <Route path='/products' component={Products} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
