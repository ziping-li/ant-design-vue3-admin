import { MutationTree, ActionTree, ActionContext } from 'vuex';
import { Overview } from '../config/types';

// Request Data Url
const OVERVIEW_URL = '/dashboard/overview';
const PROJECT_URL = '/workplace/projects';
const TEAM_URL = '/workplace/teams';
const MOVEMENT_URL = '/workplace/movements';
const RADAR_URL = '/workplace/radar';

// State
export type State = {
  overview: Overview;
  projects: Record<any, any>;
  teams: Record<any, any>;
  movements: Record<any, any>;
  radarData: Record<any, any>
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
  projects: {},
  teams: {},
  movements: {},
  radarData: {}
};

// Mutations
export enum MutationTypes {
  SET_OVERVIEW = 'SET_OVERVIEW',
  SET_PROJECT = 'SET_PROJECT',
  SET_TEAM = 'SET_TEAM',
  SET_MOVEMENT = 'SET_MOVEMENT',
  SET_RADAR = 'SET_RADAR'
}

type Mutations<S = State> = {
  [MutationTypes.SET_OVERVIEW](state: S, payload: Overview): void;
  [MutationTypes.SET_PROJECT](state: S, payload: Record<any, any>): void;
  [MutationTypes.SET_TEAM](state: S, payload: Record<any, any>): void;
  [MutationTypes.SET_MOVEMENT](state: S, payload: Record<any, any>): void;
  [MutationTypes.SET_RADAR](state: S, payload: Record<any, any>): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_OVERVIEW](state, payload: Overview) {
    state.overview = payload;
  },
  [MutationTypes.SET_PROJECT](state, payload: Record<any, any>) {
    state.projects = payload;
  },
  [MutationTypes.SET_TEAM](state, payload: Record<any, any>) {
    state.teams = payload;
  },
  [MutationTypes.SET_MOVEMENT](state, payload: Record<any, any>) {
    state.movements = payload;
  },
  [MutationTypes.SET_RADAR](state, payload: Record<any, any>) {
    state.radarData = payload;
  },
};

// Actions
export enum ActionTypes {
  OVERVIEW = 'OVERVIEW',
  WORKPLACE = 'WORKPLACE',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

interface Actions {
  [ActionTypes.OVERVIEW]({ commit }: AugmentedActionContext): Promise<any>;
  [ActionTypes.WORKPLACE]({ commit }: AugmentedActionContext): Promise<any>;
}

const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.OVERVIEW]({ commit }) {
    const { data } = await this.$request.get(OVERVIEW_URL);
    commit(MutationTypes.SET_OVERVIEW, data);
  },

  async [ActionTypes.WORKPLACE]({ commit }) {
    const [projects, teams, movements, radarData] = await Promise.all([
      await this.$request.get(PROJECT_URL),
      await this.$request.get(TEAM_URL),
      await this.$request.get(MOVEMENT_URL),
      await this.$request.get(RADAR_URL),
    ]);
    commit(MutationTypes.SET_PROJECT, projects.data);
    commit(MutationTypes.SET_TEAM, teams.data);
    commit(MutationTypes.SET_MOVEMENT, movements.data);
    commit(MutationTypes.SET_RADAR, radarData.data);
  },
};

// named default
export default {
  state,
  mutations,
  actions,
};
