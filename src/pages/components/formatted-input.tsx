{
  /* <route>
  meta:
    title: t('FormattedComponent.Title')
    permissionCode: view:components_formatted
    head:
      title: t('FormattedComponent.Head.Title')
</route> */
}
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import Formatted from '@convue-lib/formatted';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const formState = reactive({
      value1: '',
      value2: '',
    });

    return () => (
      <>
        <page-header title={t('FormattedComponent.Title')}>
          <span>
            {t('FormattedComponent.PageDescription')}
            <a href="https://ziping-li.github.io/convue-lib/#/formatted" target="_blank">
              https://ziping-li.github.io/convue-lib/#/formatted
            </a>
          </span>
        </page-header>

        <div class="p-5">
          <a-card bordered={false}>
            <a-row gutter={[20, 20]}>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('FormattedComponent.Currency')} bordered={false}>
                  <Formatted v-model={formState.value1}></Formatted>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('FormattedComponent.Date')} bordered={false}>
                <Formatted v-model={formState.value2} autofocus></Formatted>
                </a-card>
              </a-col>
            </a-row>
          </a-card>
        </div>
      </>
    );
  },
});
