import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    const { state } = useStore();

    const permissions = computed(() => state.userInfo.permissions);

    return () => (
      <>{(!props.code || permissions.value.includes(props.code)) && slots.default?.()}</>
    );
  },
});
