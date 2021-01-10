<template>
  <li class="cart">
    <section class="col2">
      <h2>{{ cartItems.title }}</h2>
      <p>{{ cartItems.price }} kr</p>
    </section>
    <aside class="col3">
      <img src="../assets/graphics/arrow-up.svg" @click="$emit(`plus`)" />
      {{ cartItems.amount }}
      <img src="../assets/graphics/arrow-down.svg" @click="$emit(`minus`)" />
    </aside>
  </li>
</template>

<script>
export default {
  props: { cartItems: Object },

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
        clickedCoffee = "";
      } else {
        this.$root.orderArray.push({
          title: theCoffee.title,
          price: theCoffee.price,
          amount: 1,
        });
      }
      this.amount += 1;
    },
  },
};
</script>

<style scoped>
.cart {
  color: rgb(46, 42, 38);
  display: grid;
  grid-template-columns: 1fr 1fr;
}

img {
  cursor: pointer;
}
</style>