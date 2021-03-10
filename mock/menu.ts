import { MockMethod } from 'vite-plugin-mock';
import menuSchema from '../schemes/menu';

interface queryDto {
  locale?: 'en-US' | 'zh-CN';
}

export default [
  // 查询通知
  {
    url: '/api/menu',
    method: 'get',
    response: ({ query }) => {
      let { locale }: queryDto = query;

      if (!locale) {
        locale = 'en-US';
      }

      return {
        code: 'S_00000',
        data: menuSchema[locale],
      };
    },
  },
] as MockMethod[];
