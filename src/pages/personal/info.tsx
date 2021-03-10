{
  /* <route>
  meta:
    title: t('PersonalCenter.Title')
    permissionCode: view:personal_info
    head:
      title: t('PersonalCenter.Head.Title')
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
