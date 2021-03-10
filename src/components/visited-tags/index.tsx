import { defineComponent, getCurrentInstance, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { whiteList } from '../../config/constants';
import {
  DownOutlined,
  CloseOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons-vue';
import './index.less';

interface VisitedRoute {
  name: string;
  path: string;
}

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { t } = useI18n();

    const cacheVisitedRoutes = localStorage.getItem('ant_design_amdin_visited_routes');

    const visitedRoutes = ref<VisitedRoute[]>(
      cacheVisitedRoutes ? JSON.parse(cacheVisitedRoutes) : []
    );
    const activeKey = ref<string>(
      localStorage.getItem('ant_design_amdin_visited_active_key') || ''
    );
    const getLocaleText = getCurrentInstance()?.appContext.config.globalProperties.$getLocaleText;

    const hasRoute = () => {
      return (
        visitedRoutes.value.find((item) => item.path === route.path) ||
        whiteList.includes(route.path)
      );
    };

    watchEffect(() => {
      if (activeKey.value !== route.path && route.path !== '/') {
        if (!hasRoute()) {
          visitedRoutes.value.push({ name: route.meta.title, path: route.path });
        }
        activeKey.value = route.path;
        localStorage.setItem(
          'ant_design_amdin_visited_routes',
          JSON.stringify(visitedRoutes.value)
        );
        localStorage.setItem('ant_design_amdin_visited_active_key', activeKey.value);
      }
    });

    const onChange = (activeKey: string) => {
      router.push(activeKey);
      localStorage.setItem('ant_design_amdin_visited_active_key', activeKey);
    };

    const onEdit = (targetKey: string) => {
      if (visitedRoutes.value.length === 1) return;

      const targetIndex = visitedRoutes.value.findIndex(
        (route: VisitedRoute) => route.path === targetKey
      );

      if (activeKey.value === targetKey) {
        if (visitedRoutes.value[targetIndex + 1]) {
          router.push(visitedRoutes.value[targetIndex + 1].path);
        } else {
          router.push(visitedRoutes.value[targetIndex - 1].path);
        }
      }

      visitedRoutes.value.splice(targetIndex, 1);
      localStorage.setItem('ant_design_amdin_visited_routes', JSON.stringify(visitedRoutes.value));
    };

    const close = () => {
      if (visitedRoutes.value.length === 1) return;

      const currentIndex = visitedRoutes.value.findIndex(
        (route: VisitedRoute) => route.path === activeKey.value
      );
      if (visitedRoutes.value[currentIndex + 1]) {
        router.push(visitedRoutes.value[currentIndex + 1].path);
      } else {
        router.push(visitedRoutes.value[currentIndex - 1].path);
      }
      visitedRoutes.value.splice(currentIndex, 1);
      localStorage.setItem('ant_design_amdin_visited_routes', JSON.stringify(visitedRoutes.value));
    };

    const closeLeft = () => {
      const currentIndex = visitedRoutes.value.findIndex(
        (route: VisitedRoute) => route.path === activeKey.value
      );
      visitedRoutes.value = visitedRoutes.value.slice(currentIndex);
      localStorage.setItem('ant_design_amdin_visited_routes', JSON.stringify(visitedRoutes.value));
    };

    const closeRight = () => {
      const currentIndex = visitedRoutes.value.findIndex(
        (route: VisitedRoute) => route.path === activeKey.value
      );
      visitedRoutes.value = visitedRoutes.value.slice(0, currentIndex + 1);
      localStorage.setItem('ant_design_amdin_visited_routes', JSON.stringify(visitedRoutes.value));
    };

    const closeOther = () => {
      visitedRoutes.value = visitedRoutes.value.filter(
        (route: VisitedRoute) => route.path === activeKey.value
      );
      localStorage.setItem('ant_design_amdin_visited_routes', JSON.stringify(visitedRoutes.value));
    };

    return () => (
      <div class="visited-tags">
        <a-tabs
          v-model={[activeKey.value, 'activeKey']}
          hide-add
          type="editable-card"
          onChange={onChange}
          onEdit={onEdit}
        >
          {visitedRoutes.value.map((route: VisitedRoute) => (
            <a-tab-pane key={route.path} tab={getLocaleText(route.name)}></a-tab-pane>
          ))}
        </a-tabs>
        <a-dropdown
          trigger={['hover']}
          placement="bottomRight"
          v-slots={{
            overlay: () => (
              <a-menu slot="overlay">
                <a-menu-item onClick={close}>
                  <CloseOutlined />
                  {t('Components.Close')}
                </a-menu-item>
                <a-menu-item onClick={closeLeft}>
                  <DoubleLeftOutlined /> {t('Components.CloseLeft')}
                </a-menu-item>
                <a-menu-item onClick={closeRight}>
                  <DoubleRightOutlined />
                  {t('Components.CloseRight')}
                </a-menu-item>
                <a-menu-item onClick={closeOther}>
                  <CloseCircleOutlined />
                  {t('Components.CloseOther')}
                </a-menu-item>
              </a-menu>
            ),
          }}
        >
          <a-button
            v-slots={{
              icon: () => <DownOutlined />,
            }}
          ></a-button>
        </a-dropdown>
      </div>
    );
  },
});
