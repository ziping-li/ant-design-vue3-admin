import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import convue from 'convue';

const PRIMARY_COLOR = '#4aa271';

export default defineConfig({
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
      styles: [
        'ant-design-vue/dist/antd.less',
        '@convue-lib/styles',
      ],
      modules: ['ant-design-vue', '@convue-lib/container'],
    }),
  ],
});
