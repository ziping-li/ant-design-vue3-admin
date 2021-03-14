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
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { InfoCircleOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { numeral } from '@convue-lib/utils';
import { Datum } from '@antv/g2plot';
import { ActionTypes } from '../../../store/dashboard';

export default defineComponent({
  setup() {
    const { t, locale } = useI18n();
    const { state, dispatch } = useStore();
    const loading = computed(() => state['@@loading'].effects[ActionTypes.OVERVIEW]);
    const overview = computed(() => state.dashboard.overview);

    const searchTableColumns = computed(() => [
      {
        dataIndex: 'index',
        title: t('Overview.Table.Rank'),
        width: 90,
      },
      {
        dataIndex: 'keyword',
        title: t('Overview.Table.SearchKeyword'),
      },
      {
        dataIndex: 'count',
        title: t('Overview.Table.Users'),
      },
      {
        dataIndex: 'range',
        title: t('Overview.Table.WeeklyRange'),
        align: 'right',
        sorter: (a: any, b: any) => a.range - b.range,
        slots: { customRender: 'range' },
      },
    ]);

    onMounted(async () => {
      try {
        await dispatch(ActionTypes.OVERVIEW);
      } catch (err) {
        console.log(err);
      }
    });

    // const rankLocaleList = computed(() => rankList[locale.value as Lang]);

    return () => (
      <div class="px-5 pb-5">
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
                  line
                  data={overview.value.miniArea}
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
                  data={overview.value.miniBar}
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
                      data={overview.value.barData}
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
                    list={overview.value.rankList[locale.value] || []}
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
                      data={overview.value.barData2}
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
                    list={overview.value.rankList[locale.value] || []}
                  ></rank-list>
                </a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </a-card>

        <a-row gutter={20} type="flex">
          <a-col class="mt-5" xl={12} lg={24} md={24} sm={24} xs={24}>
            <a-card
              loading={loading.value}
              bordered={false}
              title={t('Overview.OnlineTopSearch')}
              style={{ height: '100%' }}
              v-slots={{
                extra: () => (
                  <a-dropdown
                    trigger={['click']}
                    placement="bottomLeft"
                    v-slots={{
                      overlay: () => (
                        <a-menu>
                          <a-menu-item>{t('Overview.OperationOne')}</a-menu-item>
                          <a-menu-item>{t('Overview.OperationTwo')}</a-menu-item>
                        </a-menu>
                      ),
                    }}
                  >
                    <EllipsisOutlined />
                  </a-dropdown>
                ),
              }}
            >
              <a-row gutter={40}>
                <a-col class="mb-5" xs={24} sm={12}>
                  <number-info
                    total={12321}
                    sub-total={17.1}
                    v-slots={{
                      subtitle: () => (
                        <>
                          <span>{t('Overview.SearchUsers')}</span>
                          <a-tooltip title={t('Overview.Introduce')}>
                            <InfoCircleOutlined class="ml-2" />
                          </a-tooltip>
                        </>
                      ),
                    }}
                  ></number-info>
                  <div class="mt-2">
                    <chart-mini-area
                      data={overview.value.miniBar}
                      formatter={(datum: Datum) => ({
                        name: t('Overview.SearchUsers'),
                        value: datum.y,
                      })}
                    />
                  </div>
                </a-col>
                <a-col class="mb-5" xs={24} sm={12}>
                  <number-info
                    total={2.7}
                    sub-total={26.2}
                    status="down"
                    v-slots={{
                      subtitle: () => (
                        <>
                          <span>{t('Overview.PerCapitaSearch')}</span>
                          <a-tooltip title={t('Overview.Introduce')}>
                            <InfoCircleOutlined class="ml-2" />
                          </a-tooltip>
                        </>
                      ),
                    }}
                  ></number-info>
                  <div class="mt-2">
                    <chart-mini-area
                      data={overview.value.miniBar}
                      formatter={(datum: Datum) => ({
                        name: t('Overview.PerCapitaSearch'),
                        value: datum.y,
                      })}
                    />
                  </div>
                </a-col>
              </a-row>
              <a-table
                row-key="index"
                size="small"
                columns={searchTableColumns.value}
                dataSource={overview.value.searchData[locale.value] || []}
                pagination={{ pageSize: 5 }}
                v-slots={{
                  range: (scope: any) => {
                    return (
                      <trend flag={scope.record.status === 0 ? 'up' : 'down'}>{scope.text}%</trend>
                    );
                  },
                }}
              ></a-table>
            </a-card>
          </a-col>
          <a-col class="mt-5" xl={12} lg={24} md={24} sm={24} xs={24}>
            <a-card
              loading={loading.value}
              bordered={false}
              title={t('Overview.TheProportionOfSales')}
              style={{ height: '100%' }}
              v-slots={{
                extra: () => (
                  <>
                    <a-radio-group defaultValue="a">
                      <a-radio-button value="a">{t('Overview.Channel.All')}</a-radio-button>
                      <a-radio-button value="b">{t('Overview.Channel.Online')}</a-radio-button>
                      <a-radio-button value="c">{t('Overview.Channel.Stores')}</a-radio-button>
                    </a-radio-group>

                    <a-dropdown
                      trigger={['click']}
                      placement="bottomLeft"
                      v-slots={{
                        overlay: () => (
                          <a-menu>
                            <a-menu-item>{t('Overview.OperationOne')}</a-menu-item>
                            <a-menu-item>{t('Overview.OperationTwo')}</a-menu-item>
                          </a-menu>
                        ),
                      }}
                    >
                      <EllipsisOutlined class="ml-3" />
                    </a-dropdown>
                  </>
                ),
              }}
            >
              <chart-pie
                title={t('Overview.Sales')}
                data={overview.value.pieData[locale.value] || []}
                inner-radius={0.6}
              ></chart-pie>
            </a-card>
          </a-col>
        </a-row>
      </div>
    );
  },
});
