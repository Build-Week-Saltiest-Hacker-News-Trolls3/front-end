import React from 'react';
import { Route } from "react-router-dom";
import OnboardNav from './components/onboarding/OnboardNav';
import DashNav from './components//MainApp/DashNav';
import LoginForm from './components/onboarding/LoginForm';
import RegistrationForm from './components/onboarding/RegistrationForm';
import SuccessPage from './components/onboarding/SuccessPage';
import TrollList from './components/MainApp/TrollList';
import UserFeed from './components/MainApp/UserFeed';
import FavoritesPage from './components/MainApp/FavoritesPage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
      <div className="App">
        <Route exact path={['/registration', '/', '/success']} component={OnboardNav}/>
        <Route exact path={['/feed', '/favorites', '/trolls']} component={DashNav}/>
        <Route exact path='/' component={LoginForm}/>
        <Route exact path='/registration' component={RegistrationForm}/>
        <Route exact path='/success' component={SuccessPage}/>
        <PrivateRoute exact path='/feed' component={UserFeed}/>
        <PrivateRoute exact path='/favorites' component={FavoritesPage}/>
        <PrivateRoute exact path='/trolls' component={TrollList}/>
      </div>
  ) 
}

export default App;
