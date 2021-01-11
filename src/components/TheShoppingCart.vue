<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="wrapper">
        <TheOrder
          v-for="item in this.$root.orderArray"
          :key="item.id"
          v-bind:cartItems="item"
          v-on:plus="addToOrder(item)"
          v-on:minus="minusOnOrder(item)"
        />
        <div class="total">
          <h1>Total {{ total }} kr</h1>
          <p>inkl moms + drönarleverans</p>
        </div>
        <button @click="$emit(`createOrder`, total)">Take my money!</button>
      </div>
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
      let clickedCoffee = this.$root.orderArray.find(
        (element) => element.title == theCoffee.title
      );
      if (clickedCoffee) {
        clickedCoffee.amount += 1;
        clickedCoffee.price += theCoffee.price;
      }
    },

    minusOnOrder(theCoffee) {
      let clickedCoffee = this.$root.orderArray.find(
        (element) => element.title == theCoffee.title
      );

      if (clickedCoffee) {
        clickedCoffee.amount -= 1;
        clickedCoffee.price -= theCoffee.price;
      }
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
  width: 80%;
  height: 80%;
}
.wrapper {
}

.total {
  justify-content: left;
  align-items: left;
}

.total > p {
  display: block;
  margin-block-start: 0em;
}

h1 {
  margin-block-end: 0em;
}

button {
  margin-block-end: 1em;
}
</style>