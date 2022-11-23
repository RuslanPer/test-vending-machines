<template>
  <div :class="`tag ${types[code].class}`">{{ types[code].title }}</div>
</template>
<script>
export default {
  props: ["code"],
  data() {
    return {
      types: {
        coffee: {
          class: "tag-green",
          title: "Кофе",
        },
        hot_chocolate: {
          class: "tag-green",
          title: "Гор. шоколад",
        },
        only_non_cash_payments: {
          class: "tag-blue",
          title: "Безнал",
        },
        cashier: {
          class: "tag-blue",
          title: "Кассир",
        },
        juices: {
          class: "tag-yellow",
          title: "Соки",
        },
      },
    };
  },
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
