import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import Login from './container/login/login.js'
import Register from './container/register/register.js'


import reducer from './reducer'
import './config'

import AuthRoute from './component/authroute/authroute';

const store = createStore(reducer, compose(applyMiddleware(thunk)));
// , window.devToolsExtension ? window.devToolsExtension() :() => {}
function Boss(){
  return <h2>Boss</h2>
}
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path='/boss' component={Boss}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
