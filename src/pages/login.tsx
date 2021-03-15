{
  /* <route>
  meta:
    layout: empty
    head:
      title: t('Login.Head.Title')
</route> */
}
import { defineComponent, computed, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { notification } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import './login.less';
import { ActionTypes } from '../store/index';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { state, dispatch } = useStore();

    const loginForm = ref(null);
    const loading = computed(() => state['@@loading'].effects[ActionTypes.LOGIN]);
    const formState: Record<string, string> = reactive({
      username: '',
      password: '',
    });
    const rules = reactive({
      username: [
        {
          required: true,
          trigger: 'change',
          message: t('FormValidate.Required', { field: t('Login.Username') }),
        },
      ],
      password: [
        {
          required: true,
          trigger: 'change',
          message: t('FormValidate.Required', { field: t('Login.Password') }),
        },
      ],
    });

    const handleFinish = async () => {
      try {
        await dispatch(ActionTypes.LOGIN, formState);
        notification.success({
          message: t('Login.LoginSuccess'),
          description: t('Login.WelcomeToLogin'),
        });
        router.push({ path: '/' });
      } catch (err) {
        console.log(err);
      }
    };

    return () => (
      <div class="auth-layouts">
        <div class="switch-lang">
          <switch-lang></switch-lang>
        </div>
        <div class="page">
          <div class="logo" />
          <div class="description">{t('Login.Description')}</div>
          <p class="description">{t('Login.Note')}</p>
          <div class="login-page">
            <a-form
              layout="vertical"
              ref={loginForm}
              model={formState}
              rules={rules}
              onFinish={handleFinish}
            >
              <a-form-item name="username">
                <a-input
                  v-model={[formState.username, 'value']}
                  size="large"
                  v-slots={{ prefix: () => <UserOutlined style="color: rgba(0, 0, 0, 0.25)" /> }}
                  placeholder='admin/user'
                  autocomplete="off"
                ></a-input>
              </a-form-item>
              <a-form-item name="password">
                <a-input
                  v-model={[formState.password, 'value']}
                  type="password"
                  size="large"
                  v-slots={{
                    prefix: () => <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />,
                  }}
                  placeholder="123456"
                  autocomplete="off"
                ></a-input>
              </a-form-item>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                  block
                  loading={loading.value}
                >
                  {t('Login.Login')}
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    );
  },
});
