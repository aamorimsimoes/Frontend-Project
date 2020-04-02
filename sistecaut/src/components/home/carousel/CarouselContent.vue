<template>
  <div class="carouselContent">
    <div class="imagePart">
      <g-image
        :src="require(`@/assets/img/carouselSelection/${imgSource}`)"
        class="handleImageCarousel"
      />
    </div>
    <div class="textPart">
      <h2 class="carouselInfoTitle">{{ title }}</h2>
      <h4
        class="carouselInfoBody"
        v-for="(text, index) in bodyContent"
        :key="`${title}_${index}`"
      >
        {{ text }}
      </h4>
      <!-- <h4 class="carouselInfoBody">{{ bodyContent }}</h4> -->
    </div>
    <!-- <img
      class="carouselImage handleImageCarousel"
      v-if="imgSource"
      :id="title"
      :src="require(`@/assets/img/${imgSource}`)"
    />-->
  </div>
</template>
<script>
export default {
  name: "CarouselContent",
  props: ["title", "imgSource", "bodyContent"]
};
</script>
