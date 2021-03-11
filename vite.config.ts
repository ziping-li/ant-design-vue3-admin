import { UserConfigExport, ConfigEnv } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import convue from 'convue';
import {
  primaryColor,
  textColor,
  i18nUseCookie,
  mockServerProdEnable,
} from './src/config/constants';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': primaryColor,
            'heading-color': textColor,
            'text-color': textColor,
            'card-head-color': textColor,
          },
        },
      },
    },
    plugins: [
      vueJsx(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && mockServerProdEnable,
        logger: true,
      }),
      ...convue({
        head: {
          title: 'Ant Design Admin',
        },
        loading: primaryColor,
        progress: {
          color: primaryColor,
        },
        page: {
          router: {
            scrollBehavior: () => {
              return { x: 0, y: 0 };
            },
          },
        },
        locale: {
          useCookie: i18nUseCookie,
        },
        styles: ['ant-design-vue/dist/antd.less', '@convue-lib/styles'],
        modules: ['ant-design-vue'],
      }),
    ],
  };
};
