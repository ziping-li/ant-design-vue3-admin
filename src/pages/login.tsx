{
  /* <route>
  meta:
    head:
      title: t('Login.Title')
</route> */
}
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import './login.less';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const { t } = useI18n();
    const router = useRouter();

    const formState: Record<string, string> = reactive({
      user: 'admin',
      password: '123456',
    });

    const handleFinish = () => {
      if (formState.user === 'admin' && formState.password === '123456') {
        router.push({ path: '/' });
      } else {
        message.error(t('Login.Error'));
      }
    };

    return () => (
      <div class="auth-layouts">
        <div class="switch-lang">
          <app-switch-lang></app-switch-lang>
        </div>
        <div class="page">
          <div class="logo" />
          <div class="description">{$t('Login.Description')}</div>
          <div class="login-page">
            <a-form layout="vertical" model={formState} onFinish={handleFinish}>
              <a-form-item>
                <a-input
                  v-model={[formState.user, 'value']}
                  size="large"
                  v-slots={{ prefix: () => <UserOutlined style="color: rgba(0, 0, 0, 0.25)" /> }}
                  placeholder={$t('Login.Username')}
                ></a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model={[formState.password, 'value']}
                  type="password"
                  size="large"
                  v-slots={{
                    prefix: () => <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />,
                  }}
                  placeholder={$t('Login.Password')}
                ></a-input>
              </a-form-item>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                  size="large"
                  block
                  disabled={!formState.user || !formState.password}
                >
                  {$t('Login.Login')}
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    );
  },
});
