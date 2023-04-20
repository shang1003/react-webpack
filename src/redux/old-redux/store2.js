import { createStore } from "redux";
//不拆分store
const reduce = (preState = { name: "bishang" }, action) => {
  const newState = { ...preState };
  switch (action.type) {
    case "test":
      console.log(action, "action");
      newState.name = "bishang" + action.value;
      return newState;
    default:
      return preState;
  }
};

const store = createStore(reduce);
export default store;
