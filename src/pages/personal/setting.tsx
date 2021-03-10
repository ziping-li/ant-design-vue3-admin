{
  /* <route>
  meta:
    title: t('AccountSetting.Title')
    permissionCode: view:personal_setting
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
