import React from 'react';
import { Route } from "react-router-dom";
import OnboardNav from './components/onboarding/OnboardNav';
import DashNav from './components//MainApp/DashNav';
import LoginForm from './components/onboarding/LoginForm';
import RegistrationForm from './components/onboarding/RegistrationForm';
import SuccessPage from './components/onboarding/SuccessPage';

import { AppContextProvider } from './contexts/AppContext';
import UserFeed from './components/MainApp/UserFeed';
import FavoritesPage from './components/MainApp/FavoritesPage';
import PrivateRoute from './PrivateRoute';
import FavoritesPage from './components/MainApp/FavoritesPage';



function App() {
  return (
    <AppContextProvider>
      <div className="App">
         <nav>
        <Link to='/login'>Login</Link>
        <Link to='/registration'>Sign Up</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/userfeed'>Feed</Link>
      </nav>
     
        <Route path='/login' component={FormikLoginForm}/>
        <Route path='/registration' component={FormikRegistrationForm}/>
        <PrivateRoute exact path='/userfeed' component={UserFeed}/>
        <PrivateRoute exact path='/favorites' component={FavoritesPage}/>
  
      </div>
    </AppContextProvider>
  ) 
}

export default App;
