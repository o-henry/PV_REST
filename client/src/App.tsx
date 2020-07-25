//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Main, Login } from "@/pages";
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
          <PrivateRoute exact path="/" component={Main} />
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

  useEffect(() => {
    token && setIsAuthenticated(true);
  }, [token, isAuthenticated]);

  console.log("nooooooo", isAuthenticated);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}
