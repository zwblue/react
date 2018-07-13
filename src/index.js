import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// import { counter } from "./index.redux"; //单一的只用到counter一个
import reducer from './reducer.js'
import Auth from './Auth.js'
import Dashboard from './Dashboard.js'
// 新建store
// compose 合并函数
const store = createStore(reducer, compose(applyMiddleware(thunk)));
// , window.devToolsExtension ? window.devToolsExtension() :() => {}
// 用provider将最外层的app

// 登录
// 没有登录信息 统一跳转到login
// 页面  
// 二营
// 一营
// 骑兵连 redux管理
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>{/* Switch中的路由都是全局匹配 === exact 只渲染命中的第一个路由 */}
        <Route path='/login' component={Auth}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to='/dashboard'></Redirect>  {/* 放在最后，当没有匹配的时候就会重定位到这个路由 */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
