import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import { loggedInContext } from './context/context';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('isAuth')) {
      setLoggedIn(true);
    }
  }, [])

  return (
    <loggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        {loggedIn
          ?
          <Navbar />
          : 
          null
        }
        <AppRouter />
      </BrowserRouter>
    </loggedInContext.Provider>
  );
};

export default App;