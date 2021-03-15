{
  /* <route>
  meta:
    title: t('OtpSendComponent.Title')
    permissionCode: view:components_otp-send
    head:
      title: t('OtpSendComponent.Head.Title')
</route> */
}
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import OtpSend from '@convue-lib/otp-send';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const callback = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      });
    };
    return () => (
      <>
        <page-header title={t('OtpSendComponent.Title')}>
          <span>
            {t('OtpSendComponent.PageDescription')}
            <a href="https://ziping-li.github.io/convue-lib/#/otp-send" target="_blank">
              https://ziping-li.github.io/convue-lib/#/otp-send
            </a>
          </span>
        </page-header>

        <div class="p-5">
          <a-card bordered={false}>
            <a-row gutter={[20, 20]}>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpSendComponent.Basic')} bordered={false}>
                  <OtpSend callback={callback}></OtpSend>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpSendComponent.ChangeButton')} bordered={false}>
                  <OtpSend type="primary" callback={callback}></OtpSend>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpSendComponent.ChangeText')} bordered={false}>
                  <OtpSend
                    callback={callback}
                    initial-text={t('OtpSendComponent.Send')}
                    disabled-text="${time} s"
                  ></OtpSend>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpSendComponent.Chache')} bordered={false}>
                  <OtpSend callback={callback} cache-key="a-register-otp"></OtpSend>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('OtpSendComponent.Duration')} bordered={false}>
                  <OtpSend callback={callback} duration="90" cache-key="a-login-otp"></OtpSend>
                </a-card>
              </a-col>
            </a-row>
          </a-card>
        </div>
      </>
    );
  },
});
