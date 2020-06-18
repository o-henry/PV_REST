import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "@/pages";
import { kakaoAPI } from "@/util/kakaoAPI";

const App = () => {
  const kakao = kakaoAPI();

  useEffect(() => {
    kakao.initKakao();
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
