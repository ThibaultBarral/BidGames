<template>
  <div id="header">
    <div id="bcg">
      <router-link to="/"><img id="logo" src="../assets/logo.png"></router-link>
      <router-link to="/"><h1>BidGames</h1></router-link>
    </div>
    <div id="search-element">
      <div class="search-bar">
        <i class="fas fa-search" style="margin-right: 20px"></i>
        <input type="text" placeholder="Recherche" />
        <button name="search" type="button">Rechercher</button>
      </div>
      <div style="display: flex">
        <router-link to="/">Articles</router-link>
        <router-link to="/favoris">Favoris</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"

}
</script>

<style scoped>
#bcg {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

#header {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#bcg:before {
  background: url("../assets/media/images/header.png") center/cover;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  filter: brightness(75%);

}

#logo {
  align-self: flex-start;
  z-index: 9;
  width: 5vw;
  position: absolute;
}

#bcg a:nth-child(2) {
  width: fit-content;
  align-self: center;
  margin: 2vh 0 6vh;
  z-index: 9;
}

#bcg h1 {
  z-index: 9;
  font-weight: bold;
  font-size: 45px;
  text-transform: uppercase;
  justify-content: center;
  display: flex;
  color: white;
}

.search-bar {
  width: 40%;
  border: none;
  align-items: center;
  font-size: 16px;
  z-index: 9;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 0px 60px rgb(0 0 0 / 8%);

}

#search-element {
  position: relative;
  transform: translateY(-3vh);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

button {
  background: linear-gradient(#892886 0%, #f27123 100%);
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 13px;
  font-weight: bold;
}

#search-element a {
  z-index: 1;
  margin: 10px 20px;
  width: 40%;
  font-size: 16px;
  padding: 10px 15px;
  color: #E94057;
  border-radius: 10px;
  background: transparent;
  border: 2px solid #e94057;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: background-color 0.5s ease-out 100ms;
}

#search-element a:hover {
  color: white;
  background-color: #e94057;

}

#header input {
  border: none;
  font-size: 16px;
  z-index: 9;
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
}

#header input:checked {
  border: none;
}

#header > i {
  margin-right: 20px;
}

</style>
