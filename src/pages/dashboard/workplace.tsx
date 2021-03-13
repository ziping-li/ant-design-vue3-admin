{
  /* <route>
  meta:
    title: t('Workplace.Title')
    permissionCode: view:dashboard_workplace
    head:
      title: t('Workplace.Head.Title')
</route> */
}
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import './workplace.less';

export default defineComponent({
  setup() {
    const { state } = useStore();

    const userInfo = computed(() => state.userInfo);

    return () => (
      <div class="workplace">
        <div class="page-header-wrapper">
          <h4>工作台</h4>
          <div class="page-header">
            <div class="page-header-content">
              <div class="avatar">
                <a-avatar size="large" src="/avatar.jpg" />
              </div>
              <div class="content">
                <div class="content-title">
                  上午好，{userInfo.value.nickname}，开始您一天的工作吧！
                </div>
                <div>前端工程师 | 施源资本 - 某某某事业群 - VUE平台</div>
              </div>
            </div>
            <div class="extra-content">
              <div class="stat-item">
                <a-statistic title="项目数" value={56} />
              </div>
              <div class="stat-item">
                <a-statistic title="团队内排名" value={8} suffix="/ 24" />
              </div>
              <div class="stat-item">
                <a-statistic title="项目访问" value={2223} />
              </div>
            </div>
          </div>
        </div>

        <a-row gutter={24}>
          <a-col xl={16} lg={24} md={24} sm={24} xs={24}>
            {/* <a-card
              class="project-list mb-6"
              loading={loading.value}
              bordered={false}
              title="进行中的项目"
              body-style={{ padding: 0 }}
              c-slots={{
                extra: () => <a>全部项目</a>,
              }}
            >
              <div>
                {projects.map((project) => {
                  <a-card-grid class="project-card-grid">
                    <a-card bordered={false} body-style={{ padding: 0 }}>
                      <a-card-meta>
                        <div slot="title" class="card-title">
                          <a-avatar size="small" src={item.cover} />
                          <a>{item.title}</a>
                        </div>
                        <div slot="description" class="card-description">
                          {item.description}
                        </div>
                      </a-card-meta>
                      <div class="project-item">
                        <a href="/#/">科学搬砖组</a>
                        <span class="datetime">9小时前</span>
                      </div>
                    </a-card>
                  </a-card-grid>;
                })}
              </div>
            </a-card> */}

            {/* <a-card :loading="loading" title="动态" :bordered="false">
            <a-list>
              <a-list-item :key="index" v-for="(item, index) in activities">
                <a-list-item-meta>
                  <a-avatar slot="avatar" :src="item.user.avatar"/>
                  <div slot="title">
                    <span>{{ item.user.nickname }}</span>&nbsp;
                    在&nbsp;<a href="#">{{ item.project.name }}</a>&nbsp;
                    <span>{{ item.project.action }}</span>&nbsp;
                    <a href="#">{{ item.project.event }}</a>
                  </div>
                  <div slot="description">{{ item.time }}</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-card> */}
          </a-col>
        </a-row>
      </div>
    );
  },
});
