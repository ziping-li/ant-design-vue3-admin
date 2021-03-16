{
  /* <route>
  meta:
    title: t('WangEditor.Title')
    permissionCode: view:components_wangeditor
    head:
      title: t('WangEditor.Head.Title')
</route> */
}
import { defineComponent, onBeforeUnmount, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import WangEditor from 'wangeditor';
import i18next from 'i18next';

export default defineComponent({
  setup() {
    const { locale, t } = useI18n();
    let editor: any;

    onMounted(() => {
      editor = new WangEditor('#editor');
      editor.config.lang = locale.value === 'en-US' ? 'en' : 'zh-cn';
      editor.config.zIndex = 10;
      editor.i18next = i18next;
      editor.create();
    });

    watch(locale, () => {
      editor.i18next.changeLanguage(locale.value === 'en-US' ? 'en' : 'zh-cn');
    });

    onBeforeUnmount(() => {
      if (editor) {
        editor.destroy();
        editor = null;
      }
    });

    return () => (
      <>
        <page-header title={t('WangEditor.Title')}>
          <span>
            {t('WangEditor.PageDescription')}
            <a href="https://doc.wangeditor.com/" target="_blank">
              https://doc.wangeditor.com/
            </a>
          </span>
        </page-header>

        <div class="p-5">
          <div id="editor"></div>
        </div>
      </>
    );
  },
});
