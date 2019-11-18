import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import './components/LoginForm';
import FormikRegistrationForm from './components/RegistrationForm';
import FormikLoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to='/login-form'>Login</Link>
        <Link to='/registration-form'>Sign Up</Link>
      </nav>
      <Switch>
        <Route path='/login-form' component={FormikLoginForm}/>
        <Route path='/registration-form' component={FormikRegistrationForm}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
