<template>
  <div class="app">
    <router-link
      v-if="authenticated"
      to="/login"
      v-on:click.native="Logout()"
      replace
      >Logout</router-link
    >
    <Header v-show="$route.path !== '/login' && $route.path !== '/register'" />
    <router-view @Authenticated="setauthenticated" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "Bidgames",
        password: "password",
      },
    };
  },
  Mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "Login" });
    }
  },
  methods: {
    setauthenticated(Status) {
      this.authenticated = Status;
    },
    Logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style>
@import url(assets/css/responsive.css);
@import url(assets/css/reboot.css);
.app {
  background: #f8f8f8;
}

</style>
