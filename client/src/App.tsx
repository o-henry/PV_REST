//@ts-nocheck
import React, { useEffect, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Onboard, Main, Login, Statistics } from "@/pages";
import { kakaoAPI } from "@/utils/kakao.api";

const token = window.localStorage.getItem("token");

const App = ({ hideLoader }: any) => {
  const kakao = kakaoAPI();

  useEffect(() => {
    kakao.initKakao();
  }, []);

  useEffect(hideLoader, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Onboard token={token} />} />

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/main">
            <Main />
          </PrivateRoute>

          <PrivateRoute path="/statistics">
            <Statistics />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default App;

/* Auth Routing */
function PrivateRoute({ children, ...rest }: any): React.ReactElement {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log("***********", isAuthenticated, token);

  useEffect(() => {
    token && setIsAuthenticated(true);
  }, [token, isAuthenticated]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? children : <Redirect to="/login" />
      }
    />
  );
}
