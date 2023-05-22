import request from "./request";

export const login = (data) => {
  return request.makeRequest({
    method: "post",
    data,
    url: "/login",
  });
};
export const getUseInfo = () => {
  return request.makeRequest({
    method: "get",
    url: "/useinfo",
  });
};
