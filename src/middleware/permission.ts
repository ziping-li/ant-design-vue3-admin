/**
 * user's router permission
 */
import { whiteList } from './../config/constants';

export default ({ route, store, redirect }: any) => {
  if (!whiteList.includes(route.path)) {
    if (
      !store.state.userInfo.permissions ||
      !store.state.userInfo.permissions.length ||
      (route.meta.permissionCode && !store.state.userInfo.permissions.includes(route.meta.permissionCode))
    ) {
      redirect('/403');
    }
  }
};
