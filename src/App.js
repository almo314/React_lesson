import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
