//@ts-nocheck
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Onboard, Main, Login, SignUp, Statistics } from "@/pages";

const App = ({ hideLoader }: any) => {
  useEffect(hideLoader, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Onboard} />

          <Route path="/login" component={Login} />

          <Route path="/signup" component={SignUp} />

          <PrivateRoute path="/main" component={Main} />

          <PrivateRoute path="/statistics" component={Statistics} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

/* Auth Routing */
function PrivateRoute({
  component: Component,
  ...rest
}: any): React.ReactElement {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={({ props }) =>
        isAuthenticated ? (
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
