import { lazy } from "react";
import BaseLayout from "layouts/base/index";
const Test = lazy(() => import("pages/test1/App"));
const OverView = lazy(() => import("pages/overview/App"));
const Login = lazy(() => import("pages/auth/App"));
const E404 = lazy(() => import("pages/404"));
const PATH = "/";

export default [
  {
    path: PATH,
    component: BaseLayout,
    routes: [
      { path: `/base`, component: OverView },
      { path: `/test`, component: Test },
      { path: `/login`, component: Login },
      { path: "*", component: E404 },
    ],
  },
];
