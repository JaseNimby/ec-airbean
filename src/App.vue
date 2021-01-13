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
body {
  background: lavender;
}

html,
body {
  height: calc(100% - 50&);
}
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
  padding: 30px;
  border-radius: 10px;
  margin: 50px auto 0 auto;
  height: calc(60% - 50%);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// @import "~bootstrap/dist/css/bootstrap.css";
</style>
