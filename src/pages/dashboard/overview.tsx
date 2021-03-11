{
  /* <route>
  meta:
    title: t('Overview.Title')
    permissionCode: view:dashboard_overview
    head:
      title: t('Overview.Head.Title')
</route> */
}
import { defineComponent, onMounted } from 'vue';
import { useToggle } from '@ant-design-vue/use';
import { useI18n } from 'vue-i18n';
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { numeral } from '@convue-lib/utils';

export default defineComponent({
  setup() {
    const [loading, { toggle }] = useToggle(true);
    const { t } = useI18n();

    onMounted(() => {
      setTimeout(() => {
        toggle();
      }, 1000);
    });

    return () => (
      <>
        <a-row class="px-3" gutter={[24, 24]}>
          <a-col span={24} sm={24} md={12} xl={6}>
            <chart-card
              loading={loading.value}
              title={t('Overview.TotalSales')}
              total="￥126,560"
              v-slots={{
                action: () => (
                  <a-tooltip title={t('Overview.Introduce')}>
                    <InfoCircleOutlined />
                  </a-tooltip>
                ),
                footer: () => (
                  <>
                    {t('Overview.DaySales')}
                    <span>￥ 234.56</span>
                  </>
                ),
              }}
            >
              <trend
                flag="up"
                class="mr-4"
                v-slots={{
                  term: () => <span>{t('Overview.Week')}</span>,
                }}
              >
                12%
              </trend>
              <trend
                flag="down"
                v-slots={{
                  term: () => <span>{t('Overview.Day')}</span>,
                }}
              >
                11%
              </trend>
            </chart-card>
          </a-col>
          <a-col span={24} sm={24} md={12} xl={6}>
            <chart-card
              loading={loading.value}
              title={t('Overview.Visits')}
              total={numeral(8846).format('0,0')}
              v-slots={{
                action: () => (
                  <a-tooltip title={t('Overview.Introduce')}>
                    <InfoCircleOutlined />
                  </a-tooltip>
                ),
                footer: () => (
                  <>
                    {t('Overview.DayVisits')}
                    <span> {numeral(1234).format('0,0')}</span>
                  </>
                ),
              }}
            >
              <div style="transform: translateY(10px);">
                <mini-area />
              </div>
            </chart-card>
          </a-col>
        </a-row>
      </>
    );
  },
});
