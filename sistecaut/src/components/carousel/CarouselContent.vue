<template>
  <div class="carouselContent">
    <div class="imagePart">
      <g-image :src="require(`@/assets/img/carouselSelection/${imgSource}`)" class="handleImage" />
    </div>
    <div class="textPart">
      <h2 class="carouselInfoTitle">{{ title }}</h2>
      <h4 class="carouselInfoBody" v-for="(text, index) in bodyContent" 
      :key="`${title}_${index}`">{{text}}</h4>
      <!-- <h4 class="carouselInfoBody">{{ bodyContent }}</h4> -->
    </div>
    <!-- <img
      class="carouselImage handleImage"
      v-if="imgSource"
      :id="title"
      :src="require(`@/assets/img/${imgSource}`)"
    /> -->
  </div>
</template>

<script>
export default {
  name: "CarouselContent",
  props: ["title", "imgSource", "bodyContent"]
};
</script>

<style>
.carouselContent {
  height: 100%;
  width: 100%;
  display: inline-flex;
  background-color: white;
}

.textPart {
  color: black;
  text-align: center;
  z-index: 100;
}

.carouselImage {
  width: 200px;
  height: 200px;
}

.handleImage {
  background-position: center;
  background-size: cover;
  height: 100%;
  object-fit: cover;
  object-position: right;
  overflow: hidden;
  width: 100%;
}

.imagePart {
  width: 60%;
  height: 100%;
}
.textPart {
  width: 40%;
  height: 100%;
}

.carouselInfoTitle {
  font-family: Roboto;
  margin-left: 2rem;
  margin-right: 5rem;
  padding: 1rem;
}

.carouselInfoBody {
  text-align: justify;
  font-family: Roboto;
  margin-left: 2rem;
  margin-right: 5rem;
  padding: 1rem;
}

</style>
