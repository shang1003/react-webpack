
import { lazy } from 'react';
import BaseLayout from '../../layouts/base/index';
import Test from '../../page/test1/App';
import OverView from '../../page/overview/App';
import Login from '../../page/auth/App';
import { E404 } from '../../page/404';
const PATH = '/';

export default [
  {
    path: PATH,
    component: BaseLayout,
    routes: [
    
      { path: `/base`, component: OverView },
      { path: `/test`, component: Test },
      { path: `/login`, component: Login },
       { path: `/` ,redirect:"/base/overview",exact:true},
    
      { path: '*', component: E404 },
    ],
  },
];
