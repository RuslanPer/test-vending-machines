import axios from "axios";

axios.defaults["baseURL"] = "http://localhost:3000";

export const MachineService = {
  getAllMachines: async () => {
    return axios.get("/machines");
  },
  async getAllTradePoints() {
    return axios.get("/tradePoints");
  },
  async getAllMachineTypes() {
    return axios.get("/machineTypes");
  },
};
