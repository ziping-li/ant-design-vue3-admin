{
  /* <route>
  meta:
    title: t('Markdown.Title')
    permissionCode: view:components_markdown
    head:
      title: t('Markdown.Head.Title')
</route> */
}
import { defineComponent, watch, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import Editor from '@toast-ui/editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js';
import '@toast-ui/editor/dist/i18n/zh-cn.js';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'highlight.js/styles/atom-one-dark.css';

const plugin: any = [codeSyntaxHighlight, { hljs }];

export default defineComponent({
  setup() {
    const { t, locale } = useI18n();
    let editor: any;

    const initEditor = () => {
      const el: any = document.querySelector('#editor');
      editor = new Editor({
        el,
        previewStyle: 'vertical',
        height: '500px',
        language: locale.value,
        plugins: [plugin],
      });
    };

    onMounted(() => {
      initEditor();
    });

    watch(locale, () => {
      editor.remove();
      initEditor();
    });

    onBeforeUnmount(() => {
      if (editor) {
        editor.remove();
        editor = null;
      }
    });

    return () => (
      <>
        <page-header title={t('Markdown.Title')}>
          <span>
            {t('Markdown.PageDescription')}
            <a href="https://nhn.github.io/tui.editor/latest/" target="_blank">
              https://nhn.github.io/tui.editor/latest/
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
