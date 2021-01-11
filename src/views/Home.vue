<template>
  <div class="wrapper">
    <TheHeader v-on:meny="show('meny')" v-on:about="show('about')" />

    <About v-show="aboutVisible" />
    <Meny v-show="menyVisible" />

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

import About from "./About.vue";
import Meny from "./Meny.vue";

export default {
  components: { TheHeader, TheFooter, About, Meny },
  name: "Home",
  data() {
    return {
      aboutVisible: true,
      menyVisible: false,
    };
  },
  methods: {
    show(view) {
      this.aboutVisible = false;
      this.manyVisible = false;
      switch (view) {
        case "about":
          this.aboutVisible = true;
          break;

        case "meny":
          this.menyVisible = true;
          break;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: rgb(252, 239, 239);
  color: rgb(46, 42, 38);
  display: inline-block;
  justify-content: center;
  align-items: center;
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
