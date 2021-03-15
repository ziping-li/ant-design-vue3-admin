{
  /* <route>
  meta:
    title: t('OtpInputComponent.Title')
    permissionCode: view:components_otp-input
    head:
      title: t('OtpInputComponent.Head.Title')
</route> */
}
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import OtpInput from '@convue-lib/otp-input';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const formState = reactive({
      value1: '',
      value2: '12',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
    });
    const errorMessage = '无效的验证码';

    return () => (
      <>
        <page-header title={t('OtpInputComponent.Title')}>
          <span>
            {t('OtpInputComponent.PageDescription')}
            <a href="https://ziping-li.github.io/convue-lib/#/otp-input" target="_blank">
              https://ziping-li.github.io/convue-lib/#/otp-input
            </a>
          </span>
        </page-header>

        <div class="p-5">
          <a-card bordered={false}>
            <a-row gutter={[20, 20]}>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpInputComponent.Basic')} bordered={false}>
                  <OtpInput v-model={formState.value1}></OtpInput>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpInputComponent.Autofocus')} bordered={false}>
                <OtpInput v-model={formState.value2} autofocus></OtpInput>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpInputComponent.Numbers')} bordered={false}>
                <OtpInput v-model={formState.value3} numbers={4}></OtpInput>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpInputComponent.Size')} bordered={false}>
                <OtpInput v-model={formState.value4} size="small"></OtpInput>
                <OtpInput v-model={formState.value5} size="default"></OtpInput>
                <OtpInput v-model={formState.value6} size="large"></OtpInput>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpInputComponent.CustomStyle')} bordered={false}>
                <OtpInput v-model={formState.value6} style={{ border: '1px solid #ddd' }}></OtpInput>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpInputComponent.Validate')} bordered={false}>
                <OtpInput v-model={formState.value6} error-message={errorMessage}></OtpInput>
                </a-card>
              </a-col>
            </a-row>
          </a-card>
        </div>
      </>
    );
  },
});
