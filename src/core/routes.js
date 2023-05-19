import BlankLayout from '../layouts/Blank';
import Login from '../page/auth/App';
import {E404} from '../page/404';
import { lazy } from 'react';
// const Basic = import('../basic/App')
import Basic from '../basic/App'

export default [
  {
    component: BlankLayout,
    routes: [
      // {
      //   path: '/',
      //   redirect: { from: '/', to: '/base/overview', exact: true },
      // },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/',
        component: Basic,
      },
      {
        path: '*',
        component: E404,
      },
    ],
  },
];
