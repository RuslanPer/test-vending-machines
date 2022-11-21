<template>
  <div v-if="title === 'coffee'" class="tag tag-green">Кофе</div>
  <div v-else-if="title === 'only_non_cash_payments'" class="tag tag-blue">
    Безнал
  </div>
  <div v-else-if="title === 'cashier'" class="tag tag-blue">Кассир</div>
  <div v-else-if="title === 'hot_chocolate'" class="tag tag-green">
    Гор. шоколад
  </div>
  <div v-else-if="title === 'juices'" class="tag tag-yellow">Соки</div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style>
.tag {
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
}

.tag-blue {
  background-color: rgba(219, 234, 254);
  color: rgba(59, 130, 246);
}

.tag-yellow {
  color: rgba(245, 158, 11);
  background-color: rgba(254, 243, 199);
}

.tag-green {
  color: rgba(16, 185, 129);
  background-color: rgba(209, 250, 229);
}
</style>
