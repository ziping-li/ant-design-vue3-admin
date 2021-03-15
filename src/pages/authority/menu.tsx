{
  /* <route>
  meta:
    title: t('AuthorityMenu.Title')
    permissionCode: view:authority_menu
    head:
      title: t('AuthorityMenu.Head.Title')
</route> */
}

import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { logout } from '../../plugins/utils';
import './style.less';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return () => (
      <>
        <page-header title={t('AuthorityMenu.Title')}>
          <span>{t('AuthorityMenu.PageDescription')}</span>
        </page-header>

        <div class="p-5">
          <a-card bordered={false} body-style={{ padding: '24px 32px' }}>
            <div class="rule-title">{t('AuthorityMenu.Rule')}</div>
            <p>{t('AuthorityMenu.Rule1')}</p>
            <p>{t('AuthorityMenu.Rule2')}</p>
            <p>{t('AuthorityMenu.Rule3')}</p>

            <p>{t('AuthorityMenu.Other')} <a href="https://ziping-li.github.io/convue/" target="_blank">Convue</a></p>

            <a-button type="primary" onClick={logout}>{t('AuthorityMenu.Button')}</a-button>
          </a-card>
        </div>
      </>
    );
  },
});
