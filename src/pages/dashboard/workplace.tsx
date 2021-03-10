{
  /* <route>
  meta:
    title: t('Workplace.Title')
    head:
      title: t('Workplace.Head.Title')
</route> */
}
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <a-button type="primary">button</a-button>
      </div>
    );
  },
});
