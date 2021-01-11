<template>
  <div class="wrapper page">
    <img src="../assets/graphics/intro-graphic-left.svg" class="left" />
    <div class="center">
      <img
        src="../assets/graphics/airbean-landing.svg"
        class="logo"
        @click="$router.push('home')"
      />
    </div>
    <img src="../assets/graphics/intro-graphic-right.svg" class="right" />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: rgb(51, 160, 127);
  margin: 0;
}
.left {
  grid-column-start: 1;
}
.right {
  grid-column-start: 4;
}

.center {
  grid-column-start: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  cursor: pointer;
}
</style>
