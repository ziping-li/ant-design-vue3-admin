import { defineComponent, PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { Notification } from '../../config/types';

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<Notification[]>,
      default: () => [],
    },
  },
  setup(props) {
    const { locale } = useI18n();

    return () => (
      <a-list
        size="small"
        item-layout="horizontal"
        data-source={props.data}
        v-slots={{
          renderItem: ({ item }: Record<any, any>) => (
            <a-list-item>
              <a-list-item-meta
                title={item.title[locale.value]}
                description={item.time}
                v-slots={{
                  avatar: () => (
                    <a-badge dot={!item.isReaded}>
                      <a-avatar style={{ backgroundColor: item.color, verticalAlign: 'middle' }}>
                        {item.icon}
                      </a-avatar>
                    </a-badge>
                  ),
                }}
              ></a-list-item-meta>
            </a-list-item>
          ),
        }}
      ></a-list>
    );
  },
});
