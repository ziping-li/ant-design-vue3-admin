{
  /* <route>
  meta:
    title: t('Workplace.Title')
    permissionCode: view:dashboard_workplace
    head:
      title: t('Workplace.Head.Title')
</route> */
}
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { PlusOutlined } from '@ant-design/icons-vue';
import { ActionTypes } from '../../../store/dashboard';
import { base } from '../../../config/constants';
import './index.less';

export default defineComponent({
  setup() {
    const { t, locale } = useI18n();
    const { state, dispatch } = useStore();
    const userInfo = computed(() => state.userInfo);
    const loading = computed(() => state['@@loading'].effects[ActionTypes.WORKPLACE]);
    const projects = computed(() => state.dashboard.projects[locale.value] || []);
    const movements = computed(() => state.dashboard.movements[locale.value] || []);
    const radarData = computed(() => state.dashboard.radarData[locale.value] || []);
    const teams = computed(() => state.dashboard.teams[locale.value] || []);

    onMounted(async () => {
      try {
        await dispatch(ActionTypes.WORKPLACE);
        console.log(radarData.value);
      } catch (err) {
        console.log(err);
      }
    });

    return () => (
      <div class="workplace">
        <page-header
          title={t('Workplace.Title')}
          v-slots={{
            extra: () => (
              <div class="extra-content">
                <div class="stat-item">
                  <a-statistic title={t('Workplace.NumberOfItems')} value={56} />
                </div>
                <div class="stat-item">
                  <a-statistic title={t('Workplace.RankWithinTheTeam')} value={8} suffix="/ 24" />
                </div>
                <div class="stat-item">
                  <a-statistic title={t('Workplace.ProjectVisit')} value={2223} />
                </div>
              </div>
            ),
          }}
        >
          <div class="page-header-content">
            <div class="avatar">
              <a-avatar size="large" src={`${base}/avatar.jpg`} />
            </div>
            <div class="content">
              <div class="content-title">
                {t('Workplace.Welcome', { name: userInfo.value.nickname })}
              </div>
              <div>{t('Workplace.Description')}</div>
            </div>
          </div>
        </page-header>

        <div class="p-5">
          <a-row gutter={20}>
            <a-col xl={16} lg={24} md={24} sm={24} xs={24}>
              <a-card
                class="project-list mb-6"
                loading={loading.value}
                bordered={false}
                title={t('Workplace.ProjectInProgress')}
                body-style={{ padding: 0 }}
                v-slots={{
                  extra: () => <a>{t('Workplace.AllProject')}</a>,
                }}
              >
                {projects.value.map((item: Record<any, any>) => (
                  <a-card-grid class="project-card-grid">
                    <a-card bordered={false} body-style={{ padding: 0 }}>
                      <a-card-meta
                        v-slots={{
                          title: () => (
                            <div class="card-title">
                              <a-avatar size="small" src={item.logo} />
                              <a>{item.name}</a>
                            </div>
                          ),
                          description: () => <div class="card-description">{item.description}</div>,
                        }}
                      ></a-card-meta>
                      <div class="project-item">
                        <a href="/#/">{item.author}</a>
                        <span class="datetime">{item.time}</span>
                      </div>
                    </a-card>
                  </a-card-grid>
                ))}
              </a-card>

              <a-card loading={loading.value} title={t('Workplace.Movement')} bordered={false}>
                <a-list>
                  {movements.value.map((item: Record<any, any>) => (
                    <a-list-item>
                      <a-list-item-meta
                        v-slots={{
                          avatar: () => <a-avatar src={item.avatar} />,
                          title: () => (
                            <div>
                              <span>{item.name}</span> {t('Workplace.At')}{' '}
                              <a href="#">{item.team}</a>&nbsp;
                              <span>{item.operation}</span>&nbsp;
                              <a href="#">{item.content}</a>
                            </div>
                          ),
                          description: () => <div>{item.time}</div>,
                        }}
                      ></a-list-item-meta>
                    </a-list-item>
                  ))}
                </a-list>
              </a-card>
            </a-col>
            <a-col class="px-3" xl={8} lg={24} md={24} sm={24} xs={24}>
              <a-card
                class="mb-6"
                title={t('Workplace.QuickStart')}
                bordered={false}
                body-style={{ padding: 0 }}
              >
                <div class="item-group">
                  <a>{t('Workplace.OperationOne')}</a>
                  <a>{t('Workplace.OperationTwo')}</a>
                  <a>{t('Workplace.OperationThree')}</a>
                  <a>{t('Workplace.OperationFour')}</a>
                  <a>{t('Workplace.OperationFive')}</a>
                  <a>{t('Workplace.OperationSix')}</a>
                  <a-button
                    size="small"
                    type="primary"
                    ghost
                    v-slots={{
                      icon: () => <PlusOutlined />,
                    }}
                  >
                    {t('Workplace.Add')}
                  </a-button>
                </div>
              </a-card>
              <a-card
                title={t('Workplace.Index')}
                style="margin-bottom: 24px"
                loading={loading.value}
                bordered={false}
                body-style={{ padding: 0 }}
              >
                <div style="min-height: 400px;">
                  <chart-radar data={radarData.value} />
                </div>
              </a-card>
              <a-card loading={loading.value} title={t('Workplace.Team')} bordered={false}>
                <div class="members">
                  <a-row>
                    {teams.value.map((item: Record<any, any>) => (
                      <a-col span={12}>
                        <a>
                          <a-avatar size="small" src={item.avatar} />
                          <span class="member">{item.name}</span>
                        </a>
                      </a-col>
                    ))}
                  </a-row>
                </div>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    );
  },
});
