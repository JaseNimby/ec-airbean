<template>
  <div class="modal-backdrop">
    <div class="modal">
      <TheOrder
        v-for="item in this.$root.orderArray"
        :key="item.id"
        v-bind:cartItems="item"
        v-on:plus="addToOrder(item)"
        v-on:minus="minusOnOrder(item)"
      />
      <div class="total">
        <h1>Total {{ total }} kr</h1>
      </div>
      <button>Take my money!</button>
    </div>
  </div>
</template>

<script>
import TheOrder from "../components/TheOrder.vue";
export default {
  components: { TheOrder },
  computed: {
    total() {
      return this.$root.orderArray.reduce((acc, item) => acc + item.price, 0);
    },
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
      }
      this.amount += 1;
    },

    minusOnOrder(theCoffee) {
      let clickedCoffee;
      for (let element of this.$root.orderArray) {
        if (element.title == theCoffee.title) {
          clickedCoffee = element;
          break;
        }
      }
      if (clickedCoffee) {
        clickedCoffee.amount -= 1;
        clickedCoffee.price -= clickedCoffee.price;
      }
      this.amount -= 1;
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
}
/* .cart {
  color: rgb(46, 42, 38);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
} */
</style>