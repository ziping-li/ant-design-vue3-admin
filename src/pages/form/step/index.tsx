{
  /* <route>
  meta:
    title: t('StepForm.Title')
    permissionCode: view:form_step
    head:
      title: t('StepForm.Head.Title')
</route> */
}
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import './index.less';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const currentTab = ref(0);

    const nextStep = () => {
      if (currentTab.value < 2) {
        currentTab.value += 1;
      }
    };
    const prevStep = () => {
      if (currentTab.value > 0) {
        currentTab.value -= 1;
      }
    };
    const finish = () => {
      currentTab.value = 0;
    };

    return () => (
      <>
        <page-header title={t('StepForm.Title')}>
          <span>{t('StepForm.PageDescription')}</span>
        </page-header>

        <div class="p-5">
          <a-card bordered={false}>
            <a-steps class="steps" current={currentTab.value}>
              <a-step title={t('StepForm.Step1')} />
              <a-step title={t('StepForm.Step2')} />
              <a-step title={t('StepForm.Step3')} />
            </a-steps>
            <div class="content">
              {currentTab.value === 0 && <step-form-first onNextStep={nextStep}></step-form-first>}
              {currentTab.value === 1 && (
                <step-form-second onNextStep={nextStep} onPrevStep={prevStep}></step-form-second>
              )}
              {currentTab.value === 2 && <step-form-third onFinish={finish}></step-form-third>}
            </div>
          </a-card>
        </div>
      </>
    );
  },
});
