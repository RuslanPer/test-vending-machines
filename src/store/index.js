import { createStore } from "vuex";
import actions from "./actions/actions";
import mutations from "./mutations/mutations";

const store = createStore({
  state: {
    isLoading: true,
    searchValue: "",
    machines: [],
    tradePoints: [],
    machineTypes: [],
  },
  mutations,
  actions,
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
