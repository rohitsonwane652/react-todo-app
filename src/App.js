import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/Pages/SignIn.js';
// import Header from './components/Header';
// import Todo from './components/Todo';
import SignUp from './components/Pages/SignUp';
import Navbar from './components/Navbar/index';
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<div className='main'><TodoList /></div>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>

  );
}

export default App;
