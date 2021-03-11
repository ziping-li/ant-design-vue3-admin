import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    total: {
      type: [Function, Number, String],
      required: false,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => (
      <a-card
        class="cahrt-card"
        loading={props.loading}
        body-style={{ padding: '20px 24px 8px' }}
        bordered={false}
      >
        <div class="chart-card-header">
          <div class="meta">
            <span class="chart-card-title">{(slots.title && slots.title?.()) || props.title}</span>
            <span class="chart-card-action">{slots.action?.()}</span>
          </div>
          <div class="total">
            {(slots.total && slots.total?.()) || (
              <span>{(typeof props.total === 'function' && props.total()) || props.total}</span>
            )}
          </div>
        </div>
        <div class="chart-card-content">
          <div class="content-fix">{slots.default?.()}</div>
        </div>
        <div class="chart-card-footer">
          <div class="field">{slots.footer?.()}</div>
        </div>
      </a-card>
    );
  },
});
