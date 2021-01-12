<template>
  <li class="cart">
    <h2>{{ cartItems.title }}</h2>
    <p>{{ cartItems.price * cartItems.amount }} kr</p>
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
};
</script>

<style scoped>
.cart {
  color: rgb(46, 42, 38);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

img {
  cursor: pointer;
}
</style>