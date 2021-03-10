import Cookies from 'js-cookie';
import { userToken } from './../config/constants';

type RouterType = 'push' | 'replace' | 'external';

export const logout = () => {
  Cookies.remove(userToken);
  window.location.reload();
};

export default ({ router, t }: any, inject: any) => {
  inject('navigateTo', (url: string | undefined, target: RouterType = 'push') => {
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

  inject('getLocaleText', (text: string) => {
    return /^t\(.+\)$/.test(text) ? t(text.slice(3, -2)) : text;
  });
};
