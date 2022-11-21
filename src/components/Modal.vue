<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <h6 class="modal-title">Время работы</h6>
      <p class="modal-subtitle">Открыто до: {{ nowDayWorkingTime }}</p>
      <ul class="modal-list">
        <li class="modal-item" :class="['mon' === nowDay ? 'active' : '']">
          <span>Понедельник</span>
          <span>{{ changedTimes.mon }}</span>
        </li>
        <li class="modal-item" :class="['tue' === nowDay ? 'active' : '']">
          <span>Вторник</span>
          <span>{{ changedTimes.tue }}</span>
        </li>
        <li class="modal-item" :class="['wed' === nowDay ? 'active' : '']">
          <span>Среда</span>
          <span>{{ changedTimes.wed }}</span>
        </li>
        <li class="modal-item" :class="['thu' === nowDay ? 'active' : '']">
          <span>Четверг</span>
          <span>{{ changedTimes.thu }}</span>
        </li>
        <li class="modal-item" :class="['fri' === nowDay ? 'active' : '']">
          <span>Пятница</span>
          <span>{{ changedTimes.fri }}</span>
        </li>
        <li class="modal-item" :class="['sat' === nowDay ? 'active' : '']">
          <span>Суббота</span>
          <span>{{ changedTimes.sat }}</span>
        </li>
        <li class="modal-item" :class="['sun' === nowDay ? 'active' : '']">
          <span>Воскресенье</span>
          <span>{{ changedTimes.sun }}</span>
        </li>
      </ul>
      <button class="btn-modal-close" @click="$emit('close-modal')">✖</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["times"],
  data() {
    return {
      isActive: true,
      workingTime: {
        Понедельник: "",
        Вторник: "",
        Среда: "",
        Четверг: "",
        Пятница: "",
        Суббота: "",
        Воскресенье: "",
      },
    };
  },
  computed: {
    changedTimes: function () {
      let obj = { ...this.times };

      for (let key in obj) {
        if (obj[key]) {
          obj[key] = obj[key].replace(";", " - ");
        } else {
          obj[key] = "Выходной";
        }
      }

      return obj;
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
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  position: relative;
  background-color: white;
  height: 300px;
  width: 300px;
  margin-top: 10%;
  padding: 60px;
  border-radius: 20px;
}

.modal-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
}

.modal-subtitle {
  font-size: 16px;
  color: #666;
  padding-bottom: 7px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(1, 1, 1, 0.1);
}

.modal-list {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.modal-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 30px;
  font-size: 20px;
  color: #c0c5cb;
  background-color: transparent;
  border: none;
  transition: all 0.7s ease-in-out;
}

.btn-modal-close:hover {
  color: #00a9a4;
}

.active {
  color: #00a9a4;
  font-weight: 600;
}
</style>
