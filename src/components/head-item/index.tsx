import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  setup(_props, { slots }) {
    return () => <div class="head-item">{slots.default?.()}</div>;
  },
});
