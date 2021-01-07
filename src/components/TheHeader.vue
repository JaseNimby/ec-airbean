<template>
  <section class="background">
    <div class="nav">
      <img src="../assets/graphics/navicon.svg" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
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
  left: 5%;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
}
</style>