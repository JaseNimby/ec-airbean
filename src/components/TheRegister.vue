<template>
  <div class="modal-backdrop">
    <div class="modal">
      <section class="wrapper">
        <h1>Välkommen till Airbean-familjen!</h1>
        <p>
          Genom att skapa ett konot nedan kan du sapar och se din orderhistorik
        </p>
        Namn
        <input type="text" placeholder="Förnamn Efternamn" v-model="name" />
        Epost
        <input type="text" placeholder="name@mail.com" v-model="mail" />
        <input type="radio" value="GDPR ok!" v-model="gdpr" />
        <button @click="createProfile(mail)">Take my personal data!</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      name: "",
      mail: "",
      gdpr: null,
    };
  },

  methods: {
    createProfile(mail) {
      let email = this.$root.users.find((element) => element.mail == mail.mail);
      if (email) {
        this.$root.users.push({
          orderId: Date.now(),
        });
      } else {
        this.$root.users.push({
          name: this.name,
          mail: this.mail,
          orderId: Date.now(),
        });
      }
      this.$emit("close");
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
  background: rgb(252, 239, 239);
  color: rgb(46, 42, 38);
  overflow-x: auto;
  width: 80%;
  height: 80%;
  border-radius: 5px;
}

.wrapper {
  justify-content: center;
  align-items: center;
}
</style>