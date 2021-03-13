import { MockMethod } from 'vite-plugin-mock';
import {
  miniArea,
  miniBar,
  barData,
  barData2,
  rankList,
  searchData,
  pieData,
  projects,
  movements,
  radarData,
  teams,
} from '../schemes/dashboard';

export default [
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

  {
    url: '/api/workplace/projects',
    method: 'get',
    response: () => {
      return {
        code: 'S_00000',
        data: projects,
      };
    },
  },

  {
    url: '/api/workplace/movements',
    method: 'get',
    response: () => {
      return {
        code: 'S_00000',
        data: movements,
      };
    },
  },

  {
    url: '/api/workplace/radar',
    method: 'get',
    response: () => {
      return {
        code: 'S_00000',
        data: radarData,
      };
    },
  },

  {
    url: '/api/workplace/teams',
    method: 'get',
    response: () => {
      return {
        code: 'S_00000',
        data: teams,
      };
    },
  },


] as MockMethod[];
