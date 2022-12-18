/*
 * @Author: bishang 1063352967@qq.com
 * @Date: 2022-11-05 11:25:20
 * @LastEditors: bishang 1063352967@qq.com
 * @LastEditTime: 2022-12-01 15:38:57
 * @FilePath: \demo\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.less";
import "./assets/css/base.css";
// import ImageTest from "./component/ImageTest.jsx";
import DragDrop from "./component/DragDrop.jsx";
import { DndProvider } from "react-dnd";
// import {  useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import Draggable from "react-draggable"; // The default
const root = ReactDOM.createRoot(document.getElementById("root")),
  App = () => {
    return (
      <div>
        {/* <h1 className="test">less样式</h1>
      <h1 className="css">css样式</h1>
      <h2 >Welcome to your First React App..毕尚!</h2> */}
        {/* <Draggable> */}
        <div>
          {/* <ImageTest/> */}
          <DndProvider backend={HTML5Backend}>
            <DragDrop />
          </DndProvider>
        </div>
      </div>
    );
  };

root.render(<App />, document.getElementById("root"));
