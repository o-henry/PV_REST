import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import { Provider } from "mobx-react";

import { EventStore } from "@/store";

const event = new EventStore();

const loadUser = () => {
  try {
    const user = localStorage.getItem("user");
    if (!user) return;
  } catch (e) {
    console.log("localStorage is not working");
  }
};

loadUser();

ReactDOM.render(
  <Provider event={event}>
    <App />
  </Provider>,
  document.getElementById("root")
);
