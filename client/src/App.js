import React from 'react';
import {Route, Switch} from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';
import Signup from './components/signup';

import './App.css';
import SignIn from './components/signin';


function App() {
  return (
    <div className="App">
      <h1>Node Auth3 Project</h1>
      <Switch>
        <PrivateRoute exact path='/users' />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/' component={Signup} />
      </Switch>
      
    </div>
  );
}

export default App;
