import { createStore } from "vuex";

const store = createStore({
  state: {
    machines: [
      {
        id: 1,
        serialNumber: "FFTA4V",
        tradePointId: 1,
        floor: 1,
        typeId: 1,
      },
      {
        id: 2,
        serialNumber: "DF1245",
        tradePointId: 2,
        floor: 1,
        typeId: 1,
      },
      {
        id: 3,
        serialNumber: "DF1246",
        tradePointId: 2,
        floor: 2,
        typeId: 3,
      },
    ],
    tradePoints: [
      {
        id: 1,
        location: {
          address: "Казань, улица Татарстан 52",
          latitude: 55.778973,
          longitude: 49.109917,
        },
        workingTime: {
          mon: "08:00;22:00",
          tue: "08:00;22:00",
          wed: "08:00;22:00",
          thu: "08:00;22:00",
          fri: "08:00;22:00",
          sat: "08:00;22:00",
          sun: null,
        },
      },
      {
        id: 2,
        location: {
          address: "Казань, Спартаковская улица, 2к3",
          latitude: 55.781205,
          longitude: 49.126078,
        },
        workingTime: {
          mon: "10:00;20:00",
          tue: "10:00;20:00",
          wed: "10:00;20:00",
          thu: "10:00;20:00",
          fri: "10:00;18:00",
          sat: null,
          sun: null,
        },
      },
    ],
    machineTypes: [
      {
        id: 1,
        tags: ["only_non_cash_payments", "coffee"],
      },
      {
        id: 2,
        tags: ["cashier", "coffee", "hot_chocolate", "juices"],
      },
      {
        id: 3,
        tags: ["only_non_cash_payments", "juices"],
      },
    ],
  },
  getters: {
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
