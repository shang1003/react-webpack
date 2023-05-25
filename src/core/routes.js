import Login from "pages/auth/App";
import { E404 } from "pages/404";
import Basic from "@/basic/App";

export default [
  {
    path: "/",
    redirect: { from: "/", to: "/base/overview", exact: true },
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Basic,
  },
  {
    path: "*",
    component: E404,
  },
];
