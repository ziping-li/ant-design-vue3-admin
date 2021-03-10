/**
 * user's authorized data by login
 */
import Cookies from 'js-cookie';
import { ActionTypes } from '../store/index';
import { userToken, whiteList } from './../config/constants';
import { logout } from './../plugins/utils';

export default async ({ route, store, redirect, i18n }: any) => {
  const userId = Cookies.get(userToken);
  if (userId) {
    if (route.path === '/login') {
      redirect('/');
    } else {
      // query user information
      if (!store.state.userInfo.id) {
        try {
          await store.dispatch(ActionTypes.QUERY, userId);
        } catch (err) {
          logout();
        }
      }
      // query all menu config
      if (!store.state.menu.length) {
        try {
          await store.dispatch(ActionTypes.MENU, i18n.global.locale);
        } catch (err) {
          console.log(err);
        }
      }
    }
  } else {
    if (!whiteList.includes(route.path)) {
      redirect('/login');
    }
  }
};
