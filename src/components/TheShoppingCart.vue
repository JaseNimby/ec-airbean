<template>
  <div>
    <li class="cart">
      <section class="col2">
        <h2>{{ cartItems.title }}</h2>
      </section>
      <aside class="col3">
        {{ cartItems.price }}
      </aside>
    </li>
  </div>
</template>

<script>
export default {
  props: { cartItems: Object },
};
</script>

<style scoped>
.cart {
  color: rgb(46, 42, 38);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
</style>