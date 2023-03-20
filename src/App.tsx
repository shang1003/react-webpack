import "./assets/css/index.less";
import "./assets/css/base.css";
import React from 'react'
import DragDrop from "./component/DragDrop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TutorialApp } from "./component/00-chessboard/TutorialApp";
import Context from './component/context'
import emitter from "./event";
const App = function () {
  const sendEvent = () => {
    emitter.publish("changeMessage", { detail: { name: "bishang" } });
  };
  return (
    <DndProvider backend={HTML5Backend}>
      {/* <DragDrop  /> */}
      {/* <TutorialApp /> */}
      <Context/>
      <button onClick={sendEvent} 
      >点击</button>
    </DndProvider>
  );
};
export default App;
