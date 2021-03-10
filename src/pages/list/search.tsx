{
  /* <route>
  meta:
    title: t('Overview.Title')
    head:
      title: t('Overview.Head.Title')
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
