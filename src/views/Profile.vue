<template>
  <div>
    <TheRegister v-if="visible" v-on:tracker="tracker" />
    <div class="wrapper">
      <p>{{ orderNr }}</p>
      <img src="../assets/graphics/drone.svg" alt="" />
      <h1>Din beställning är på väg!</h1>
      <div>{{ eta }} minuter</div>
    </div>

    <TheLoader v-model="loading" v-if="loading" />
  </div>
</template>

<script>
import TheRegister from "@/components/TheRegister.vue";
import TheLoader from "@/components/TheLoader.vue";
import * as API from "@/api";
import { generateOrderNr, generateETA } from "@/assets/backend/utils/utils.js";

export default {
  name: "profile",
  components: { TheRegister, TheLoader },
  data() {
    return {
      visible: true,
      loading: true,
      users: [],
      orderNr: "",
      eta: 0,
    };
  },

  methods: {
    tracker() {
      this.orderNr = generateOrderNr();
      this.eta = generateETA();
      this.visible = false;
    },
  },

  async mounted() {
    const users = await API.fetchUsers();
    this.users = users;
    this.loading = false;
  },
};
</script>

<style scoped>
.wrapper {
  background-color: rgb(235, 119, 84);
}
</style>