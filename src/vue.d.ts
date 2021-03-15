declare module '*.vue' {
  import { defineComponent } from 'src/vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '@convue-lib/phone';
declare module '@convue-lib/otp-input';
declare module '@convue-lib/otp-send';
declare module '@convue-lib/formatted';
declare module '@convue-lib/scroll';
declare module '@convue-lib/utils';
