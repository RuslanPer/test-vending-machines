<template>
  <button class="btn" @click="$emit('open-modal')">{{ title }}</button>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style>
.btn {
  max-width: 130px;
  cursor: pointer;
  background-color: var(--first-color);
  color: #fff;
  font-size: 16px;
  font-family: var(--body-font);
  display: inline-block;
  line-height: 26px;
  font-weight: 400;
  border-radius: 5px;
  text-align: center;
  transition: all 0.7s ease-in-out;
  border: none;
  padding: 5px;
  border-radius: 6px;
}
.btn:hover {
  background-color: var(--text-color);
}
</style>
