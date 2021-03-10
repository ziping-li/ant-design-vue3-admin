{
  /* <route>
  meta:
    title: t('FailResult.Title')
    head:
      title: t('FailResult.Head.Title')
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
