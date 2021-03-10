{
  /* <route>
  meta:
    title: t('BasicForm.Title')
    head:
      title: t('BasicForm.Head.Title')
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
