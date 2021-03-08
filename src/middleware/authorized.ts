import Cookies from 'js-cookie';
import { ActionTypes } from '../store/index';
import { userToken, whiteList } from './../config/constants';
import { logout } from './../plugins/utils';

export default async ({ route, store, redirect }: any) => {
  const userId = Cookies.get(userToken);
  if (userId) {
    if (route.path === '/login') {
      redirect('/');
    } else {
      if (!store.state.userInfo.id) {
        try {
          await store.dispatch(ActionTypes.QUERY, userId);
        } catch (err) {
          logout();
        }
      }
    }
  } else {
    if (!whiteList.includes(route.path)) {
      redirect('/login');
    }
  }
};
