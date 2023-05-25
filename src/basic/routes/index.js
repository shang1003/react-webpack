import BaseLayout from "layouts/base/index";
import Test from "pages/test1/App";
import OverView from "pages/overview/App";
import Login from "pages/auth/App";
import { E404 } from "pages/404";
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
