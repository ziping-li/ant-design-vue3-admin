import { UserConfigExport, ConfigEnv } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import convue from 'convue';

const PRIMARY_COLOR = '#4aa271';
const MOCK_SERVER_PROD_ENABLE = true;

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': PRIMARY_COLOR,
          },
        },
      },
    },
    plugins: [
      vueJsx(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && MOCK_SERVER_PROD_ENABLE,
        logger: true,
      }),
      ...convue({
        head: {
          title: 'Ant Design Admin',
        },
        loading: PRIMARY_COLOR,
        progress: {
          color: PRIMARY_COLOR,
        },
        page: {
          router: {
            scrollBehavior: () => {
              return { x: 0, y: 0 };
            },
          },
        },
        locale: {
          useCookie: {
            cookieKey: 'ant_design_vue3_admin_i18n',
            expires: 365,
          },
        },
        styles: ['ant-design-vue/dist/antd.less', '@convue-lib/styles'],
        modules: ['ant-design-vue', '@convue-lib/container'],
      }),
    ],
  };
};
