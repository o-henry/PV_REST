//@ts-nocheck
import React, { useEffect, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Onboard, Main, Login } from "@/pages";
import { kakaoAPI } from "@/utils/kakao.api";

const token = window.localStorage.getItem("token");

const App: React.FC = () => {
  const kakao = kakaoAPI();

  useEffect(() => {
    kakao.initKakao();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Onboard} />
          <Route path="/login" component={Login} />
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
        isAuthenticated ? (
          <Main />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}
