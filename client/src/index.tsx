import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import { Provider } from "mobx-react";
import { CookiesProvider } from "react-cookie";

import { EventStore } from "@/store";

const event = new EventStore();

const loader = document.querySelector(".loader");

const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

const loadUser = () => {
  try {
    const user = localStorage.getItem("user");
    if (!user) return;
  } catch (e) {
    console.log("localStorage is not working");
  }
};

loadUser();

setTimeout(() => {
  ReactDOM.render(
    <CookiesProvider>
      <Provider event={event}>
        <App hideLoader={hideLoader} showLoader={showLoader} />
      </Provider>
    </CookiesProvider>,
    document.getElementById("root")
  );
  clearTimeout(2000);
  loader.parentNode.removeChild(loader);
}, 1000);
