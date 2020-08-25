//@ts-nocheck
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Onboard, Main, Login, SignUp, Statistics } from "@/pages";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Onboard} />

          <Route path="/login" component={Login} />

          <Route path="/signup" component={SignUp} />

          <Route path="/main" component={Main} />

          <Route path="/statistics" component={Statistics} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

/* Auth Routing */
const PrivateRoute = observer(
  ({ component: Component, ...rest }: any): React.ReactElement => {
    return (
      <Route
        {...rest}
        render={({ props }) =>
          localStorage.getItem("user") ? (
            <Component {...rest} {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    );
  }
);
