{
  /* <route>
  meta:
    title: t('AuthorityRoute.Title')
    permissionCode: view:authority_route
    head:
      title: t('AuthorityRoute.Head.Title')
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
        <page-header title={t('AuthorityRoute.Title')}>
          <span>{t('AuthorityRoute.PageDescription')}</span>
        </page-header>

        <div class="p-5">
          <a-card bordered={false} body-style={{ padding: '24px 32px' }}>
            <div class="rule-title">{t('AuthorityRoute.Rule')}</div>
            <p>{t('AuthorityRoute.Rule1')}</p>
            <p>{t('AuthorityRoute.Rule2')}</p>
            <p>{t('AuthorityRoute.Rule3')}</p>
            <p>{t('AuthorityRoute.Rule4')}</p>

            <p>{t('AuthorityRoute.Other')} <a href="https://ziping-li.github.io/convue/" target="_blank">Convue</a></p>

            <a-button type="primary" onClick={logout}>{t('AuthorityRoute.Button')}</a-button>
          </a-card>
        </div>
      </>
    );
  },
});
