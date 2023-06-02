import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";
import "antd/dist/reset.css";
import store from "../store/mobx/rootStore";
import App from "./App";
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store.routing);
// get
const isLogin = !!JSON.parse(localStorage.getItem("userinfo"));
const render = (children) => {
  const currentPath = window.location.pathname;
  if (currentPath.indexOf("/login") > -1 && isLogin) {
    history.push("/");
  } else if (!isLogin) {
    history.push("/login");
  }
  ReactDOM.render(children, document.getElementById("root"));
};
render(<App rootStore={store} history={history} />);
