import { createStore, combineReducers } from "redux";
import testReduce1 from "./testReduce1";
import testReduce2 from "./testReduce2";
//合并reduce
const reduce = combineReducers({
  testReduce1,
  testReduce2,
});
const store = createStore(reduce);
export default store;
