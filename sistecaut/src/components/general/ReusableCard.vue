<template>
  <div class="card">
    <g-image
      class="handleImage handleCardImage"
      v-if="imgSource"
      :src="require(`@/assets/img/${imgSource}`)"
    />
    <h3>
      <FormattedMessage :id="title" />
    </h3>
    <p v-for="(text, index) in bodyContent" :key="`${id}_${index}`">
      <FormattedMessage :id="text" />
    </p>
    <a class="linkSize" v-if="link" :href="link">{{ link }}</a>
    <div />
  </div>
</template>

<script>
import FormattedMessage from "../../languageProvider/FormattedMessage";
export default {
  name: "ReusableCard",
  props: ["imgSource", "id", "title", "bodyContent", "link"],
  components: { FormattedMessage }
};
</script>

<style lang="scss">
.handleCardImage:hover {
  -webkit-box-shadow: 10px 10px 62px -19px rgba(0, 0, 0, .75);
  -moz-box-shadow: 10px 10px 62px -19px rgba(0, 0, 0, .75);
  box-shadow: 10px 10px 62px -19px rgba(0, 0, 0, .75);
  transform: scale(1.1);
  transition: .5s ease-in-out;
}
</style>
