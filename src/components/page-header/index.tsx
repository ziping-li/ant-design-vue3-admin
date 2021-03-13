import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props, {slots}) {
    return () => (
      <div class="page-header-wrapper">
        <h4>{props.title}</h4>
        <div class="page-header">
          {slots.default?.()}
          {slots.extra?.()}
        </div>
      </div>
    );
  },
});
