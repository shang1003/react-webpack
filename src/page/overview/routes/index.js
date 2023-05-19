
import index from '..';
import {E404} from '../../404';
const PATH = '/base';
export default [
      { path: `${PATH}/overview`, component: index, exact: true },
      { path: `*`, component: E404, },
];
