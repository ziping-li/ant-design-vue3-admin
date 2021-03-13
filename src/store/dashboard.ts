import { MutationTree, ActionTree, ActionContext } from 'vuex';
import { Overview } from '../config/types';

// Request Data Url
const OVERVIEW_URL = '/dashboard/overview';

// State
export type State = {
  overview: Overview;
};

const state: State = {
  overview: {
    miniBar: [],
    miniArea: [],
    barData: [],
    barData2: [],
    rankList: {},
    searchData: {},
    pieData: {},
  },
};

// Mutations
export enum MutationTypes {
  SET_OVERVIEW = 'SET_OVERVIEW',
}

type Mutations<S = State> = {
  [MutationTypes.SET_OVERVIEW](state: S, payload: Overview): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_OVERVIEW](state, payload: Overview) {
    state.overview = payload;
  },
};

// Actions
export enum ActionTypes {
  OVERVIEW = 'OVERVIEW',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

interface Actions {
  [ActionTypes.OVERVIEW]({ commit }: AugmentedActionContext): Promise<any>;
}

const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.OVERVIEW]({ commit }) {
    const { data } = await this.$request.get(OVERVIEW_URL);
    commit(MutationTypes.SET_OVERVIEW, data);
  },
};

// named default
export default {
  state,
  mutations,
  actions,
};
