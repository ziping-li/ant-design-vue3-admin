import { computed, defineComponent, toRaw } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const route = useRoute();
    const { t } = useI18n();

    const matched = computed(() => {
      return [
        { path: '/', meta: { breadcrumb: 't("Home.Breadcrumb")' } },
        ...toRaw(route.matched).slice(1),
      ];
    });

    return () => (
      <a-breadcrumb>
        {matched.value.map((match) => (
          <a-breadcrumb-item>
            <router-link to={match.path}>{t(match.meta.breadcrumb.slice(3, -2))}</router-link>
          </a-breadcrumb-item>
        ))}
      </a-breadcrumb>
    );
  },
});
