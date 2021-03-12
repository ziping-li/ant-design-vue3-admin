{
  /* <route>
  meta:
    title: t('Overview.Title')
    permissionCode: view:dashboard_overview
    head:
      title: t('Overview.Head.Title')
</route> */
}
import { computed, defineComponent, onMounted } from 'vue';
import { useToggle } from '@ant-design-vue/use';
import { useI18n } from 'vue-i18n';
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { numeral } from '@convue-lib/utils';
import { Datum } from '@antv/g2plot';
import { Lang } from '../../config/types';
import { miniArea, miniBar, barData, barData2, rankList } from '../../../schemes/charts';

export default defineComponent({
  setup() {
    const [loading, { toggle }] = useToggle(true);
    const { t, locale } = useI18n();
    const lang = locale.value;
    const rankLocaleList = computed(() => rankList[lang as Lang]);

    onMounted(() => {
      setTimeout(() => {
        toggle();
      }, 1000);
    });

    return () => (
      <div class="px-3">
        <a-row gutter={[20, 20]}>
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
                <chart-mini-area
                  data={miniArea}
                  formatter={(datum: Datum) => ({ name: t('Overview.Visits'), value: datum.y })}
                ></chart-mini-area>
              </div>
            </chart-card>
          </a-col>
          <a-col span={24} sm={24} md={12} xl={6}>
            <chart-card
              loading={loading.value}
              title={t('Overview.Payments')}
              total={numeral(6560).format('0,0')}
              v-slots={{
                action: () => (
                  <a-tooltip title={t('Overview.Introduce')}>
                    <InfoCircleOutlined />
                  </a-tooltip>
                ),
                footer: () => (
                  <>
                    {t('Overview.ConversionRate')}
                    <span>60%</span>
                  </>
                ),
              }}
            >
              <div style="transform: translateY(10px);">
                <chart-mini-bar
                  data={miniBar}
                  formatter={(datum: Datum) => ({ name: t('Overview.Payments'), value: datum.y })}
                ></chart-mini-bar>
              </div>
            </chart-card>
          </a-col>
          <a-col span={24} sm={24} md={12} xl={6}>
            <chart-card
              loading={loading.value}
              title={t('Overview.OperationalEffect')}
              total="78%"
              v-slots={{
                action: () => (
                  <a-tooltip title={t('Overview.Introduce')}>
                    <InfoCircleOutlined />
                  </a-tooltip>
                ),
                footer: () => (
                  <>
                    <trend
                      flag="down"
                      class="mr-4"
                      v-slots={{
                        term: () => <span>{t('Overview.Week')}</span>,
                      }}
                    >
                      12%
                    </trend>
                    <trend
                      flag="up"
                      v-slots={{
                        term: () => <span>{t('Overview.Day')}</span>,
                      }}
                    >
                      80%
                    </trend>
                  </>
                ),
              }}
            >
              <chart-mini-progress
                color="rgb(19, 194, 194)"
                target={80}
                percentage={78}
                height="8px"
              ></chart-mini-progress>
            </chart-card>
          </a-col>
        </a-row>

        <a-card
          class="mt-5"
          loading={loading.value}
          bordered={false}
          body-style={{ padding: '0', overflow: 'hidden' }}
        >
          <div class="salesCard">
            <a-tabs
              default-active-key="1"
              size="large"
              tab-bar-style={{ marginBottom: '24px', paddingLeft: '16px' }}
              v-slots={{
                tabBarExtraContent: () => (
                  <div class="d-none d-lg-block pr-4">
                    <a-radio-group class="mr-3" default-value="1" button-style="outline">
                      <a-radio-button value="1">{t('Overview.AllDay')}</a-radio-button>
                      <a-radio-button value="2">{t('Overview.AllWeek')}</a-radio-button>
                      <a-radio-button value="3">{t('Overview.AllMonth')}</a-radio-button>
                      <a-radio-button value="4">{t('Overview.AllYear')}</a-radio-button>
                    </a-radio-group>
                    <a-range-picker style={{ width: '256px' }} />
                  </div>
                ),
              }}
            >
              <a-tab-pane loading={loading.value} tab={t('Overview.Sales')} key="1">
                <div class="d-block d-lg-none pl-4 pb-2">
                  <a-radio-group class="mb-3 mr-3" default-value="1" button-style="outline">
                    <a-radio-button value="1">{t('Overview.AllDay')}</a-radio-button>
                    <a-radio-button value="2">{t('Overview.AllWeek')}</a-radio-button>
                    <a-radio-button value="3">{t('Overview.AllMonth')}</a-radio-button>
                    <a-radio-button value="4">{t('Overview.AllYear')}</a-radio-button>
                  </a-radio-group>
                  <a-range-picker style={{ width: '256px' }} />
                </div>
                <a-row>
                  <a-col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div class="p-8 pr-md-0 pt-md-0">
                      <chart-bar
                        data={barData}
                        title={t('Overview.SalesTrend')}
                        tooltipFormatter={(datum: Datum) => ({
                          name: t('Overview.Sales'),
                          value: datum.y,
                        })}
                      ></chart-bar>
                    </div>
                  </a-col>
                  <a-col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <rank-list
                      title={t('Overview.SalesRanking')}
                      list={rankLocaleList.value}
                    ></rank-list>
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane tab={t('Overview.Visits')} key="2">
                <div class="d-block d-lg-none pl-4 pb-2">
                  <a-radio-group class="mb-3 mr-3" default-value="1" button-style="outline">
                    <a-radio-button value="1">{t('Overview.AllDay')}</a-radio-button>
                    <a-radio-button value="2">{t('Overview.AllWeek')}</a-radio-button>
                    <a-radio-button value="3">{t('Overview.AllMonth')}</a-radio-button>
                    <a-radio-button value="4">{t('Overview.AllYear')}</a-radio-button>
                  </a-radio-group>
                  <a-range-picker style={{ width: '256px' }} />
                </div>
                <a-row>
                  <a-col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div class="p-8 pr-md-0 pt-md-0">
                      <chart-bar
                        data={barData2}
                        title={t('Overview.VisitsTrend')}
                        tooltipFormatter={(datum: Datum) => ({
                          name: t('Overview.Sales'),
                          value: datum.y,
                        })}
                      ></chart-bar>
                    </div>
                  </a-col>
                  <a-col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <rank-list
                      title={t('Overview.VisitsRanking')}
                      list={rankLocaleList.value}
                    ></rank-list>
                  </a-col>
                </a-row>
              </a-tab-pane>
            </a-tabs>
          </div>
        </a-card>
      </div>
    );
  },
});
