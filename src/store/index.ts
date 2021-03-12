import { MutationTree, ActionTree, ActionContext } from 'vuex';
import Cookies from 'js-cookie';
import { userToken } from '../config/constants';
import { LoginParams, UserInfo, Notification, Menu } from '../config/types';

// Request Data Url
const LOGIN_URL = '/login';
const QUERY_URL = '/queryUserInfo';
const NOTIFICATION_URL = '/notification';
const MENU_URL = '/menu';

// State
export type State = {
  userInfo: Partial<UserInfo>;
  notifications: Notification[];
  menu: Menu[];
  userMenu: Menu[];
};

const state: State = {
  userInfo: {},
  notifications: [],
  menu: [],
  userMenu: [],
};

// Mutations
export enum MutationTypes {
  SET_USERINFO = 'SET_USERINFO',
  SET_NOTIFICATION = 'SET_NOTIFICATION',
  SET_MENU = 'SET_MENU',
  SET_USER_MENU = 'SET_USER_MENU',
}

type Mutations<S = State> = {
  [MutationTypes.SET_USERINFO](state: S, payload: UserInfo): void;
  [MutationTypes.SET_NOTIFICATION](state: S, payload: Notification[]): void;
  [MutationTypes.SET_MENU](state: S, payload: Menu[]): void;
  [MutationTypes.SET_USER_MENU](state: S, payload: Menu[]): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USERINFO](state, payload: UserInfo) {
    state.userInfo = payload;
  },
  [MutationTypes.SET_NOTIFICATION](state, payload: Notification[]) {
    state.notifications = payload;
  },
  [MutationTypes.SET_MENU](state, payload: Menu[]) {
    state.menu = payload;
  },
  [MutationTypes.SET_USER_MENU](state, payload: Menu[]) {
    state.userMenu = payload;
  },
};

// Actions
export enum ActionTypes {
  LOGIN = 'LOGIN',
  QUERY = 'QUERY',
  NOTIFICATION = 'NOTIFICATION',
  MENU = 'MENU',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

interface Actions {
  [ActionTypes.LOGIN]({ commit }: AugmentedActionContext, payload: LoginParams): Promise<any>;
  [ActionTypes.QUERY]({ commit }: AugmentedActionContext, id: number): Promise<any>;
  [ActionTypes.NOTIFICATION]({ commit }: AugmentedActionContext): Promise<any>;
  [ActionTypes.MENU]({ commit }: AugmentedActionContext, locale: string): Promise<any>;
}

const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN]({ commit }, payload: LoginParams) {
    const { data } = await this.$request.post(LOGIN_URL, payload);
    if (data) {
      commit(MutationTypes.SET_USERINFO, data);
      Cookies.set(userToken, data.id.toString(), {
        expires: 1,
      });
    }
  },

  async [ActionTypes.QUERY]({ commit }, id: number) {
    const { data } = await this.$request.get(QUERY_URL, { params: { id } });
    if (data) {
      commit(MutationTypes.SET_USERINFO, data);
    }
  },

  async [ActionTypes.NOTIFICATION]({ commit }) {
    const { data } = await this.$request.get(NOTIFICATION_URL);
    if (data) {
      commit(MutationTypes.SET_NOTIFICATION, data);
    }
  },

  async [ActionTypes.MENU]({ commit }, locale: string) {
    const { data } = await this.$request.get(MENU_URL, { params: { locale } });
    if (data) {
      commit(MutationTypes.SET_MENU, data);

      let userMenu: Menu[] = [];
      data.forEach((item: Menu) => {
        if (!item.permissionCode || state.userInfo.permissions?.includes(item.permissionCode)) {
          userMenu.push(item);
        }
        if (item.children) {
          item.children = item.children.filter(
            (child: Menu) =>
              !child.permissionCode || state.userInfo.permissions?.includes(child.permissionCode)
          );
        }
      });

      commit(MutationTypes.SET_USER_MENU, userMenu);
    }
  },
};

// named default
export default {
  state,
  mutations,
  actions,
};
