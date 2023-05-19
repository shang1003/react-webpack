
import Test from '../Test1';
import {E404} from '../../404';
const PATH = '/test';
export default [
      { path: `${PATH}/content`, component: Test, exact: true },
      { path: `*`, component: E404 },
];
