import { MockMethod } from 'vite-plugin-mock';
import notificationSchema from '../schemes/notification';

export default [
  // 查询通知
  {
    url: '/api/notification',
    method: 'get',
    response: () => {
      return {
        code: 'S_00000',
        data: notificationSchema,
      };
    },
  },
] as MockMethod[];
