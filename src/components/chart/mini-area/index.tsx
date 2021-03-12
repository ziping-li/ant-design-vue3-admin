import { defineComponent, onMounted, PropType, watch, computed, onBeforeUnmount } from 'vue';
import { Area } from '@antv/g2plot';
import * as uuid from 'uuid';
import './index.less';

interface Field {
  x: string | number;
  y: string | number;
}

export default defineComponent({
  props: {
    id: {
      type: String,
    },
    height: {
      type: [String, Number],
      default: '46px',
    },
    data: {
      type: Array as PropType<Field[]>,
      default: () => [],
    },
    line: {
      type: Boolean,
      default: false,
    },
    formatter: {
      type: Function,
    },
  },
  setup(props) {
    const produceId = props.id || uuid.v4();
    let area: any;
    const currentData = computed(() => props.data);

    onMounted(() => {
      const options: any = {
        data: props.data,
        xField: 'x',
        yField: 'y',
        xAxis: false,
        yAxis: false,
        smooth: true,
        autoFit: true,
        padding: [4, 0, 0, 0],
      };
      if (props.formatter) {
        options.tooltip = {
          formatter: props.formatter,
        };
      }
      if (!props.line) {
        options.line = false;
        options.areaStyle = {
          fillOpacity: 0.8,
        };
      }
      area = new Area(produceId, options);
      area.render();
    });

    onBeforeUnmount(() => {
      area.destroy();
      area = null;
    });

    watch(currentData, () => {
      if (area) {
        area.changeData(currentData.value);
      }
    });

    return () => (
      <div class="antv-chart-mini">
        <div class="chart-wrapper" style={{ height: props.height }}>
          <div id={produceId} style="width: 100%;height: 100%;"></div>
        </div>
      </div>
    );
  },
});
