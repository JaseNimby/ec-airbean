<template>
  <div>
    <TheRegister v-on:close="visibleModal" v-if="visible" />
    <TheDelivery v-if="showDelivery" />
  </div>
</template>

<script>
import TheRegister from "@/components/TheRegister.vue";
import TheDelivery from "@/components/TheDelivery.vue";

export default {
  name: "profile",
  components: { TheRegister, TheDelivery },
  data() {
    return {
      visible: true,
      showDelivery: false,
    };
  },
  methods: {
    visibleModal() {
      this.showDelivery = !this.showDelivery;
    },
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