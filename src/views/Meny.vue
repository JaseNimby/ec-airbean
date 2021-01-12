<template>
  <div>
    <h1>Meny</h1>
    <div class="cart">
      <img src="../assets/graphics/bag.svg" @click="cartVisability" />
      <p>{{ amount }}</p>
    </div>

    <TheMenu
      v-for="coffee in this.$root.coffeeMenu"
      :key="coffee.id"
      v-bind:coffeeList="coffee"
      v-on:added="addToOrder(coffee)"
    />
    <TheShoppingCart v-if="showCart" v-on:createOrder="createOrder" />
    <TheFooter />
  </div>
</template>

<script>
import TheMenu from "../components/TheMenu.vue";
import TheShoppingCart from "../components/TheShoppingCart.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheMenu,
    TheShoppingCart,
    TheFooter,
  },

  data() {
    return {
      amount: 0,
      showCart: false,
    };
  },

  methods: {
    addToOrder(theCoffee) {
      let clickedCoffee = this.$root.orderArray.find(
        (element) => element.title == theCoffee.title
      );
      if (clickedCoffee) {
        clickedCoffee.amount += 1;
        clickedCoffee.price += theCoffee.price;
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

    createOrder() {
      // this.showCart = !this.showCart;
      this.$root.profileInfo.push({
        orderId: Date.now(),
        name: "Lucy Elfman",
      });
      this.$router.push("/Profile");
    },
  },
};
</script>

<style scoped>
h1 {
  color: rgb(46, 42, 38);
}

.cart {
  background-color: rgb(46, 42, 38);
  width: 5%;
  height: 5%;
  position: relative;
  top: 0%;
  left: 40%;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
}

p {
  position: relative;
  top: 1%;
  left: 45%;
  font-size: 30px;
  color: rgb(199, 143, 117);
}
</style>