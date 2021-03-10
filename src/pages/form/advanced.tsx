{
  /* <route>
  meta:
    title: t('AdvancedForm.Title')
    head:
      title: t('AdvancedForm.Head.Title')
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
