const testReduce2 = (preState = { age: "年龄" }, action) => {
  const newState = { ...preState };
  switch (action.type) {
    case "test2":
      newState.age = "年龄" + action.value;
      return newState;
    default:
      return preState;
  }
};
export default testReduce2;
