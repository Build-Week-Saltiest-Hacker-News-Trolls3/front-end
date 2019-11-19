import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

import './components/LoginForm';
import FormikRegistrationForm from './components/RegistrationForm';
import FormikLoginForm from './components/LoginForm';
import { AppContextProvider } from './contexts/AppContext'
import UserFeed from './components/MainApp/UserFeed'
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <AppContextProvider>
      <div className="App">
         <nav>
        <Link to='/login'>Login</Link>
        <Link to='/registration'>Sign Up</Link>
      </nav>
      <Switch>
        <Route path='/login' component={FormikLoginForm}/>
        <Route path='/registration' component={FormikRegistrationForm}/>
        <PrivateRoute exact path='/userfeed' component={UserFeed}/>
      </Switch>
      </div>
    </AppContextProvider>
  ) 
}

export default App
