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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const kakao = kakaoAPI();

  function PrivateRoute({ children, ...rest }: any) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? children : <Redirect to={{ pathname: "/login" }} />
        }
      />
    );
  }

  useEffect(() => {
    kakao.initKakao();
    token && setIsAuthenticated(true);
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Main />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
