<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <WorkingTimes :times="times" />
      <button class="btn-modal-close" @click="$emit('close-modal')">✖</button>
    </div>
  </div>
</template>

<script>
import WorkingTimes from "./WorkingTimes.vue";

export default {
  components: {
    WorkingTimes,
  },
  props: ["times"],
  data() {
    return {
      isActive: true,
    };
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
  color: var(--first-color);
}

@media screen and (max-width: 576px) {
  .modal-overlay {
    padding: 20px;
    align-items: center;
  }
  .modal {
    margin-top: 0;
    width: 100%;
    padding: 20px;
  }
}
</style>
