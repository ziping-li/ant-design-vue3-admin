{
  /* <route>
  meta:
    title: t('SuccessResult.Title')
    head:
      title: t('SuccessResult.Head.Title')
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
