import { defineComponent, ref } from 'vue';
import { UserOutlined, PieChartOutlined } from '@ant-design/icons-vue';
import Scroll from '@convue-lib/scroll';

export default defineComponent({
  components: {
    UserOutlined,
    PieChartOutlined,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const openKeys = ref<string[]>([]);
    const selectedKeys = ref<string[]>(['1']);

    return () => (
      <>
        <router-link to="/" class="logo">
          <a-space>
            <img alt="logo" height="32" src="/logo.png" />
            {!props.collapsed && <span class="title">Ant Design Admin</span>}
          </a-space>
        </router-link>
        <Scroll>
          <a-menu
            theme="dark"
            mode="inline"
            inline-collapsed={props.collapsed}
            v-models={[
              [selectedKeys.value, 'selectedKeys'],
              [openKeys.value, 'openKeys'],
            ]}
          >
            <a-sub-menu
              key="sub1"
              v-slots={{
                title: () => (
                  <span>
                    <UserOutlined />
                    <span>subnav 1</span>
                  </span>
                ),
                default: () => (
                  <>
                    <a-menu-item key="1">option1</a-menu-item>
                    <a-menu-item key="2">option2</a-menu-item>
                    <a-menu-item key="3">option3</a-menu-item>
                    <a-menu-item key="4">option4</a-menu-item>
                  </>
                ),
              }}
            ></a-sub-menu>

            <a-menu-item key="5">
              <PieChartOutlined />
              <span>option5</span>
            </a-menu-item>
          </a-menu>
        </Scroll>
      </>
    );
  },
});
