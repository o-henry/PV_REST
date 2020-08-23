//@ts-nocheck
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Onboard, Main, Login, SignUp, Statistics } from "@/pages";
import { useStores } from "@/hooks";

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
const PrivateRoute = observer(
  ({ component: Component, ...rest }: any): React.ReactElement => {
    const { event } = useStores();

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
