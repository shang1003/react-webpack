import React from "react";
// import Context from "../components/context"; //测试context
// import OldRedux from "../components/oldRdeux/Test"; //测试redux
// import MobxTest from "../components/mobx/index";//测试mobx
import { Provider } from "mobx-react";
import { Router } from "react-router";
import renderRoutes from "utils/RouterConfig";
import routes from "./routes";
import { AdminInfoContextProvider } from "@/context/router/Router.jsx";
const App = function ({ rootStore, history }) {
  return (
    <Router history={history}>
       <Provider rootStore={rootStore}>
    <AdminInfoContextProvider>
          {renderRoutes(routes)}{/* 整个系统 */}     
          {/* <MobxTest /> */}  {/* 测试mobx */}
          {/* <OldRedux/> */}{/* 测试redux */}
          {/* <Context/> */} {/*测试上下文*/}
      </AdminInfoContextProvider>
       </Provider>
    </Router>
  );
};
export default App;
