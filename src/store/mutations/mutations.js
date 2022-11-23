import {
  SET_MACHINES_TO_STATE,
  SET_TRADE_POINTS_TO_STATE,
  SET_MACHINE_TYPES_TO_STATE,
  SET_SEARCH_VALUE_TO_STATE,
  SET_IS_LOADING_TO_STATE,
} from "./mutation-types";

export default {
  [SET_MACHINES_TO_STATE](state, machines) {
    state.machines = machines.map((m) => ({
      ...m,
      tradePoint: state.tradePoints.find((tp) => tp.id === m.tradePointId),
      machineTypes: state.machineTypes.find((mt) => mt.id === m.typeId),
    }));
  },
  [SET_TRADE_POINTS_TO_STATE](state, points) {
    state.tradePoints = points;
  },
  [SET_MACHINE_TYPES_TO_STATE](state, types) {
    state.machineTypes = types;
  },
  [SET_SEARCH_VALUE_TO_STATE](state, value) {
    state.searchValue = value;
  },
  [SET_IS_LOADING_TO_STATE](state, value) {
    state.isLoading = value;
  },
};
