import { defineComponent, onBeforeUnmount, onMounted, PropType, watch, computed } from 'vue';
import { Radar } from '@antv/g2plot';
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
      default: '380px',
    },
    data: {
      type: Array as PropType<Field[]>,
      default: () => [],
    },
    formatter: {
      type: Function,
    },
  },
  setup(props) {
    const produceId = props.id || uuid.v4();
    let radar: any;
    const currentData = computed(() => props.data);

    onMounted(() => {
      const options: any = {
        data: props.data,
        appendPadding: [30, 40, 50, 40],
        legend: {
          layout: 'horizontal',
          position: 'bottom',
        },
        xField: 'x',
        yField: 'y',
        seriesField: 'seriesField',
        xAxis: {
          line: null,
          tickLine: null,
          grid: {
            line: {
              style: {
                lineDash: null,
              },
            },
          },
        },
        yAxis: {
          line: null,
          tickLine: null,
          grid: {
            line: {
              type: 'line',
              style: {
                lineDash: null,
              },
            },
          },
        },
        // 开启辅助点
        point: {
          size: 2,
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
      radar = new Radar(produceId, options);
      radar.render();
    });

    onBeforeUnmount(() => {
      radar.destroy();
      radar = null;
    });

    watch(currentData, () => {
      if (radar) {
        radar.changeData(currentData.value);
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
