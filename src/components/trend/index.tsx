import { defineComponent } from 'vue';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons-vue';
import './index.less';

export default defineComponent({
  props: {
    prefixCls: {
      type: String,
      default: 'ant-admin-trend',
    },
    /**
     * 上升下降标识：up|down
     */
    flag: {
      type: String,
      required: true,
    },
    /**
     * 颜色反转
     */
    reverseColor: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => (
      <div class={[props.prefixCls, props.reverseColor && 'reverse-color']}>
        <span>
          {slots.term?.()}
          <span class="item-text">{slots.default?.()}</span>
        </span>
        <span class={props.flag}>
          {props.flag === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </span>
      </div>
    );
  },
});
