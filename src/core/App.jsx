import React from "react";
// import Context from "../component/context"; //测试context
// import OldRedux from "../component/oldRdeux/Test"; //测试redux
// import MobxTest from "../component/mobx/index";//测试mobx
import { Provider } from "mobx-react";
import { Router } from "react-router";
import renderRoutes from "../utils/RouterConfig";
import routes from "./routes";
import { AdminInfoContextProvider } from "src/context/router/Router.jsx";
const App = function ({ rootStore, history }) {
  return (
    <Router history={history}>
    <AdminInfoContextProvider>
        <Provider rootStore={rootStore}>
          {renderRoutes(routes)}{/* 整个系统 */}     
          {/* <MobxTest /> */}  {/* 测试mobx */}
          {/* <OldRedux/> */}{/* 测试redux */}
          {/* <Context/> */} {/*测试上下文*/}
        </Provider>
      </AdminInfoContextProvider>
    </Router>
  );
};
export default App;
