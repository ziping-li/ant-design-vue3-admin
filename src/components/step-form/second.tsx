import { defineComponent, ref, reactive, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@ant-design-vue/use';
import './second.less';

export default defineComponent({
  emits: {
    prevStep: null,
    nextStep: null,
  },
  setup(_props, { emit }) {
    const { t } = useI18n();
    let timer: any = null;
    const loading = ref(false);
    const labelCol = { lg: { span: 5 }, sm: { span: 5 } };
    const wrapperCol = { lg: { span: 19 }, sm: { span: 19 } };
    const formState = reactive({
      paymentPassword: '123456',
    });
    const rules = reactive({
      paymentPassword: [
        {
          required: true,
          message: t('StepForm.paymentPasswordValidator'),
        },
      ],
    });
    const { validate, validateInfos } = useForm(formState, rules);

    const nextStep = () => {
      loading.value = true;
      validate()
        .then(() => {
          timer = setTimeout(() => {
            loading.value = false;
            emit('nextStep');
          }, 1500);
        })
        .catch((err) => {
          loading.value = false;
          console.log('error', err);
        });
    };

    const prevStep = () => {
      emit('prevStep');
    };

    onBeforeUnmount(() => {
      clearTimeout(timer);
      timer = null;
    });

    return () => (
      <a-form
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        style="max-width: 500px; margin: 40px auto 0;"
      >
        <a-alert class="mb-6" closable={true} message={t('StepForm.Alert')} />
        <a-form-item label={t('StepForm.paymentUser')} class="stepFormText">
          ant-design@alipay.com
        </a-form-item>
        <a-form-item label={t('StepForm.payType')} class="stepFormText">
          test@example.com
        </a-form-item>
        <a-form-item label={t('StepForm.Name')} class="stepFormText">
          Alex
        </a-form-item>
        <a-form-item label={t('StepForm.Money')} class="stepFormText">
          ￥ 5,000.00
        </a-form-item>
        <a-divider />
        <a-form-item
          label={t('StepForm.paymentPassword')}
          class="stepFormText"
          {...validateInfos.paymentPassword}
        >
          <a-input
            v-model={[formState.paymentPassword, 'value']}
            type="password"
            style="width: 80%;"
          ></a-input>
        </a-form-item>
        <a-form-item wrapperCol={{ span: 19, offset: 5 }}>
          <a-space>
            <a-button loading={loading.value} type="primary" onClick={nextStep}>
              {t('StepForm.Submit')}
            </a-button>
            <a-button onClick={prevStep}>{t('StepForm.PrevStep')}</a-button>
          </a-space>
        </a-form-item>
      </a-form>
    );
  },
});
