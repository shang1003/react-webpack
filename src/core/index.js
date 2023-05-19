import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import  App  from "./App";
import 'antd/dist/reset.css';

import store from '../store/mobx/rootStore'

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store.routing);
ReactDOM.render(<App  rootStore={store} history={history}/>, document.getElementById("root"));