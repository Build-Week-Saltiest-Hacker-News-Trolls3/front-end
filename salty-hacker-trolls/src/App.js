import React from 'react';
import { Route } from "react-router-dom";

import { AppContextProvider } from './contexts/AppContext'
import UserFeed from './components/MainApp/UserFeed'


function App() {
  return (
    <AppContextProvider>
      <div className="App">
         {/* <UserFeed />  */}
      </div>
    </AppContextProvider>
  );
}

export default App;
