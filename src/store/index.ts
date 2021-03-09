import { MutationTree, ActionTree, ActionContext } from 'vuex';
import Cookies from 'js-cookie';
import { userToken } from '../config/constants';

// Request Data Types
const LOGIN_URL = '/login';
const QUERY_URL = '/queryUserInfo';
const NOTIFICATION_URL = '/notification';
export interface LoginParams {
  username: string;
  password: string;
}
export interface UserInfo {
  id: number;
  name: string;
  password: string;
  role: string;
}
export interface Notification {
  id: number;
  type: number;
  title: Record<string, string>;
  time: string;
  isReaded: boolean;
}

// State
type State = {
  userInfo: Record<string, any>;
  notifications: Notification[];
};

const state = {
  userInfo: {},
  notifications: [],
};

// Mutations
export enum MutationTypes {
  SET_USERINFO = 'SET_USERINFO',
  SET_NOTIFICATION = 'SET_NOTIFICATION',
}

type Mutations<S = State> = {
  [MutationTypes.SET_USERINFO](state: S, payload: UserInfo): void;
  [MutationTypes.SET_NOTIFICATION](state: S, payload: Notification[]): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USERINFO](state, payload: UserInfo) {
    state.userInfo = payload;
  },
  [MutationTypes.SET_NOTIFICATION](state, payload: Notification[]) {
    state.notifications = payload;
  },
};

// Actions
export enum ActionTypes {
  LOGIN = 'LOGIN',
  QUERY = 'QUERY',
  NOTIFICATION = 'NOTIFICATION',
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
};

// named default
export default {
  state,
  mutations,
  actions,
};
