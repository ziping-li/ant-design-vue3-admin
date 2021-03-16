{
  /* <route>
  meta:
    title: t('WangEditor.Title')
    permissionCode: view:editor_wangeditor
    head:
      title: t('WangEditor.Head.Title')
</route> */
}
import { defineComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import E from 'wangeditor';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    let editor;

    onMounted(() => {
      editor = new E('#editor');
      editor.create();
    });

    return () => <div id="editor"></div>;
  },
});
