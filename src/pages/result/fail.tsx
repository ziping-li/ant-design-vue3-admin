{
  /* <route>
  meta:
    title: t('FailResult.Title')
    permissionCode: view:result_fail
    head:
      title: t('FailResult.Head.Title')
</route> */
}
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RightOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';
import './fail.less';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const result = computed(() => ({
      title: t('FailResult.ResultTitle'),
      description: t('FailResult.Description'),
    }));
    return () => (
      <a-card class="result-fail" bordered={false}>
        <a-result
          status="error"
          title={result.value.title}
          sub-title={result.value.description}
          v-slots={{
            extra: () => <a-button type="primary">{t('FailResult.BtnText')}</a-button>,
          }}
        >
          <div class="desc">
            <div class="hint-title">{t('FailResult.HintTitle')}</div>
            <div class="mb-4">
              <CloseCircleOutlined class="mr-2" style={{ color: ' class="mr-2"' }} />
              {t('FailResult.HintText1')}
              <a class="ml-4">
                {t('FailResult.HintBtn1')} <RightOutlined />
              </a>
            </div>
            <div>
              <CloseCircleOutlined class="mr-2" style={{ color: ' class="mr-2"' }} />
              {t('FailResult.HintText2')}
              <a class="ml-4">
                {t('FailResult.HintBtn2')} <RightOutlined />
              </a>
            </div>
          </div>
        </a-result>
      </a-card>
    );
  },
});
