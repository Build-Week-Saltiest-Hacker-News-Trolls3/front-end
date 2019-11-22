import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunk))
console.log('store', store)

ReactDOM.render(
<Provider store={store} >
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));

const queryString = require('query-string');

const params = queryString.parse(document.location.search);
const redirect = params.redirect; // this would be "abcdefg" if the query was "?redirect=abcdefg"
if (document.location.pathname === '/' && redirect) {
  document.location.assign(`${document.location.origin}/${redirect}`);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
