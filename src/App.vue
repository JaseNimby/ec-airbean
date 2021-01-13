<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  background-color: rgb(240, 224, 225);
}
#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: "Work Sans", Tahoma, Geneva, Verdana, sans-serif;
}

// @import "~bootstrap/dist/css/bootstrap.css";
</style>
