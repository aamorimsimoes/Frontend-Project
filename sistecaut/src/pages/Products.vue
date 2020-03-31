<template>
  <Layout>
    <AnimationWrapper
      idStart="productsAnimated"
      :nPages="nPages"
      :currentPage="currentPage"
      :setCurrentPage="setCurrentPage"
    >
      <div id="productsAnimated_0" v-if="currentPage === 0" class="initialSize">
        <div class="sizing">
          <h1>
            <FormattedMessage id="product.title" />
          </h1>
          <form v-on:change="handleLanguageChange">
            <p>Please select your language:</p>
            <input
              type="radio"
              id="portuguese"
              name="language"
              value="portuguese"
            />
            <label for="portuguese">Portugues</label><br />
            <input type="radio" id="english" name="language" value="english" />
            <label for="english">English</label><br />
          </form>
        </div>
      </div>
      <div id="productsAnimated_1" v-if="currentPage === 1" class="initialSize">
        <div class="sizing">
          <h1>Component Number 1</h1>
        </div>
      </div>
      <div id="productsAnimated_2" v-if="currentPage === 2" class="initialSize">
        <div class="sizing">
          <h1>Component Number 2</h1>
        </div>
      </div>
    </AnimationWrapper>
  </Layout>
</template>

<script>
import Layout from "../layouts/Default";
import AnimationWrapper from "../layouts/AnimationWrapper";
import FormattedMessage from "../languageProvider/FormattedMessage";
import LanguageProvider from "../languageProvider/LanguageProvider";

export default {
  name: "Products",
  components: {
    Layout,
    AnimationWrapper,
    FormattedMessage,
    LanguageProvider
  },
  data() {
    return {
      nPages: 3, // number of available pages
      currentPage: 0 // current page showing
    };
  },
  methods: {
    // updates the current page
    setCurrentPage: function(updated) {
      this.currentPage = updated;
    },
    getTranslationMethod: function(id) {
      return getTranslation(id);
    },
    handleLanguageChange: function(e) {
      LanguageProvider.methods.changeLanguage(e.target.value);
    }
  }
};
</script>

<style lang="scss">
.sizing {
  height: 90vh;
  width: 100%;
  margin-top: 5vh;
  text-align: center;
}

.initialSize {
  transition: .5s ease-in-out;
  transform: scale(.75);
  opacity: 0;
}
</style>
