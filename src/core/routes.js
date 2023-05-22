import BlankLayout from "layouts/Blank";
import Login from "pages/auth/App";
import { E404 } from "pages/404";
import { lazy } from "react";
// const Basic = import('../basic/App')
import Basic from "@/basic/App";

export default [
  {
    component: BlankLayout,
    routes: [
      // {
      //   path: '/',
      //   redirect: { from: '/', to: '/base/overview', exact: true },
      // },
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
    ],
  },
];
