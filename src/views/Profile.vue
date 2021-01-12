<template>
  <div>
    <TheRegister
      v-on:close="visibleModal"
      v-if="visible"
      v-on:tracked="tracker"
    />
    <TheDelivery v-on:close="visibleModal" v-if="showDelivery" />
    <TheLoader v-model="loading" v-if="loading" />
    {{ users }} {{ eta }} {{ orderId }}
  </div>
</template>

<script>
import TheRegister from "@/components/TheRegister.vue";
import TheDelivery from "@/components/TheDelivery.vue";
import TheLoader from "@/components/TheLoader.vue";
import * as API from "@/api";

export default {
  name: "profile",
  components: { TheRegister, TheDelivery, TheLoader },
  data() {
    return {
      visible: true,
      showDelivery: false,
      loading: true,
      users: [],
      orderId: "",
      eta: 0,
    };
  },

  methods: {
    visibleModal() {
      this.showDelivery = !this.showDelivery;
      this.visible = false;
    },

    tracker(range) {
      console.log(range.orderId, range.eta);
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
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: rgb(252, 239, 239);
  background-color: rgb(46, 42, 38);
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>