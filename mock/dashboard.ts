import { MockMethod } from 'vite-plugin-mock';
import {
  miniArea,
  miniBar,
  barData,
  barData2,
  rankList,
  searchData,
  pieData,
} from '../schemes/dashboard';

export default [
  // 用户登录
  {
    url: '/api/dashboard/overview',
    method: 'get',
    response: () => {
      return {
        code: 'S_00000',
        data: {
          miniArea,
          miniBar,
          barData,
          barData2,
          rankList,
          searchData,
          pieData,
        },
      };
    },
  },
] as MockMethod[];
