<template>
  <div class="wrapper">
    <p>hej{{ this.$root.orderInfo }}</p>
    <img src="../assets/graphics/drone.svg" alt="" />
    <h1>Din beställning är på väg!</h1>
    <div>{{ timerCount }} minuter</div>
    <router-link to="/Meny">
      <button @click="$emit(`createUser`)">OK cool!</button>
    </router-link>
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
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
body {
  background-color: rgb(199, 143, 117);
  color: antiquewhite;
}

.wrapper {
  display: block;
  align-items: center;
  justify-content: center;
  background-color: rgb(235, 119, 84);
  color: rgb(250, 245, 239);
}

.wrapper > div {
  font-size: 30px;
}

button {
  cursor: pointer;
}
</style>