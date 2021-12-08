<template>
  <div id="additem">
    <h1>Ajouter un Article</h1>
    <div class="xLarge-12 large-12 medium-12 small-12 xSmall-12">
      <div class="xLarge-6 large-6 medium-12 small-12 xSmall-12 form-article">
        <input type="text" name="name" placeholder="Nom">
        <textarea name="description" class="textarea" placeholder="Description"></textarea>
        <input type="text" name="price" placeholder="prix">
        <div>
          Virtual
          <div>
            <input type="checkbox" id="non" value="Non">
            <label for="non">Non</label>
            <input type="checkbox" id="oui" value="Oui">
            <label for="oui">Oui</label>
          </div>
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
  flex-direction: column;
  align-items: center;
}

#additem > h1 {
}

#oui, #non {
  margin: 0 10px;
  width: auto!important;
}

.form-article label {
  margin: 0 10px;
}

#additem > div > div.xLarge-6.large-6.medium-12.small-12.xSmall-12.form-article > div {
  position: relative;
}

.form-article input, .form-article textarea, #additem > div > div.xLarge-6.large-6.medium-12.small-12.xSmall-12.form-article > div {
  background-color: #E6E6E6;
  border-radius: 10px;
  border: none;
  font-weight: bolder;
  letter-spacing: 0.05em;
  width: 50%;
  padding: 25px;
  display: flex;
  margin: 15px 0;
  align-items: center;
  text-transform: uppercase;
}

#additem > div > div.xLarge-6.large-6.medium-12.small-12.xSmall-12.form-article > div > div {
  position: absolute;
  right: 10px;
  display: flex;
}

.form-article input::placeholder, .form-article textarea::placeholder, #additem > div > div.xLarge-6.large-6.medium-12.small-12.xSmall-12.form-article > div {
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
