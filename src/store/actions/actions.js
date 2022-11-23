import { MachineService } from "../../services/machine.service";
import {
  GET_IS_LOADING_TO_STATE,
  GET_SEARCH_VALUE_TO_STATE,
  GET_MACHINES_FROM_API,
  GET_TRADE_POINTS_FROM_API,
  GET_MACHINE_TYPES_FROM_API,
} from "./actions-types";
import {
  SET_MACHINES_TO_STATE,
  SET_TRADE_POINTS_TO_STATE,
  SET_MACHINE_TYPES_TO_STATE,
  SET_SEARCH_VALUE_TO_STATE,
  SET_IS_LOADING_TO_STATE,
} from "../mutations/mutation-types";

export default {
  [GET_IS_LOADING_TO_STATE]({ commit }, value) {
    commit(SET_IS_LOADING_TO_STATE, value);
  },
  [GET_SEARCH_VALUE_TO_STATE]({ commit }, value) {
    commit(SET_SEARCH_VALUE_TO_STATE, value);
  },
  [GET_MACHINES_FROM_API]({ commit }) {
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
  [GET_TRADE_POINTS_FROM_API]({ commit }) {
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
  [GET_MACHINE_TYPES_FROM_API]({ commit }) {
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
};
