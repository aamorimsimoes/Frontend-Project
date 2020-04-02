<template>
  <div class="card">
    <img
      class="handleImage handleCardImage"
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
  props: ["imgSource", "id", "title", "bodyContent", "link"]
};
</script>
