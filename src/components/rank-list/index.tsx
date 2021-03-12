import { defineComponent, PropType } from 'vue';
import './index.less';

interface Item {
  name: string;
  value: string | number;
}

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    list: {
      type: Array as PropType<Item[]>,
      default: null,
    },
  },
  setup(props) {
    return () => (
      <div class="rank pl-md-14">
        <h4 class="title">{props.title}</h4>
        <ul class="list">
          {props.list.map((item, index) => (
            <li>
              <span class={index < 3 ? 'active' : null}>{index + 1}</span>
              <span>{item.name}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  },
});
