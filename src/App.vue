<script>
import Machine from "./components/Machine.vue";

export default {
  components: {
    Machine,
  },
};
</script>

<template>
  <div class="titleBlock">
    <h1 class="title">Список машин</h1>
    <div class="searchBox">
      <input class="searchInput" type="text" placeholder="Search" />
      <button class="searchBtn">
        <img src="./assets/icons/search.svg" />
      </button>
    </div>
  </div>

  <Machine
    v-for="machine in this.$store.state.machines"
    :key="machine.id"
    :machine="machine"
    :tags="this.$store.getters.getMachineTypesById(machine.typeId)"
    :address="this.$store.getters.getMachinesAddressById(machine.tradePointId)"
  />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap");
@import "./assets/styles/reset.css";

#app {
  font-family: "Barlow", sans-serif;
  max-width: 800px;
  margin: 50px auto;
}

.titleBlock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.title {
  font-size: 32px;
  font-weight: 700;
}

.searchBox {
  position: relative;
}

.searchInput {
  outline: none;
  border: none;
  padding: 5px 10px 5px 0;
  border-bottom: 1px solid #ddd;
  font-size: 15px;
  background-color: transparent;
}

.searchBtn {
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 0;
  background-color: transparent;
  width: auto;
  height: auto;
  border: none;
}

.searchBtn img {
  max-width: 20px;
}
</style>
