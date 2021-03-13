import { defineComponent } from 'vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { useI18n } from 'vue-i18n';
import './App.less';

export default defineComponent({
  name: 'App',
  setup() {
    const { locale } = useI18n();
    return () => (
      <a-config-provider locale={locale.value === 'en-US' ? enUS : zhCN}>
        <router-view></router-view>
      </a-config-provider>
    );
  },
});
