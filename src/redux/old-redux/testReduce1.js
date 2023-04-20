const testReduce1 = (preState = { name: "bishang" }, action) => {
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
export default testReduce1;
