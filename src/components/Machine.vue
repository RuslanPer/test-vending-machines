<template>
  <div class="machine">
    <div>
      <div>
        <h2>#{{ machine.serialNumber }}</h2>
        <div :key="key" v-for="(tag, key) in tags">{{ tag }}</div>
      </div>

      <h4>Адрес</h4>
      <span>Этаж: {{ machine.floor }}</span>
      <ButtonVue title="Время работы" />
    </div>
    <div>Img</div>
  </div>
</template>
<script>
import ButtonVue from "./Button.vue";

export default {
  components: {
    ButtonVue,
  },
  props: ["machine", "tags"],
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
}
</style>
