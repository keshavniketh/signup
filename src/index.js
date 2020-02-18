import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import Login from './login.jsx';
import './loginpage.css';
import Signup from './loginpage.jsx';
import adminlogin from './adminlogin.jsx'
import Time from './display.jsx';
import studentlogin from './studentlogin';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Redirect
  } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
  

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminlogin" component={adminlogin} />
        <Route exact path="/studentlogin" component={studentlogin} />
        <Route exact path="/display" component={Time} />
        </Switch>
    </Router>
  </React.Fragment>,
  document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
