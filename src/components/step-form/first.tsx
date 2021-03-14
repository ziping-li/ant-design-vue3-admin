import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@ant-design-vue/use';
import './first.less';

export default defineComponent({
  emits: {
    nextStep: null,
  },
  setup(_props, { emit }) {
    const { t } = useI18n();
    const labelCol = { lg: { span: 5 }, sm: { span: 5 } };
    const wrapperCol = { lg: { span: 19 }, sm: { span: 19 } };
    const formState = reactive({
      paymentUser: '',
      payment: 'alipay',
      payType: 'test@example.com',
      name: 'Alex',
      money: '5000',
    });
    const rules = reactive({
      paymentUser: [
        {
          required: true,
          type: 'number',
          message: t('StepForm.paymentUserValidator'),
        },
      ],
      payType: [
        {
          required: true,
          message: t('StepForm.payTypeValidator'),
        },
      ],
      name: [
        {
          required: true,
          message: t('StepForm.NameValidator'),
        },
      ],
      money: [
        {
          required: true,
          message: t('StepForm.MoneyValidator'),
        },
      ],
    });
    const { validate, validateInfos } = useForm(formState, rules);

    const nextStep = () => {
      validate()
        .then(() => {
          emit('nextStep');
        })
        .catch((err) => {
          console.log('error', err);
        });
    };

    return () => (
      <>
        <a-form
          labelCol={labelCol}
          wrapperCol={wrapperCol}
          style="max-width: 500px; margin: 40px auto 0;"
        >
          <a-form-item label={t('StepForm.paymentUser')} {...validateInfos.paymentUser}>
            <a-select
              v-model={[formState.paymentUser, 'value']}
              placeholder="ant-design@alipay.com"
            >
              <a-select-option value={1}>ant-design@alipay.com</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label={t('StepForm.payType')}>
            <a-input-group style="display: inline-block; vertical-align: middle" compact={true}>
              <a-select v-model={[formState.payment, 'value']} style="width: 100px">
                <a-select-option value="alipay">{t('StepForm.Alipay')}</a-select-option>
                <a-select-option value="wexinpay">{t('StepForm.Wechat')}</a-select-option>
              </a-select>
              <a-input
                v-model={[formState.payType, 'value']}
                style={{ width: 'calc(100% - 100px)' }}
              />
            </a-input-group>
          </a-form-item>
          <a-form-item label={t('StepForm.Name')} {...validateInfos.name}>
            <a-input v-model={[formState.name, 'value']} />
          </a-form-item>
          <a-form-item label={t('StepForm.Money')} {...validateInfos.momey}>
            <a-input v-model={[formState.money, 'value']} prefix="￥" />
          </a-form-item>
          <a-form-item wrapperCol={{ span: 19, offset: 5 }}>
            <a-button type="primary" onClick={nextStep}>
              {t('StepForm.NextStep')}
            </a-button>
          </a-form-item>
        </a-form>
        <a-divider />
        <div class="step-form-style-desc">
          <h3>{t('StepForm.Introduce')}</h3>
          <h4>{t('StepForm.IntroduceTitle1')}</h4>
          <p>{t('StepForm.IntroduceDescription')}</p>
          <h4>{t('StepForm.IntroduceTitle2')}</h4>
          <p>{t('StepForm.IntroduceDescription')}</p>
        </div>
      </>
    );
  },
});
