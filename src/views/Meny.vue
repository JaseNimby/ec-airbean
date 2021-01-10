<template>
  <div>
    <TheHeader v-bind:cartNumber="amount" />
    <h1>Meny</h1>

    <TheMenu
      v-for="coffee in this.$root.coffeeMenu"
      :key="coffee.id"
      v-bind:coffeeList="coffee"
      v-on:added="addToOrder(coffee)"
    />
    <div class="cart" v-if="showCart">
      <TheShoppingCart v-on:clickedCart="cartVisability" />
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

  data() {
    return {
      amount: 0,
      showCart: true,
    };
  },

  methods: {
    addToOrder(theCoffee) {
      let clickedCoffee;
      for (let element of this.$root.orderArray) {
        if (element.title == theCoffee.title) {
          clickedCoffee = element;
          break;
        }
      }
      if (clickedCoffee) {
        clickedCoffee.amount += 1;
        clickedCoffee.price += clickedCoffee.price;
      } else {
        this.$root.orderArray.push({
          title: theCoffee.title,
          price: theCoffee.price,
          amount: 1,
        });
      }
      this.amount += 1;
    },

    cartVisability() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped>
h1 {
  color: rgb(46, 42, 38);
}
</style>