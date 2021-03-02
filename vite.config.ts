import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import convue from 'convue';

export default defineConfig({
  plugins: [
    vueJsx(),
    ...convue({
      styles: ['@convue-lib/styles', 'ant-design-vue/dist/antd.css'],
      modules: ['@convue-lib/container', 'ant-design-vue'],
    }),
  ],
});
