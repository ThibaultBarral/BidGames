<template>
  <div id="header">
    <img src="../assets/media/images/header.png">
    <h1>BidGames</h1>
      <input type="text" v-model="search" placeholder="Recherche" />
  </div>
</template>

<script>
export default {
  name: "Header"

}
</script>

<style scoped>
#header {
  margin-bottom: 20px;
  width: 100%;
  position: relative;
}

#header h1 {
  top: 20%;
  font-weight: bold;
  font-size: 45px;
  right: 50%;
  text-transform: uppercase;
  transform: translateX(50%);
  position: absolute;
  color: white;
}

#header img {
  width: 100%;
  filter: brightness(75%);
}
#header input {
  bottom: -10px;
  width: 40%;
  border: none;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
  right: 50%;
  transform: translateX(50%);
  position: absolute;
  box-shadow: 0px 0px 60px rgb(0 0 0 / 8%);
}

#header > i {
  margin-right: 20px;
}

</style>
