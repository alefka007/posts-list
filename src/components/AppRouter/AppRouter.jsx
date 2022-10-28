import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';
import { loggedInContext } from '../../context/context';
import { useContext } from 'react';

const AppRouter = () => {
  const { loggedIn } = useContext(loggedInContext);

  return (
    <Routes>
      {loggedIn ?
        privateRoutes.map((rout, index) => (
          <Route key={index} path={rout.path} element={rout.element} />
        )) :
        publicRoutes.map((rout, index) => (
          <Route key={index} path={rout.path} element={rout.element} />
        ))
      }
    </Routes>
  );
};

export default AppRouter;