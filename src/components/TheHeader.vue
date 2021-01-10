<template>
  <section class="background">
    <div class="nav">
      <img src="../assets/graphics/navicon.svg" />
    </div>

    <div class="cart">
      <img src="../assets/graphics/bag.svg" @click="$emit(`clickedCart`)" />
    </div>
    <p>{{ cartNumber }}</p>
  </section>
</template>

<script>
export default {
  name: "Header",

  props: { cartNumber: Number },
};
</script>



<style scoped>
.background {
  background-image: url("../assets/graphics/graphics-header.svg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 210px;
}

.nav {
  background-color: rgb(255, 252, 249);
  width: 5%;
  height: 5%;
  position: relative;
  top: 5%;
  right: 40%;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
}
.cart {
  background-color: rgb(104, 72, 40);
  width: 5%;
  height: 5%;
  position: relative;
  top: 5%;
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
  top: 100%;
  left: 45%;
  font-size: 30px;
  color: rgb(185, 66, 10);
}
</style>