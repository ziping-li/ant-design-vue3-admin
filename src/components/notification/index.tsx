import { defineComponent, ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { BellOutlined } from '@ant-design/icons-vue';
import { useToggle, useClickAway } from '@ant-design-vue/use';
import { ActionTypes } from '../../store/index';
import { Notification } from '../../config/types';
import './index.less';

export default defineComponent({
  components: {
    BellOutlined,
  },
  setup() {
    const { state, dispatch } = useStore();
    const { t } = useI18n();

    const notifyRef: any = ref<HTMLElement>();
    const bellRef: any = ref<HTMLElement>();
    const [visible, { toggle }] = useToggle();
    const activeKey = ref<string>('1');

    const notifications = computed(() => state.notifications);
    const getNotificationsByType = (type: number) => {
      return notifications.value.filter((n: Notification) => n.type === type);
    };

    const notReaded = computed(() => notifications.value.filter((n: Notification) => !n.isReaded));
    const getNotReadedCountByType = (type: number) => {
      return notReaded.value.filter((n: Notification) => n.type === type).length;
    };

    const outClick = () => {
      useClickAway(notifyRef, (e: MouseEvent) => {
        if (bellRef.value.contains(e.target)) return;
        visible.value = false;
      });
    };

    onMounted(async () => {
      await dispatch(ActionTypes.NOTIFICATION);
    });

    return () => (
      <a-dropdown
        visible={visible.value}
        trigger={['click']}
        placement="bottomCenter"
        v-slots={{
          overlay: () => (
            <div class="notification-wrapper" ref={notifyRef} onClick={outClick}>
              <a-tabs v-model={[activeKey.value, 'activeKey']}>
                <a-tab-pane
                  key="1"
                  tab={t('Components.Notice') + `(${getNotReadedCountByType(1)})`}
                >
                  <notification-list data={getNotificationsByType(1)}></notification-list>
                </a-tab-pane>
                <a-tab-pane
                  key="2"
                  tab={t('Components.Message') + `(${getNotReadedCountByType(2)})`}
                >
                  <notification-list data={getNotificationsByType(2)}></notification-list>
                </a-tab-pane>
                <a-tab-pane
                  key="3"
                  tab={t('Components.Upcoming') + `(${getNotReadedCountByType(3)})`}
                >
                  <notification-list data={getNotificationsByType(3)}></notification-list>
                </a-tab-pane>
              </a-tabs>
              <a-button class="check-all-button" type="primary" ghost block>
                {t('Components.ViewAll')}
              </a-button>
            </div>
          ),
        }}
      >
        <div ref={bellRef} onClick={() => toggle()}>
          <head-item>
            <a-badge count={notReaded.value.length}>
              <BellOutlined style={{ fontSize: '16px' }} />
            </a-badge>
          </head-item>
        </div>
      </a-dropdown>
    );
  },
});
