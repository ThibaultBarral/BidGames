<template>
  <div id="additem">
    <h1>Ajouter une Enchère</h1>
    <div class="xLarge-12 large-12 medium-12 small-12 xSmall-12">
      <div class="form-article">
        <label for="start_date">Début de l'enchère</label>
        <input type="datetime-local" id="start_date"/>
        <label for="end_date">Fin de l'enchère</label>
        <input type="datetime-local" id="end_date"/>
      </div>
      <div class="flash">
        <input type="checkbox" id="flash" v-model="checked">
        <label for="flash">Flash ?</label>
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

.flash {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-article input {
  background-color: #E6E6E6;
  border-radius: 10px;
  border: none;
  font-weight: bolder;
  letter-spacing: 0.05em;
  width: 100%;
  padding: 25px;
  display: flex;
  margin: 15px 0;
  align-items: center;
  text-transform: uppercase;
}

.form-article {
  align-items: center;
  display: flex;
  flex-direction: column;
}

label:nth-child(3) {
  margin: 10px 0 0;
}

#additem > div {
  margin-top: 40px;
  width: 50%;
}
</style>
