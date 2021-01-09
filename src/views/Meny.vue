<template>
  <div>
    <TheHeader />
    <div>{{ amount }}</div>
    <h1>Meny</h1>

    <TheMenu
      v-for="coffee in coffeeMenu"
      :key="coffee.id"
      v-bind:coffeeList="coffee"
      v-on:added="addToOrder(coffee)"
    />
    <div>
      <TheShoppingCart
        v-for="item in shoppingCart"
        :key="item.id"
        v-bind:cartItems="item"
      />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheMenu from "../components/TheMenu.vue";
import TheShoppingCart from "../components/TheShoppingCart.vue";

import TheFooter from "../components/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter, TheMenu, TheShoppingCart },

  computed: {
    coffeeMenu() {
      return this.$root.coffeeMenu;
    },
    shoppingCart() {
      return this.$root.orderArray;
    },
  },

  data() {
    return {
      amount: 0,
    };
  },

  methods: {
    addToOrder(theCoffee) {
      this.$root.orderArray.push({
        title: theCoffee.title,
        price: theCoffee.price,
        amount: 1,
      });
      this.amount += 1;
    },
  },
};
</script>

<style scoped>
h1 {
  color: rgb(46, 42, 38);
}

.shoppingCart {
  color: rgb(46, 42, 38);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
</style>