{
  /* <route>
  meta:
    breadcrumb: t('Home.Breadcrumb')
    head:
      title: t('Home.Title')
</route> */
}

import { defineComponent, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    onBeforeMount(() => {
      router.replace('/dashboard/overview');
    });

    return () => <div></div>;
  },
});
