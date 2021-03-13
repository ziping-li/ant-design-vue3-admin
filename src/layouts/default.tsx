import { defineComponent, ref } from 'vue';
import { useToggle } from '@ant-design-vue/use';
import Scroll from '@convue-lib/scroll';
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
      <a-layout id="layout" class={isMobile.value ? 'mobile' : 'desk'}>
        {isMobile.value ? (
          <a-drawer
            class="layout-drawer"
            placement="left"
            closable={false}
            v-model={[visible.value, 'visible']}
          >
            <layout-asider collapsed={false}></layout-asider>
          </a-drawer>
        ) : (
          <a-layout-sider
            class="layout-asider"
            v-model={[collapsed.value, 'collapsed']}
            breakpoint="md"
            width={256}
            trigger={null}
            collapsible
          >
            <layout-asider collapsed={collapsed.value}></layout-asider>
          </a-layout-sider>
        )}

        <a-layout>
          <layout-header collapsed={collapsed.value} onToggle={toggle}></layout-header>
          <visited-tags></visited-tags>
          <Scroll>
            <a-layout-content class="flex-1">
              <router-view></router-view>
            </a-layout-content>
          </Scroll>
        </a-layout>
      </a-layout>
    );
  },
});
