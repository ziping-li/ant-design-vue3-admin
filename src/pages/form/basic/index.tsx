{
  /* <route>
  meta:
    title: t('BasicForm.Title')
    permissionCode: view:form_basic
    head:
      title: t('BasicForm.Head.Title')
</route> */
}
import { defineComponent, reactive, toRaw } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@ant-design-vue/use';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const labelCol = { lg: { span: 7 }, sm: { span: 7 } };
    const wrapperCol = { lg: { span: 10 }, sm: { span: 17 } };
    const formState = reactive({
      name: '',
      buildTime: [],
      description: '',
      type: '',
      customer: '',
      invites: '',
      weight: null,
      target: 1,
      people: [],
    });
    const rules = reactive({
      name: [
        {
          required: true,
          message: t('BasicForm.NameValidator'),
        },
      ],
      buildTime: [
        {
          required: true,
          type: 'array',
          message: t('BasicForm.BuildTimeValidator'),
        },
      ],
      description: [
        {
          required: true,
          message: t('BasicForm.DescriptionValidator'),
        },
      ],
      type: [
        {
          required: true,
          message: t('BasicForm.TypeValidator'),
        },
      ],
      customer: [
        {
          required: true,
          message: t('BasicForm.CustomerValidator'),
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
        <page-header title={t('BasicForm.Title')}>
          <span>{t('BasicForm.PageDescription')}</span>
        </page-header>

        <div class="p-5">
          <a-card body-style={{ padding: '24px 32px 0' }} bordered={false}>
            <a-form labelCol={labelCol} wrapperCol={wrapperCol}>
              <a-form-item label={t('BasicForm.Name')} {...validateInfos.name}>
                <a-input
                  v-model={[formState.name, 'value']}
                  placeholder={t('BasicForm.NamePlaceholder')}
                />
              </a-form-item>
              <a-form-item label={t('BasicForm.BuildTime')} {...validateInfos.buildTime}>
                <a-range-picker v-model={[formState.buildTime, 'value']} />
              </a-form-item>
              <a-form-item label={t('BasicForm.Description')} {...validateInfos.description}>
                <a-textarea
                  v-model={[formState.description, 'value']}
                  rows="4"
                  placeholder={t('BasicForm.DescriptionPlaceholder')}
                />
              </a-form-item>
              <a-form-item label={t('BasicForm.Type')} {...validateInfos.type}>
                <a-textarea
                  v-model={[formState.type, 'value']}
                  rows="4"
                  placeholder={t('BasicForm.TypePlaceholder')}
                />
              </a-form-item>
              <a-form-item label={t('BasicForm.Customer')} {...validateInfos.customer}>
                <a-input
                  v-model={[formState.customer, 'value']}
                  placeholder={t('BasicForm.CustomerPlaceholder')}
                />
              </a-form-item>
              <a-form-item label={t('BasicForm.Invites')}>
                <a-input
                  v-model={[formState.invites, 'value']}
                  placeholder={t('BasicForm.InvitesPlaceholder')}
                />
              </a-form-item>
              <a-form-item label={t('BasicForm.Weight')}>
                <a-input-number v-model={[formState.weight, 'value']} min={0} max={100} />
                <span> %</span>
              </a-form-item>
              <a-form-item label={t('BasicForm.Target')} help={t('BasicForm.Help')}>
                <a-radio-group v-model={[formState.target, 'value']}>
                  <a-radio value={1}>{t('BasicForm.Public')}</a-radio>
                  <a-radio value={2}>{t('BasicForm.PartiallyPublic')}</a-radio>
                  <a-radio value={3}>{t('BasicForm.Private')}</a-radio>
                </a-radio-group>
                <a-form-item v-show={toRaw(formState).target === 2}>
                  <a-select
                    style="width: 200px"
                    mode="multiple"
                    v-model={[formState.people, 'value']}
                  >
                    <a-select-option value={4}>{t('BasicForm.Option.A')}</a-select-option>
                    <a-select-option value={5}>{t('BasicForm.Option.B')}</a-select-option>
                    <a-select-option value={6}>{t('BasicForm.Option.C')}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-form-item>

              <a-form-item wrapperCol={{ span: 24 }} class="text-center">
                <a-space>
                  <a-button type="primary" onClick={onSubmit}>
                    {t('BasicForm.Submit')}
                  </a-button>
                  <a-button>{t('BasicForm.Save')}</a-button>
                </a-space>
              </a-form-item>
            </a-form>
          </a-card>
        </div>
      </>
    );
  },
});
