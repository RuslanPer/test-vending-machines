<template>
  <div class="machine">
    <div class="machineText">
      <div class="machineHead">
        <h2 class="machineSerial">#{{ machine.serialNumber }}</h2>
        <TagVue :key="key" v-for="(tag, key) in tags" :title="tag" />
      </div>
      <h4 class="machineAddress">{{ address.address }}</h4>
      <span class="machineFloor">Этаж: {{ machine.floor }}</span>
      <ButtonVue title="Время работы" />
    </div>
    <div>Img</div>
  </div>
</template>
<script>
import ButtonVue from "./Button.vue";
import TagVue from "./Tag.vue";

export default {
  components: {
    ButtonVue,
    TagVue,
  },
  props: ["machine", "tags", "address"],
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
</style>
