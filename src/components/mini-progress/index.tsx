import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  props: {
    target: {
      type: Number,
      default: 0,
    },
    height: {
      type: String,
      default: '10px',
    },
    color: {
      type: String,
      default: '#13C2C2',
    },
    percentage: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    return () => (
      <div class="chart-mini-progress">
        <div class="target" style={{ left: props.target + '%' }}>
          <span style={{ backgroundColor: props.color }} />
          <span style={{ backgroundColor: props.color }} />
        </div>
        <div class="progress-wrapper">
          <div
            class="progress"
            style={{
              backgroundColor: props.color,
              width: props.percentage + '%',
              height: props.height,
            }}
          ></div>
        </div>
      </div>
    );
  },
});
