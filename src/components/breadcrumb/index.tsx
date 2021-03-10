import { computed, defineComponent, toRaw } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const route = useRoute();
    const { t } = useI18n();

    const matched = computed(() => {
      const currentMatched = toRaw(route.matched)
        .slice(1)
        .filter((n) => n.meta.title);

      if (currentMatched.find((item) => item.path === '/')) {
        return currentMatched;
      } else {
        return [{ path: '/', meta: { title: 't("Home.Title")' } }, ...currentMatched];
      }
    });

    return () => (
      <a-breadcrumb class="d-none d-sm-inline-block">
        {matched.value.map((match) => (
          <a-breadcrumb-item>
            <router-link to={match.path}>
              {/^t\(.+\)$/.test(match.meta.title)
                ? t(match.meta.title.slice(3, -2))
                : match.meta.title}
            </router-link>
          </a-breadcrumb-item>
        ))}
      </a-breadcrumb>
    );
  },
});
