{
  /* <route>
  meta:
    title: t('SuccessResult.Title')
    permissionCode: view:result_success
    head:
      title: t('SuccessResult.Head.Title')
</route> */
}
import { computed, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { queryMedia } from '@convue-lib/utils';
import { DingdingOutlined } from '@ant-design/icons-vue';
import './success.less';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const isMobile = ref<boolean>(false);
    queryMedia((data: string) => {
      isMobile.value = data === 'xs';
    });

    const result = computed(() => ({
      title: t('SuccessResult.ResultTitle'),
      description: t('SuccessResult.Description'),
    }));
    return () => (
      <a-card class="result-success" bordered={false}>
        <a-result
          status="success"
          title={result.value.title}
          sub-title={result.value.description}
          v-slots={{
            extra: () => (
              <a-space>
                <a-button type="primary">{t('SuccessResult.Return')}</a-button>
                <a-button>{t('SuccessResult.Project')}</a-button>
                <a-button>{t('SuccessResult.Print')}</a-button>
              </a-space>
            ),
          }}
        >
          <div class="content">
            <div class="title">{t('SuccessResult.OperateTitle')}</div>
            <a-row class="mb-4">
              <a-col xs={24} sm={12} md={12} lg={12} xl={6}>
                <span class="color-head">{t('SuccessResult.OperateId')}：</span>
                20180724089
              </a-col>
              <a-col xs={24} sm={12} md={12} lg={12} xl={6}>
                <span class="color-head">{t('SuccessResult.Principal')}：</span>
                {t('SuccessResult.Step1Operator')}
              </a-col>
              <a-col xs={24} sm={12} md={12} lg={12} xl={6}>
                <span class="color-head">{t('SuccessResult.OperateTime')}：</span>
                2016-12-12 ~ 2017-12-12
              </a-col>
            </a-row>
            <a-steps
              current={1}
              direction={isMobile.value ? 'vertical' : 'horizontal'}
              progress-dot
            >
              <a-step
                title={t('SuccessResult.Step1Title')}
                v-slots={{
                  title: () => <span>{t('SuccessResult.Step1Title')}</span>,
                  description: () => (
                    <>
                      <div class="step-title">
                        <div class="mt-2 mb-1">
                          {t('SuccessResult.Step1Operator')}
                          <DingdingOutlined class="ml-4" />
                        </div>
                        <div>2016-12-12 12:32</div>
                      </div>
                    </>
                  ),
                }}
              ></a-step>
              <a-step
                title={t('SuccessResult.Step2Title')}
                v-slots={{
                  title: () => <span>{t('SuccessResult.Step2Title')}</span>,
                  description: () => (
                    <>
                      <div class="step-title">
                        <div class="mt-2 mb-1">
                          {t('SuccessResult.Step2Operator')}
                          <DingdingOutlined class="ml-4" style={{ color: '#00A0E9' }} />
                        </div>
                        <div>
                          <a href="">{t('SuccessResult.Step2Extra')}</a>
                        </div>
                      </div>
                    </>
                  ),
                }}
              ></a-step>
              <a-step
                title={t('SuccessResult.Step3Title')}
                v-slots={{
                  title: () => <span>{t('SuccessResult.Step3Title')}</span>,
                }}
              ></a-step>
              <a-step
                title={t('SuccessResult.Step4Title')}
                v-slots={{
                  title: () => <span>{t('SuccessResult.Step4Title')}</span>,
                }}
              ></a-step>
            </a-steps>
          </div>
        </a-result>
      </a-card>
    );
  },
});
