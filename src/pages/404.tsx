import { defineComponent, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const navigateTo = getCurrentInstance()?.appContext.config.globalProperties.$navigateTo;

    return () => (
      <div class="pt-12">
        <a-result
          status="404"
          title="404"
          sub-title={t('404.Description')}
          v-slots={{
            extra: () => (
              <a-space>
                <a-button onClick={() => navigateTo('/')}>{t('404.BackHome')}</a-button>
                <a-button type="primary" onClick={() => navigateTo()}>
                  {t('404.ReturnPrevious')}
                </a-button>
              </a-space>
            ),
          }}
        ></a-result>
      </div>
    );
  },
});
