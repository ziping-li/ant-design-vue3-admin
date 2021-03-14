import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import './third.less';

export default defineComponent({
  emits: {
    finish: null,
  },
  setup(_props, { emit }) {
    const router = useRouter();
    const { t } = useI18n();

    const finish = () => {
      emit('finish');
    };
    const toOrderList = () => {
      router.push('/list/search');
    };

    return () => (
      <a-form>
        <a-result
          title={t('StepForm.Result')}
          is-success={true}
          sub-title={t('StepForm.Time')}
          style="max-width: 560px; margin: 40px auto 0;"
          v-slots={{
            extra: () => (
              <a-space>
                <a-button type="primary" onClick={finish}>
                  {t('StepForm.Again')}
                </a-button>
                <a-button onClick={toOrderList}>{t('StepForm.Check')}</a-button>
              </a-space>
            ),
          }}
        >
          <div class="information">
            <a-row>
              <a-col sm={8} xs={24}>
                {t('StepForm.paymentUser')}：
              </a-col>
              <a-col sm={16} xs={24}>
                ant-design@alipay.com
              </a-col>
            </a-row>
            <a-row>
              <a-col sm={8} xs={24}>
                {t('StepForm.payType')}：
              </a-col>
              <a-col sm={16} xs={24}>
                test@example.com
              </a-col>
            </a-row>
            <a-row>
              <a-col sm={8} xs={24}>
                {t('StepForm.Name')}：
              </a-col>
              <a-col sm={16} xs={24}>
                Alex
              </a-col>
            </a-row>
            <a-row>
              <a-col sm={8} xs={24}>
                {t('StepForm.Money')}：
              </a-col>
              <a-col sm={16} xs={24}>
                <span class="money">￥ 5,000.00</span>
              </a-col>
            </a-row>
          </div>
        </a-result>
      </a-form>
    );
  },
});
