<template>
  <div class="machine">
    <div class="machine-text">
      <div class="machine-head">
        <h2 class="machine-serial">#{{ machine_data.serialNumber }}</h2>
        <TagVue
          :key="key"
          v-for="(tag, key) in machine_data.machineTypes.tags"
          :code="tag"
        />
      </div>
      <h4 class="machine-address">
        {{ machine_data.tradePoint.location.address }}
      </h4>
      <span class="machine-floor">Этаж: {{ machine_data.floor }}</span>
      <ButtonVue @open-modal="showModal = true" title="Время работы" />
    </div>
    <div class="machine-map">
      <img
        :src="`${this.mapURL}${machine_data.tradePoint.location.longitude},${machine_data.tradePoint.location.latitude}`"
        alt="map"
      />
    </div>
  </div>
  <Modal
    v-show="showModal"
    @close-modal="showModal = false"
    :times="machine_data.tradePoint.workingTime"
  />
</template>

<script>
import ButtonVue from "./Button.vue";
import TagVue from "./Tag.vue";
import Modal from "./Modal.vue";

export default {
  components: {
    ButtonVue,
    TagVue,
    Modal,
  },
  emits: ["close-modal", "open-modal"],
  props: {
    machine_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      showModal: false,
      mapURL: "http://static.maps.2gis.com/1.0?zoom=17&size=500,350&markers=",
    };
  },
};
</script>

<style>
.machine {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px rgb(0 0 0 / 7%);
  padding: 25px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}

.machine-text {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: space-between;
}

.machine-head {
  display: flex;
  margin-bottom: 10px;
  column-gap: 10px;
}

.machine-serial {
  margin-right: 10px;
  font-weight: 700;
  font-size: 22px;
}

.machine-address {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-color);
}

.machine-floor {
  font-size: 16px;
  color: #666;
}

.machine-map {
  width: 250px;
}

.machine-map img {
  max-width: 100%;
}

@media screen and (max-width: 640px) {
  .machine {
    flex-direction: column;
    row-gap: 15px;
  }

  .machine-map {
    align-self: center;
    max-width: 300px;
  }
}
</style>
