// import axios from "axios";
import { createStore } from "vuex";
import { MachineService } from "../services/machine.service";

const store = createStore({
  state: {
    searchValue: "",
    machines: [],
    tradePoints: [],
    machineTypes: [],
  },
  mutations: {
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
      state.searchValue = value;
    },
    SET_MACHINES_TO_STATE: (state, machines) => {
      state.machines = machines;
    },
    SET_TRADE_POINTS_TO_STATE: (state, points) => {
      state.tradePoints = points;
    },
    SET_MACHINE_TYPES_TO_STATE: (state, types) => {
      state.machineTypes = types;
    },
  },
  actions: {
    GET_SEARCH_VALUE_TO_VUEX({ commit }, value) {
      commit("SET_SEARCH_VALUE_TO_VUEX", value);
    },
    GET_MACHINES_FROM_API({ commit }) {
      return MachineService.getAllMachines()
        .then((machines) => {
          commit("SET_MACHINES_TO_STATE", machines.data);
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
          commit("SET_TRADE_POINTS_TO_STATE", points.data);
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
          commit("SET_MACHINE_TYPES_TO_STATE", types.data);
          return types;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    getSearchValue(state) {
      return state.searchValue;
    },
    getMachines(state) {
      return state.machines;
    },
    getMachineTypesById: (state) => (typeId) => {
      return state.machineTypes.find((el) => el.id === typeId).tags;
    },
    getMachinesAddressById: (state) => (tradePointId) => {
      return state.tradePoints.find((el) => el.id === tradePointId).location;
    },
    getMachinesWorkingTimeById: (state) => (tradePointId) => {
      return state.tradePoints.find((el) => el.id === tradePointId).workingTime;
    },
  },
});

export default store;
