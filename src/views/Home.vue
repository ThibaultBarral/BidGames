<template>
  <div id="home">
    <div class="xLarge-12 large-12 medium-12 small-12 xSmall-12" style="display: flex; flex-wrap: wrap">
      <div class="xLarge-4 large-4 medium-12 small-12 xSmall-12" style="display: flex; margin: 20px; width: calc(33.33% - 40px);">
        <div class="article">
          <div class="img-article">
          </div>
          <div class="txt-article">
            <h1>C'est le titre</h1>
            <div class="info-article">
              <i class="fas fa-gavel"></i><p>Lieu de la salle d'enchère</p>
            </div>
            <div class="info-article">
              <i class="fas fa-map-marker-alt"></i><p>Lieu de l'article</p>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="display: flex">
                <p style="margin: 0 5px 0 0!important;">140</p>€
              </div>
              <i class="fas fa-heart"></i>
            </div>
          </div>
          <div class="footer-article">
            <div class="time-article"><p>3h 26m 45s</p></div>
            <router-link to="">Faire une offre</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#home {
  display: flex;
  margin: 0 15vw 0 15vw;
}

.article {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: calc(100% - 40px);
  border-radius: 25px;
  background: #fff;
  /*box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);*/
}

.img-article {
  margin-bottom: 20px;
  height: 30vh;
  width: 100%;
  background-image: url("../assets/media/images/img.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.fa-heart:hover, .fa-heart:checked {
  color: red;
}


.img-article img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.info-article {
  align-items: baseline;
  display: flex;
}

.txt-article {
  margin-bottom: 10px;
}

.txt-article i {
  margin: 10px 10px 10px 0;
}

.time-article {
  background-color: #E6E6E6;
  border-radius: 10px;
  border: none;
  padding: 10px 15px;
  display: flex;
  align-items: center;
}

.time-article p {
  font-size: 13px;
  font-weight: bold;
}

a {
  background: linear-gradient(#892886 0%, #f27123 100%);
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 13px;
  font-weight: bold;
}

.footer-article {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.txt-article h1, .txt-article p {
  margin: 0 5px 10px 0;
}

#home > div {
  border-radius: 15px;
  background: #f8f8f8;
  padding: 20px;
  width: calc(100% - 40px);
}

</style>
