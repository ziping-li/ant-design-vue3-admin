declare module '*.vue' {
  import { defineComponent } from 'src/vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '@convue-lib/scroll';

declare module '@convue-lib/utils';
