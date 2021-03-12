import { defineComponent, onMounted, PropType, onBeforeUnmount, watch, computed } from 'vue';
import { Pie } from '@antv/g2plot';
import * as uuid from 'uuid';

interface Field {
  type: string | number;
  value: string | number;
}

export default defineComponent({
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    height: {
      type: [String, Number],
      default: '340px',
    },
    data: {
      type: Array as PropType<Field[]>,
      default: () => [],
    },
    innerRadius: {
      type: Number,
      default: 0,
    },
    formatter: {
      type: Function,
    },
  },
  setup(props) {
    const produceId = props.id || uuid.v4();
    let pie: any;
    const currentData = computed(() => props.data);

    onMounted(() => {
      const options: any = {
        appendPadding: 40,
        angleField: 'value',
        colorField: 'type',
        data: props.data,
        autoFit: true,
        radius: 1,
        innerRadius: props.innerRadius,
        label: false,
        statistic: false,
        legend: {
          layout: 'horizontal',
          position: 'bottom',
        },
        theme: {
          colors10: [
            '#5B8FF9',
            '#06d3c4',
            '#ffbc32',
            '#2ccc44',
            '#ff3976',
            '#914ce5',
            '#42b1cc',
            '#ff55ac',
            '#0090ff',
            '#06d3c4',
          ],
        },
      };
      if (props.formatter) {
        options.tooltip = {
          formatter: props.formatter,
        };
      }
      pie = new Pie(produceId, options);
      pie.render();
    });

    onBeforeUnmount(() => {
      pie.destroy();
      pie = null;
    });

    watch(currentData, () => {
      if (pie) {
        pie.changeData(currentData.value);
      }
    });

    return () => (
      <div class="d-flex direction-column" style={{ width: '100%', height: props.height }}>
        {props.title && <h4 style={{ marginBottom: '20px' }}>{props.title}</h4>}
        <div class="flex-1" style="width: 100%;" id={produceId}></div>
      </div>
    );
  },
});
