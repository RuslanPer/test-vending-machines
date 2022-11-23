<template>
  <div>
    <h6 class="time-title">Время работы</h6>
    <p class="time-subtitle">Открыто до: {{ nowDayWorkingTime }}</p>
    <ul class="time-list">
      <li
        class="time-item"
        :key="day + time"
        v-for="(time, day) in changedTimes"
        :class="[day === nowDay ? 'active' : '']"
      >
        <span>{{ day }}</span>
        <span>{{ time }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    times: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      daysWeek: [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
      ],
    };
  },
  computed: {
    changedTimes: function () {
      let obj = { ...this.times };
      let newObj = {};
      let index = 0;

      for (let key in obj) {
        if (obj[key]) {
          obj[key] = obj[key].replace(";", " - ");

          let day = this.daysWeek[index];
          newObj[day] = obj[key].replace(";", " - ");
          index++;
        } else {
          obj[key] = "Выходной";

          let day = this.daysWeek[index];
          newObj[day] = "Выходной";
          index++;
        }
      }

      return newObj;
    },
    nowDay: function () {
      return Object.keys(this.changedTimes)[new Date().getDay() - 1];
    },
    nowDayWorkingTime: function () {
      return this.changedTimes[this.nowDay].slice(8);
    },
  },
};
</script>
<style>
.time-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
}

.time-subtitle {
  font-size: 16px;
  color: #666;
  padding-bottom: 7px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(1, 1, 1, 0.1);
}

.time-list {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.time-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.active {
  color: var(--first-color);
  font-weight: 600;
}
</style>
