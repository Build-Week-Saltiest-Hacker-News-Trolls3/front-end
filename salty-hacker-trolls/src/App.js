import React from 'react';
import { Route } from "react-router-dom";
import OnboardNav from './components/onboarding/OnboardNav';
import DashNav from './components//MainApp/DashNav';
import LoginForm from './components/onboarding/LoginForm';
import RegistrationForm from './components/onboarding/RegistrationForm';
import SuccessPage from './components/onboarding/SuccessPage';

import UserFeed from './components/MainApp/UserFeed';
import FavoritesPage from './components/MainApp/FavoritesPage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
      <div className="App">
        <Route exact path={['/registration', '/login', '/success']} component={OnboardNav}/>
        <Route exact path={['/feed', '/favorites']} component={DashNav}/>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/registration' component={RegistrationForm}/>
        <Route exact path='/success' component={SuccessPage}/>
        <PrivateRoute exact path='/feed' component={UserFeed}/>
        <PrivateRoute exact path='/favorites' component={FavoritesPage}/>
      </div>
  ) 
}

export default App;
