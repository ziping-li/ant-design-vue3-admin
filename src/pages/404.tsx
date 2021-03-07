import { defineComponent, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    onBeforeMount(() => {
      router.replace("/dashboard");
    });
  },
});
