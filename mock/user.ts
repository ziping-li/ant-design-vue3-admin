import { MockMethod } from 'vite-plugin-mock';
import userSchema from '../schemes/user';

export default [
  // 用户登录
  {
    url: '/api/login',
    method: 'post',
    response: ({ body }) => {
      console.log('username>>>>>>>', body.username);
      console.log('password>>>>>>>', body.password);

      const userInfo = userSchema.find((item) => item.name === body.username);

      // 用户不存在
      if (!userInfo) {
        return {
          code: 'E_00001',
          data: null,
        };
      }

      // 密码不正确
      if (userInfo.password !== body.password) {
        return {
          code: 'E_00002',
          data: null,
        };
      }

      return {
        code: 'S_00000',
        data: userInfo,
      };
    },
  },

  // 查询用户信息
  {
    url: '/api/queryUserInfo',
    method: 'get',
    response: ({ query }) => {
      console.log('id>>>>>>>>', query.id);

      const userInfo = userSchema.find((item) => item.id === Number(query.id));

      // 用户不存在
      if (!userInfo) {
        return {
          code: 'E_00001',
          data: null,
        };
      }

      return {
        code: 'S_00000',
        data: userInfo,
      };
    },
  },
] as MockMethod[];
