{
  /* <route>
  meta:
    title: t('FailResult.Title')
    permissionCode: view:result_fail
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
