<template>
  <div id="login">
    <div class="xLarge-6 large-6 medium-12 small-12 xSmall-12 img-login">
      <img src="../assets/media/images/undraw_my_documents_re_13dc.png" />
    </div>
    <div class="xLarge-6 large-6 medium-12 small-12 xSmall-12 form-login">
      <div>
        <h1>BidGames</h1>
        <h2>Mon Espace</h2>
      </div>
      <div>
        <div>
          <input
            type="text"
            name="email"
            v-model="input.email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            v-model="input.password"
            placeholder="Mot de passe"
          />
        </div>
        <button type="Button" v-on:click="Login()">Se connecter</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    Login() {
      if (this.input.email !== "" && this.input.password !== "") {
        fetch("http://localhost:3000/auth/login", {
          method: "post",
          credentials: "same-origin",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            "app-token": "devtoken",
          },
          body: JSON.stringify({
            email: this.input.email,
            password: this.input.password,
          }),
        })
          .then((response) => {
            return response.text();
          })
          .then((data) => {
            if (Object.keys(JSON.parse(data)).includes("error")) {
              console.log(JSON.parse(data));
            } else {
              localStorage.token = JSON.parse(data)["token"];
              // store.commit("setLogin");
              router.push({ path: "/" });
            }
          });
      } else {
        console.log("A Username And Password Must Be Present");
      }
    },
  },
};
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

.form-login h1,
h2 {
  color: #e94057;
  margin: 10px 0;
}

.form-login input {
  background-color: #e6e6e6;
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
