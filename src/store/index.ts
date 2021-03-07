import { MutationTree, ActionTree, ActionContext } from 'vuex';

// User data types
const LOGIN_URL = '/login';
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

// State
const state = {
  userInfo: {},
};

type State = typeof state;

// Mutations
export enum MutationTypes {
  SET_USERINFO = 'SET_USERINFO',
}

type Mutations<S = State> = {
  [MutationTypes.SET_USERINFO](state: S, payload: UserInfo): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USERINFO](state, payload: UserInfo) {
    state.userInfo = payload;
  },
};

// Actions
export enum ActionTypes {
  LOGIN = 'LOGIN',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

interface Actions {
  [ActionTypes.LOGIN]({ commit }: AugmentedActionContext, payload: LoginParams): Promise<any>;
}

const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN]({ commit }, payload: LoginParams) {
    const { data } = await this.$request.post(LOGIN_URL, payload);
    commit(MutationTypes.SET_USERINFO, data || {});
  },
};

// named default
export default {
  state,
  mutations,
  actions,
};
