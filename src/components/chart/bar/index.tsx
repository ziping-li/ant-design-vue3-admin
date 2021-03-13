import { defineComponent, onBeforeUnmount, onMounted, PropType, watch, computed } from 'vue';
import { Column } from '@antv/g2plot';
import * as uuid from 'uuid';

interface Field {
  x: string | number;
  y: string | number;
  seriesField?: string | number;
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
      default: '300px',
    },
    data: {
      type: Array as PropType<Field[]>,
      default: () => [],
    },
    yFormatter: {
      type: Function,
      default: (v: any) => v,
    },
    tooltipFormatter: {
      type: Function,
    },
  },
  setup(props) {
    const produceId = props.id || uuid.v4();
    let bar: any;
    const currentData = computed(() => props.data);

    onMounted(() => {
      const options: any = {
        data: props.data,
        xField: 'x',
        yField: 'y',
        yAxis: {
          grid: {
            line: {
              style: {
                lineDash: [2, 4],
              },
            },
          },
          label: {
            formatter: props.yFormatter,
          },
        },
        autoFit: true,
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
      if (props.tooltipFormatter) {
        options.tooltip = {
          formatter: props.tooltipFormatter,
        };
      }
      if (props.data[0]?.seriesField) {
        options.seriesField = 'seriesField';
      }
      bar = new Column(produceId, options);
      bar.render();
    });

    onBeforeUnmount(() => {
      bar.destroy();
      bar = null;
    });

    watch(currentData, () => {
      if (bar) {
        bar.changeData(currentData.value);
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
