import React from "react";
import ReactDOM from "react-dom";
import  App  from "./App";
import 'antd/dist/reset.css';

import store from './store/mobx/rootStore'


ReactDOM.render(<App  rootStore={store}/>, document.getElementById("root"));