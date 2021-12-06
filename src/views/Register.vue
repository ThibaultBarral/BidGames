<template>
  <div id="login">
    <div class="xLarge-12 large-12 medium-12 small-12 xSmall-12 form-register">
      <div>
        <h1>BidGames</h1>
        <h2>Créer un compte</h2>
      </div>
      <div>
        <div>
          <input type="text" name="lastname" v-model="input.password" placeholder="Nom">
          <input type="text" name="firstname" v-model="input.username" placeholder="Prénom">
          <input type="text" name="username" v-model="input.username" placeholder="username">
          <input type="password" name="password" v-model="input.password" placeholder="Mot de passe">
        </div>
        <button type="Button" v-on:click="Login()">Envoyer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username:"",
        password:"",
      }
    }
  },
  methods: {
    Login() {
      if(this.input.username !== "" && this.input.password !== "") {
        if(this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit("Authenticated", true);
          this.$router.replace({ name: "Secure" });
        } else {
          console.log("The Username And / Or Password Is Incorrect");
        }
      } else {
        console.log("A Username And Password Must Be Present");
      }
    }
  }
}
</script>

<style scoped>
#login {
  display: flex;
  height: 100vh;
}

.form-register {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.form-register > div:nth-child(2) > div {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.form-register h1, h2 {
  letter-spacing: 3px;
  color: #E94057;
  margin: 10px 0;
}

.form-register h2 {
  font-weight: lighter;
}

.form-register input {
  background-color: #E6E6E6;
  border-radius: 10px;
  border: none;
  width: 50%;
  padding: 25px;
  margin: 15px 0;
  text-transform: uppercase;
}

.form-register input::placeholder {
  color: white;
  font-weight: bold;
}

.form-register button {
  background: linear-gradient(#892886 0%, #f27123 100%);
  border: none;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  border-radius: 10px;
  padding: 15px 35px;
}
</style>
