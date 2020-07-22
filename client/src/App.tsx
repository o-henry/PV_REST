import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main, Login } from "@/pages";
import { kakaoAPI } from "@/utils/kakao.api";

const App: React.FC = () => {
  const kakao = kakaoAPI();

  useEffect(() => {
    kakao.initKakao();
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
