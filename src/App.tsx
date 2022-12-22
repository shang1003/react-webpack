
import React from "react";
import ReactDOM from "react-dom/client";
import './assets/css/index.less'
import './assets/css/base.css'
import ImageTest from "./component/ImageTest.jsx";
import DragDrop from "./component/DragDrop.jsx";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Draggable from 'react-draggable'; // The default
import {TutorialApp} from './component/00-chessboard/TutorialApp'
const App  = function()  {
  return (
  <DndProvider backend={HTML5Backend } >
      <DragDrop/>
      <TutorialApp/>
				</DndProvider>
  )
};
export default App;