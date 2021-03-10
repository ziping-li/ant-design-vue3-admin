{
  /* <route>
  meta:
    title: t('BasicProfile.Title')
    head:
      title: t('BasicProfile.Head.Title')
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
