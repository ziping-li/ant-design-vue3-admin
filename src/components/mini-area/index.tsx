import { defineComponent } from 'vue';
import { Area } from '@antv/g2plot';
import './index.less';

export default defineComponent({
  props: {
    height: {
      type: [String, Number],
      default: '46px',
    },
  },
  setup(props) {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((res) => res.json())
      .then((data) => {
        const area = new Area('container', {
          data,
          xField: 'timePeriod',
          yField: 'value',
          xAxis: false,
          yAxis: false,
          autoFit: true
        });
        area.render();
      });

    return () => (
      <div class="antv-chart-mini">
        <div class="chart-wrapper" style={{ height: props.height }}>
          <div id="container"></div>
        </div>
      </div>
    );
  },
});
