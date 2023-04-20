import "./assets/css/index.less";
import React from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TutorialApp } from "./component/00-chessboard/TutorialApp";//象棋拖拽
import Context from './component/context'//测试context
import OldRedux from './component/oldRdeux/Test'//测试redux
import DragDrop from "./component/DragDrop";//DragDrop 组件
import MobxTest from './component/mobx/index'
import {Provider} from 'mobx-react'
import emitter from "./event";

const App = function ({rootStore}) {
  return (
    <Provider rootStore={rootStore}>
  <DndProvider backend={HTML5Backend}>
    <MobxTest/>
  </DndProvider>
    </Provider>
  
  );
};
export default App;