import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import { Provider } from "mobx-react";
import { EventStore } from "@/store";

const event = new EventStore();

ReactDOM.render(
  <Provider event={event}>
    <App />
  </Provider>,
  document.getElementById("root")
);
