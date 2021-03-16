import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { UserOutlined, SettingOutlined, PoweroffOutlined } from '@ant-design/icons-vue';
import { logout } from '../../plugins/utils';
import { base } from '../../config/constants';

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
    const selectedKeys = computed(() => [route.fullPath]);

    return () => (
      <a-dropdown
        trigger={['hover']}
        placement="bottomCenter"
        v-slots={{
          overlay: () => (
            <a-menu slot="overlay" v-model={[selectedKeys.value, 'selectedKeys']}>
              <a-menu-item disabled key="/personal/info">
                <UserOutlined /> {t('Components.PersonalCenter')}
              </a-menu-item>
              <a-menu-item disabled key="/personal/setting">
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
            <a-avatar src={`${base}/avatar.jpg`} size={22}></a-avatar>
            <span>{userInfo.value.nickname}</span>
          </a-space>
        </head-item>
      </a-dropdown>
    );
  },
});
