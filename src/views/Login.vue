<template>
  <div id="login">
    <div class="xLarge-6 large-6 medium-12 small-12 xSmall-12 img-login">
      <img src="../assets/media/images/undraw_my_documents_re_13dc.png">
    </div>
    <div class="xLarge-6 large-6 medium-12 small-12 xSmall-12 form-login">
      <div>
        <h1>BidGames</h1>
        <h2>Mon Espace</h2>
      </div>
      <div>
        <div>
          <input type="text" name="username" v-model="input.username" placeholder="username">
          <input type="password" name="password" v-model="input.password" placeholder="Mot de passe">
        </div>
        <button type="Button" v-on:click="Login()">Se connecter</button>
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

.img-login {
  position: relative;
}

.img-login img {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translateY(-50%) translateX(-50%);
}

.form-login {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.form-login > div:nth-child(2) > div {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.form-login h1, h2 {
  color: #E94057;
  margin: 10px 0;
}

.form-login input {
  background-color: #E6E6E6;
  border-radius: 10px;
  border: none;
  width: 50%;
  padding: 25px;
  margin: 15px 0;
  text-transform: uppercase;
}

.form-login input::placeholder {
  color: white;
}

.form-login button {
  background: linear-gradient(#892886 0%, #f27123 100%);
  border: none;
  color: white;
  text-transform: uppercase;
  border-radius: 10px;
  padding: 15px 35px;
}
</style>
