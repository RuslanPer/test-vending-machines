import { createStore } from "vuex";
import { MachineService } from "../services/machine.service";
import {
  SET_MACHINES_TO_STATE,
  SET_TRADE_POINTS_TO_STATE,
  SET_MACHINE_TYPES_TO_STATE,
  SET_SEARCH_VALUE_TO_STATE,
  SET_IS_LOADING_TO_STATE,
} from "./mutation-types";

const store = createStore({
  state: {
    isLoading: true,
    searchValue: "",
    machines: [],
    tradePoints: [],
    machineTypes: [],
  },
  mutations: {
    [SET_MACHINES_TO_STATE](state, machines) {
      state.machines = machines.map((m) => ({
        ...m,
        tradePoint: state.tradePoints.find((tp) => tp.id === m.tradePointId),
        machineTypes: state.machineTypes.find((mt) => mt.id === m.typeId),
      }));
    },
    [SET_TRADE_POINTS_TO_STATE]: (state, points) => {
      state.tradePoints = points;
    },
    [SET_MACHINE_TYPES_TO_STATE]: (state, types) => {
      state.machineTypes = types;
    },
    [SET_SEARCH_VALUE_TO_STATE]: (state, value) => {
      state.searchValue = value;
    },
    [SET_IS_LOADING_TO_STATE]: (state, value) => {
      state.isLoading = value;
    },
  },
  actions: {
    GET_IS_LOADING_TO_STATE({ commit }, value) {
      commit(SET_IS_LOADING_TO_STATE, value);
    },
    GET_SEARCH_VALUE_TO_STATE({ commit }, value) {
      commit(SET_SEARCH_VALUE_TO_STATE, value);
    },
    GET_MACHINES_FROM_API({ commit }) {
      return MachineService.getAllMachines()
        .then((machines) => {
          commit(SET_MACHINES_TO_STATE, machines.data);
          return machines;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_TRADE_POINTS_FROM_API({ commit }) {
      return MachineService.getAllTradePoints()
        .then((points) => {
          commit(SET_TRADE_POINTS_TO_STATE, points.data);
          return points;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_MACHINE_TYPES_FROM_API({ commit }) {
      return MachineService.getAllMachineTypes()
        .then((types) => {
          commit(SET_MACHINE_TYPES_TO_STATE, types.data);
          return types;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getSearchValue(state) {
      return state.searchValue;
    },
    getMachines(state) {
      return state.machines;
    },
  },
});

export default store;
