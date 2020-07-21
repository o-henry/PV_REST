import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main, Login } from "@/pages";

const App: React.FC = () => {
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
