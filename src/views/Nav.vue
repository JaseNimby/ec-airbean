<template>
  <section class="grid">
    <header class="close">
      <img src="../assets/graphics/close.svg" @click="$router.push('/')" />
    </header>
    <div class="nav">
      <router-link to="/Meny" class="link"> Meny</router-link><br />
      <router-link to="/About" class="link"> Vårt Kaffe</router-link><br />
      <router-link to="/Profil" class="link"> Min Profil</router-link><br />
      <router-link to="/OrderStatus" class="link"> Orderstatus</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.grid {
  background-color: rgb(46, 42, 38);
  display: grid;
  min-height: 1000px;
}
.close {
  background-color: rgb(255, 252, 249);
  width: 5%;
  height: 5%;
  top: 5%;
  left: 5%;
  cursor: pointer;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
}

.nav {
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 4rem;
}

.nav > .link {
  color: rgb(255, 252, 249);
  text-decoration: none;
}

.nav > br {
  border-bottom: rgb(255, 252, 249);
}
</style> 