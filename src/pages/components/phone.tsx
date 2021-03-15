{
  /* <route>
  meta:
    title: t('PhoneComponent.Title')
    permissionCode: view:components_phone
    head:
      title: t('PhoneComponent.Head.Title')
</route> */
}
import { defineComponent, reactive, toRaw } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@ant-design-vue/use';
import Phone from '@convue-lib/phone';
import { isPhone } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const formState = reactive({
      value1: '',
      value2: '+8613617322615',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
    });
    const rules = reactive({
      value6: [
        {
          validator: (_rule: any, value: string) => {
            if (!value) {
              return Promise.reject(t('PhoneComponent.Required'));
            } else if (!isPhone(value)) {
              return Promise.reject(t('PhoneComponent.PhoneError'));
            } else {
              return Promise.resolve();
            }
          },
        },
      ],
    });

    const { validate, validateInfos } = useForm(formState, rules);
    const onSubmit = (event: MouseEvent) => {
      event.preventDefault();
      validate()
        .then(() => {
          console.log(toRaw(formState));
        })
        .catch((err) => {
          console.log('error', err);
        });
    };

    return () => (
      <>
        <page-header title={t('PhoneComponent.Title')}>
          <span>
            {t('PhoneComponent.PageDescription')}
            <a href="https://ziping-li.github.io/convue-lib/#/phone" target="_blank">
              https://ziping-li.github.io/convue-lib/#/phone
            </a>
          </span>
        </page-header>

        <div class="p-5">
          <a-card bordered={false}>
            <a-row gutter={[20, 20]}>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('PhoneComponent.Basic')} bordered={false}>
                  <Phone v-model={formState.value1}></Phone>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('PhoneComponent.DefaultValue')} bordered={false}>
                  <Phone v-model={formState.value2}></Phone>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('PhoneComponent.ChangeCode')} bordered={false}>
                  <Phone v-model={formState.value3} default-code="+1"></Phone>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('PhoneComponent.Separator')} bordered={false}>
                  <Phone
                    v-model={formState.value4}
                    separator="-"
                    onChange={(val: any) => console.log(val)}
                  ></Phone>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('PhoneComponent.NoNeedCode')} bordered={false}>
                  <Phone v-model={formState.value5} show-code={false}></Phone>
                </a-card>
              </a-col>
              <a-col md={12} sm={24} xs={24}>
                <a-card title={t('PhoneComponent.CheckPhone')} bordered={false}>
                  <a-form>
                    <a-form-item {...validateInfos.value6}>
                      <Phone v-model={formState.value6}></Phone>
                    </a-form-item>
                    <a-form-item class="mb-0">
                      <a-button type="primary" onClick={onSubmit}>
                        {t('PhoneComponent.Validate')}
                      </a-button>
                    </a-form-item>
                  </a-form>
                </a-card>
              </a-col>
            </a-row>
          </a-card>
        </div>
      </>
    );
  },
});
