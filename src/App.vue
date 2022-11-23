<template>
  <template v-if="getIsLoading"><Preloader /></template>
  <template v-else>
    <div class="title-block">
      <h1 class="title">Список машин</h1>
      <div class="search-box">
        <input
          v-on:keyup.enter="search(searchValue)"
          v-model="searchValue"
          class="search-input"
          type="text"
          placeholder="Поиск по номеру"
        />
        <button class="search-btn" @click="search(searchValue)">
          <img src="@/assets/icons/search.svg" />
        </button>
      </div>
    </div>

    <template v-if="sortedMachines.length > 0">
      <Machine
        v-for="machine in sortedMachines"
        :key="machine.id"
        :machine_data="machine"
        @open-modal="showModal = true"
      />
    </template>
    <template v-else>
      <h3>Простите, по вашему запросу машин сейчас нет.</h3>
    </template>
  </template>
</template>

<script>
import Machine from "./components/Machine.vue";
import Preloader from "./components/Preloader.vue";
import { mapActions, mapGetters } from "vuex";
import {
  GET_IS_LOADING_TO_STATE,
  GET_SEARCH_VALUE_TO_STATE,
  GET_MACHINES_FROM_API,
  GET_TRADE_POINTS_FROM_API,
  GET_MACHINE_TYPES_FROM_API,
} from "./store/actions/actions-types";

export default {
  components: {
    Machine,
    Preloader,
  },
  data() {
    return {
      searchValue: "",
      sortedMachines: [],
    };
  },
  computed: {
    ...mapGetters(["getMachines", "getSearchValue", "getIsLoading"]),
  },
  methods: {
    ...mapActions([
      GET_MACHINES_FROM_API,
      GET_TRADE_POINTS_FROM_API,
      GET_MACHINE_TYPES_FROM_API,
      GET_SEARCH_VALUE_TO_STATE,
      GET_IS_LOADING_TO_STATE,
    ]),
    search(value) {
      this.GET_SEARCH_VALUE_TO_STATE(value);
    },
    sortMachinesBySearchValue(value) {
      this.sortedMachines = [...this.getMachines];
      if (value) {
        this.sortedMachines = this.getMachines.filter(function (item) {
          return item.serialNumber.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedMachines = this.getMachines;
      }
    },
  },
  mounted() {
    Promise.all([
      this.GET_TRADE_POINTS_FROM_API(),
      this.GET_MACHINE_TYPES_FROM_API(),
    ])
      .then(() => {
        return this.GET_MACHINES_FROM_API();
      })
      .then((res) => {
        if (res) {
          this.sortMachinesBySearchValue(this.getSearchValue);
          this.GET_IS_LOADING_TO_STATE(false);
        }
      });
  },
  watch: {
    getSearchValue() {
      this.sortMachinesBySearchValue(this.getSearchValue);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap");

#app {
  font-family: var(--body-font);
  max-width: 800px;
  margin: 50px auto;
  padding: 15px;
}

.title-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.title {
  font-size: 32px;
  font-weight: 700;
}

.search-box {
  position: relative;
}

.search-input {
  outline: none;
  border: none;
  padding: 5px 10px 5px 0;
  border-bottom: 1px solid #ddd;
  font-size: 15px;
  background-color: transparent;
}

.search-btn {
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 0;
  background-color: transparent;
  width: auto;
  height: auto;
  border: none;
}

.search-btn img {
  max-width: 20px;
}

@media screen and (max-width: 576px) {
  #app {
    margin: 30px auto;
  }
  .title-block {
    flex-direction: column-reverse;
    align-items: flex-start;
    row-gap: 20px;
  }
  .title {
    font-size: 24px;
  }
  .search-box {
    width: 100%;
  }
  .search-input {
    width: 100%;
  }
}
</style>
