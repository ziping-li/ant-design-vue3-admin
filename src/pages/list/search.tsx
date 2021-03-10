{
  /* <route>
  meta:
    title: t('SearchList.Title')
    head:
      title: t('SearchList.Head.Title')
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
