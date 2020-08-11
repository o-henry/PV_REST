import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import { Provider } from "mobx-react";
import { EventStore } from "@/store";

const event = new EventStore();

const loader = document.querySelector(".loader");

console.log("aaaaaa", loader);

const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

setTimeout(
  () =>
    ReactDOM.render(
      <Provider event={event}>
        <App hideLoader={hideLoader} showLoader={showLoader} />
      </Provider>,
      document.getElementById("root")
    ),
  1000
);
