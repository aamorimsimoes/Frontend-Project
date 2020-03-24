<template>
  <div class="carouselContent">
    <div
      class="imagePart handleImage"
      :style="
        imgSource
          ? {
              backgroundImage:
                'url(' + require(`@/assets/img/${imgSource}`) + ')'
            }
          : {}
      "
    />
    <div class="textPart">
      <h2 class="carouselInfo">{{ title }}</h2>
      <h4 class="carouselInfo">{{ subtitle }}</h4>
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
  props: ["title", "imgSource", "subtitle"]
};
</script>

<style>
.carouselContent {
  height: 100%;
  width: 100%;
  display: inline-flex;
  background-color: white;
}

.carouselInfo {
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
  object-fit: cover;
  object-position: right;
  overflow: hidden;
}

.imagePart {
  width: 60%;
  height: 100%;
}
.textPart {
  width: 40%;
  height: 100%;
}
</style>
