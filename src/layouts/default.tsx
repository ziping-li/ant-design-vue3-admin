import { defineComponent, ref } from 'vue';
import { useToggle } from '@ant-design-vue/use';
import { queryMedia } from '@convue-lib/utils';
import './default.less';

export default defineComponent({
  setup() {
    const [collapsed, { toggle: toggleSider }] = useToggle(false);
    const [visible, { toggle: toggleDrawer }] = useToggle(false);

    const isMobile = ref<boolean>(false);
    queryMedia((data: string) => {
      isMobile.value = data === 'xs';
    });

    const toggle = () => {
      isMobile.value ? toggleDrawer() : toggleSider();
    };

    return () => (
      <a-layout id="layout">
        {isMobile.value ? (
          <a-drawer
            class="layout-drawer"
            placement="left"
            closable={false}
            v-model={[visible.value, 'visible']}
            v-slots={{
              default: () => <app-asider collapsed={false}></app-asider>,
            }}
          ></a-drawer>
        ) : (
          <a-layout-sider
            class="layout-asider"
            v-model={[collapsed.value, 'collapsed']}
            breakpoint="md"
            width={250}
            trigger={null}
            collapsible
          >
            <app-asider collapsed={collapsed.value}></app-asider>
          </a-layout-sider>
        )}

        <a-layout>
          <app-header collapsed={collapsed.value} onToggle={toggle}></app-header>
          <a-layout-content class="layout-content">
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    );
  },
});
