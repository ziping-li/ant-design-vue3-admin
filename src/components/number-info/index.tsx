import { defineComponent } from 'vue';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons-vue';
import './index.less';

export default defineComponent({
  props: {
    prefixCls: {
      type: String,
      default: 'ant-admin-number-info',
    },
    total: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    subTitle: {
      type: [String, Function],
      default: '',
    },
    status: {
      type: String,
      default: 'up',
    },
  },
  setup(props, { slots }) {
    return () => (
      <div class={[props.prefixCls]}>
        {slots.subtitle ? (
          slots.subtitle?.()
        ) : (
          <div class={[`${props.prefixCls}-subtitle`]}>
            {typeof props.subTitle === 'string' ? props.subTitle : props.subTitle()}
          </div>
        )}

        <div class="number-info-value">
          <span>{props.total}</span>
          <span class="sub-total">
            {props.subTotal}
            {props.status === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </span>
        </div>
      </div>
    );
  },
});
