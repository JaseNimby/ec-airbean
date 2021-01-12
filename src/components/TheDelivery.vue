<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="wrapper">
        <p>hej{{ this.$root.orderArray }}</p>
        <img src="../assets/graphics/drone.svg" alt="" />
        <h1>Din beställning är på väg!</h1>
        <div>{{ timerCount }} minuter</div>
        <router-link to="/Meny"> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "delivery",
  data() {
    return {
      timerCount: 5,
    };
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.$emit("close");
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: block;
  align-items: center;
  justify-content: center;
}

.wrapper > div {
  font-size: 30px;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: rgb(235, 119, 84);
  color: rgb(250, 245, 239);
  overflow-x: auto;
  width: 80%;
  height: 80%;
  border-radius: 5px;
}

button {
  cursor: pointer;
}
</style>