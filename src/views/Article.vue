<template>
  <div id="article">
    <div class="xLarge-12 large-12 medium-12 small-12 xSmall-12" style="display: flex; flex-wrap: wrap">
      <div class="xLarge-12 large-12 medium-12 small-12 xSmall-12" style="display: flex; margin: 20px;">
        <div class="article">
          <div style="display: flex; margin-bottom: 40px">
            <div style="display: flex; align-items: end; padding-bottom: 4px">
              <div style="display: flex">
                <div class="dot dotpulse"></div>
              </div>
              <div>
                <p style="margin: 0 20px 0 14px; color: #E94057">Live 00:25:43</p>
              </div>
            </div>
            <h1>C'est le titre</h1>
          </div>
          <div class="xLarge-12 large-12 medium-12 small-12 xSmall-12" style="display: flex">
            <div class="xLarge-4 large-4 medium-12 small-12 xSmall-12 img-article">
            </div>
            <div class="xLarge-8 large-8 medium-12 small-12 xSmall-12 txt-article">
              <p style="font-size: 17px; font-weight: bold; margin-bottom: 4px!important;">Description</p>
              <div style="border: 1px solid black; width: 40%"></div>
              <p style="margin-top: 10px; width: 80%; line-height: 1.3vw">Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
              <div class="info-article">
                <i class="fas fa-gavel"></i><p>Lieu de la salle d'enchère</p>
              </div>
              <div class="info-article">
                <i class="fas fa-map-marker-alt"></i><p>Lieu de l'article</p>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between">
                <div style="display: flex">
                  <p style="margin: 0 5px 0 0!important; font-weight: bold; font-size: 20px">140 €</p>
                </div>
                <i class="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article'
}
</script>

<style scoped>
#article {
  display: flex;
  flex-direction: column;
  margin: 0 15vw 0 15vw;
}

.article {
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: calc(100% - 40px);
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);
}

.dot {
  border-radius: 50%;
  height: 15px;
  width: 15px;
  transform: scale(1);
  animation: pulse 2s infinite;
  background: #E94057;
  box-shadow: 0 0 0 0 #E94057;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(233, 64, 87, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(233, 64, 87, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(233, 64, 87, 0);
  }
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

.fa-heart {
  font-size: 30px;
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

#article > div {
  border-radius: 15px;
  background: #f8f8f8;
  padding: 20px;
  width: calc(100% - 40px);
}

</style>
