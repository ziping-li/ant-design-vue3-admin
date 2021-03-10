{
  /* <route>
  meta:
    title: t('Message.Title')
    head:
      title: t('Message.Head.Title')
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
