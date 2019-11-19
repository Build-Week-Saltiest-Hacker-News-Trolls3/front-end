import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

import './components/LoginForm';
import FormikRegistrationForm from './components/RegistrationForm';
import FormikLoginForm from './components/LoginForm';
import { AppContextProvider } from './contexts/AppContext'
import UserFeed from './components/MainApp/UserFeed'


function App() {
  return (
    <AppContextProvider>
      <div className="App">
         {/* <UserFeed />  */}
         <nav>
        <Link to='/login-form'>Login</Link>
        <Link to='/registration-form'>Sign Up</Link>
      </nav>
      <Switch>
        <Route path='/login-form' component={FormikLoginForm}/>
        <Route path='/registration-form' component={FormikRegistrationForm}/>
      </Switch>
      </div>
    </AppContextProvider>
  ) 
}

export default App
