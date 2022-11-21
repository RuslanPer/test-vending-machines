<template>
  <div class="machine">
    <div class="machineText">
      <div class="machineHead">
        <h2 class="machineSerial">#{{ machine.serialNumber }}</h2>
        <TagVue :key="key" v-for="(tag, key) in tags" :title="tag" />
      </div>
      <h4 class="machineAddress">{{ address.address }}</h4>
      <span class="machineFloor">Этаж: {{ machine.floor }}</span>
      <ButtonVue @open-modal="showModal = true" title="Время работы" />
    </div>
    <div class="machineMap">
      <img
        :src="`http://static.maps.2gis.com/1.0?zoom=17&size=500,350&markers=${address.longitude},${address.latitude}`"
        alt="map"
      />
    </div>
  </div>
  <Modal v-show="showModal" @close-modal="showModal = false" :times="times" />
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
  props: ["machine", "tags", "address", "times"],
  data() {
    return {
      showModal: false,
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

.machineText {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: space-between;
}

.machineHead {
  display: flex;
  margin-bottom: 10px;
  column-gap: 10px;
}

.machineSerial {
  margin-right: 10px;
  font-weight: 700;
  font-size: 22px;
}

.machineAddress {
  font-size: 17px;
  font-weight: 600;
  color: #010647;
}

.machineFloor {
  font-size: 16px;
  color: #666;
}

.machineMap {
  width: 250px;
}

.machineMap img {
  max-width: 100%;
}
</style>
