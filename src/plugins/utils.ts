type RouterType = 'push' | 'replace' | 'external';

export default ({ router }: any, inject: any) => {
  inject("navigateTo", (url: string | undefined, target: RouterType = 'push') => {
    if (!url) {
      router.back();
    } else {
      if (target === 'external') {
        window.open(url);
      } else {
        router[target](url);
      }
    }
  });
};
