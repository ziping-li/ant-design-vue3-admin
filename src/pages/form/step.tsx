{
  /* <route>
  meta:
    title: t('StepForm.Title')
    head:
      title: t('StepForm.Head.Title')
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
