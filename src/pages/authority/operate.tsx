{
  /* <route>
  meta:
    title: t('AuthorityOperate.Title')
    permissionCode: view:authority_operate
    head:
      title: t('AuthorityOperate.Head.Title')
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
        <page-header title={t('AuthorityOperate.Title')}>
          <span>{t('AuthorityOperate.PageDescription')}</span>
        </page-header>

        <div class="p-5">
          <a-card bordered={false} body-style={{ padding: '24px 32px' }}>
            <div class="rule-title">{t('AuthorityOperate.Rule')}</div>
            <p>{t('AuthorityOperate.Rule1')}</p>
            <p>{t('AuthorityOperate.Rule2')}</p>
            <p>{t('AuthorityOperate.Rule3')}</p>

            <p>
              {t('AuthorityOperate.Other')}{' '}
              <a href="https://ziping-li.github.io/convue/" target="_blank">
                Convue
              </a>
            </p>

            <a-space class="my-4">
              <authority code="add:authority_operate">
                <a-button>Add</a-button>
              </authority>
              <authority code="delete:authority_operate">
                <a-button>Delete</a-button>
              </authority>
              <authority code="update:authority_operate">
                <a-button>Update</a-button>
              </authority>
            </a-space>

            <div>
              <a-button type="primary" onClick={logout}>
                {t('AuthorityOperate.Button')}
              </a-button>
            </div>
          </a-card>
        </div>
      </>
    );
  },
});
