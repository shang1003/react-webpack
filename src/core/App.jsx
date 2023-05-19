import React from 'react'
import Context from '../component/context'//测试context
import OldRedux from '../component/oldRdeux/Test'//测试redux
import MobxTest from '../component/mobx/index'
import { Provider } from 'mobx-react'
import { Router } from 'react-router';
import emitter from "../event";
import renderRoutes from "../utils/RouterConfig";
import routes from "./routes";
import Base from "../basic/App";
import {AdminInfoContextProvider} from 'src/context/router/Router.jsx'
const App = function ({ rootStore,history }) {
  return (
    <Provider rootStore={rootStore}>
     <Router history={history}>
      <AdminInfoContextProvider>
      {renderRoutes(routes)}
          {/* <Base/> */}
      </AdminInfoContextProvider>
            </Router>
    </Provider>
  );
};
export default App;
