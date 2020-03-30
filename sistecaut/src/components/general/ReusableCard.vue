<template>
  <div class="card">
    <img
      class="handleCardImage"
      v-if="imgSource"
      :src="require(`@/assets/img/${imgSource}`)"
    />
    <h3>{{ title }}</h3>
    <p v-for="(text, index) in bodyContent" :key="`${id}_${index}`">
      {{ text }}
    </p>
    <a class="linkSize" v-if="link" :href="link">{{ link }}</a>
    <div />
  </div>
</template>

<script>
export default {
  name: "ReusableCard",
  props: ["imgSource","id", "title", "bodyContent", "link"]
};
</script>

<style>
/* card formatting */
.card {
  font-family: var(--main-font-family);
  margin: 0 20px 0 20px;
  height: 90%;
  /* border: black solid 1px; */
}
.linkSize {
  word-break: break-all;
}

/* news image formatting */

.handleCardImage {
  background-position: center;
  background-size: cover;
  height: 40%;
  object-fit: cover;
  object-position: right;
  overflow: hidden;
  width: 100%;
}

</style>
