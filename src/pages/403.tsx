{
  /* <route>
  meta:
    layout: empty
    head:
      title: Ant Design Admin - 403
</route> */
}

import { defineComponent, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const navigateTo = getCurrentInstance()?.appContext.config.globalProperties.$navigateTo;

    return () => (
      <div class="pt-12">
        <a-result
          status="403"
          title="403"
          sub-title={t('ErrorPage.403')}
          v-slots={{
            extra: () => (
              <a-space>
                <a-button onClick={() => navigateTo('/')}>{t('ErrorPage.BackHome')}</a-button>
                <a-button type="primary" onClick={() => navigateTo()}>
                  {t('ErrorPage.ReturnPrevious')}
                </a-button>
              </a-space>
            ),
          }}
        ></a-result>
      </div>
    );
  },
});
