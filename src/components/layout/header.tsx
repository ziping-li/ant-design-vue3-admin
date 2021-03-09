import { defineComponent } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    toggle: null,
  },
  setup(props, { emit }) {
    const toggle = () => {
      emit('toggle');
    };

    return () => (
      <a-layout-header class="layout-header">
        {props.collapsed ? (
          <menu-unfold-outlined class="trigger" onClick={toggle} />
        ) : (
          <menu-fold-outlined class="trigger" onClick={toggle} />
        )}

        <a-space>
          <head-item>
            <avatar-dropdown></avatar-dropdown>
          </head-item>
          <head-item>
            <switch-lang></switch-lang>
          </head-item>
        </a-space>
      </a-layout-header>
    );
  },
});
