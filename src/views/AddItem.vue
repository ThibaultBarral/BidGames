<template>
  <div id="additem">
    <h1>Ajouter un Article</h1>
    <div class="xLarge-12 large-12 medium-12 small-12 xSmall-12">
      <div class="xLarge-6 large-6 medium-12 small-12 xSmall-12 form-article">
        <input type="text" name="username" placeholder="username">
        <input type="text" name="description" placeholder="description">
        <input type="text" name="min-age" placeholder="age minimum">
        <input type="text" name="price" placeholder="prix">
        <div>
          Virtual
          <input type="checkbox" id="non" value="Non">
          <label for="non">Non</label>
          <input type="checkbox" id="oui" value="Oui">
          <label for="oui">Oui</label>
        </div>
        <input type="text" name="estimation" placeholder="estimation">
      </div>
      <div class="xLarge-6 large-6 medium-12 small-12 xSmall-12">
        <p>Ajouter des images</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddItem"
}
</script>

<style scoped>
#additem {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
}

#additem > h1 {
  margin: 20px 10px;
}

#oui, #non {
  margin: 0 10px;
  width: auto!important;
}

.form-article label {
  margin: 0 10px;
}

.form-article input, #additem > div > div.xLarge-6.large-6.medium-12.small-12.xSmall-12.form-article > div {
  background-color: #E6E6E6;
  border-radius: 10px;
  border: none;
  width: 50%;
  padding: 25px;
  display: flex;
  margin: 15px 0;
  align-items: center;
  text-transform: uppercase;
}

.form-article input::placeholder, #additem > div > div.xLarge-6.large-6.medium-12.small-12.xSmall-12.form-article > div {
  color: white;
}

#additem > div {
  display: flex;
}

.form-article {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
}

#additem > div {
  margin-top: 40px;
}

#additem > div > div.xLarge-6.large-6.medium-12.small-12.xSmall-12.form-article > input[type=text]:nth-child(1) {
  margin-top: 0;
}

#additem > div > div:nth-child(n) {
  padding: 10px;
}

#additem > h1 {
  text-transform: capitalize;
}
</style>
