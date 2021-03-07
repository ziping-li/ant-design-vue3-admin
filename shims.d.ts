import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }

  export interface MutationTree<S> {
    [key: string]: Mutation<S>;
  }
}
