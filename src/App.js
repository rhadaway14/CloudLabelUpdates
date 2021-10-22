import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Launch from './pages/launch';
import { Context } from './context/context';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LAUNCH}>
          <Launch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
