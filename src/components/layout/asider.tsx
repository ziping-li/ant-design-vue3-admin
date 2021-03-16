import { computed, defineComponent, ref, watch, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import * as antIcons from '@ant-design/icons-vue';
import Scroll from '@convue-lib/scroll';
import { ActionTypes } from '../../store/index';
import { Menu } from '../../config/types';
import {base} from '../../config/constants';

const Icons: any = antIcons;

export default defineComponent({
  components: {
    ...Icons,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { dispatch, state } = useStore();
    const router = useRouter();
    const route = useRoute();
    const { locale } = useI18n();
    const menu = computed(() => state.userMenu);

    const defaultOpenKeys = () =>
      menu.value
        .filter((item: Menu) => item.children.find((child: Menu) => child.path === route.path))
        .map((n: Menu) => n.id);

    const openKeys = ref<number[]>(defaultOpenKeys());
    const selectedKeys = ref<string[]>([route.path]);

    const onMenuItemClick = ({ key }: any) => {
      router.push(key);
    };

    const onOpenChange = (keys: number[]) => {
      if (keys.length === 2) {
        openKeys.value = [keys[keys.length - 1]];
      }
    };

    watchEffect(() => {
      selectedKeys.value = [route.path];
      openKeys.value = defaultOpenKeys();
    });

    watch(locale, (val) => {
      dispatch(ActionTypes.MENU, val);
    });

    return () => (
      <>
        <router-link to="/" class="logo">
          <a-space>
            <img alt="logo" height="32" src={`${base}/logo.png`} />
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
            onClick={onMenuItemClick}
            onOpenChange={onOpenChange}
          >
            {menu.value.map((item: Menu) => {
              return (
                <a-sub-menu
                  key={item.id}
                  v-slots={{
                    title: () => {
                      const IconComponent = Icons[item.icon];
                      return (
                        <span>
                          <IconComponent></IconComponent>
                          <span>{item.name}</span>
                        </span>
                      );
                    },
                  }}
                >
                  {item.children.map((child: Menu) => {
                    return <a-menu-item key={child.path}>{child.name}</a-menu-item>;
                  })}
                </a-sub-menu>
              );
            })}
          </a-menu>
        </Scroll>
      </>
    );
  },
});
