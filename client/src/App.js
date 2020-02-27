import React from 'react';
import {Route, Switch} from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';
import Signup from './components/signup';
import SignIn from './components/signin';
import UsersList from './components/usersList';

import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Node Auth3 Project</h1>
      <Switch>
        <PrivateRoute exact path='/users' component={UsersList} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/' component={Signup} />
      </Switch>
      
    </div>
  );
}

export default App;
