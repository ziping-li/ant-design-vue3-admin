{
  /* <route>
  meta:
    title: t('AccountSetting.Title')
    head:
      title: t('AccountSetting.Head.Title')
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
