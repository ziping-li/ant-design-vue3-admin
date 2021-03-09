import { defineComponent, computed, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { UserOutlined, SettingOutlined, PoweroffOutlined } from '@ant-design/icons-vue';
import { logout } from '../../plugins/utils';

export default defineComponent({
  components: {
    UserOutlined,
    SettingOutlined,
    PoweroffOutlined,
  },
  setup() {
    const { t } = useI18n();
    const { state } = useStore();
    const route = useRoute();

    const userInfo = computed(() => state.userInfo);
    const navigateTo = getCurrentInstance()?.appContext.config.globalProperties.$navigateTo;

    const selectedKeys = computed(() => [route.fullPath]);

    return () => (
      <a-dropdown
        trigger={['hover', 'click']}
        placement="bottomCenter"
        v-slots={{
          overlay: () => (
            <a-menu slot="overlay" v-model={[selectedKeys.value, 'selectedKeys']}>
              <a-menu-item key="/personal/info" onClick={() => navigateTo('/personal/info')}>
                <UserOutlined /> {t('Components.PersonalCenter')}
              </a-menu-item>
              <a-menu-item key="/personal/setting" onClick={() => navigateTo('/personal/setting')}>
                <SettingOutlined /> {t('Components.PersonalSetting')}
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="/login" onClick={logout}>
                <PoweroffOutlined />
                {t('Components.Logout')}
              </a-menu-item>
            </a-menu>
          ),
        }}
      >
        <head-item>
          <a-space>
            <a-avatar src="/avatar.jpg" size={22}></a-avatar>
            <span>{userInfo.value.nickname}</span>
          </a-space>
        </head-item>
      </a-dropdown>
    );
  },
});
