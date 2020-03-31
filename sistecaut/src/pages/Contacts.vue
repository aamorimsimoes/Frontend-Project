<template>
  <Layout>
    <AnimationWrapper
      idStart="contactsAnimated"
      :nPages="nPages"
      :currentPage="currentPage"
      :setCurrentPage="setCurrentPage"
    >
      <div id="contactsAnimated_0" v-if="currentPage === 0" class="initialSize">
        <div class="sizing">
          <!-- <h1>Component Number 0</h1> -->
          <ContactForm />
        </div>
      </div>
      <div id="contactsAnimated_1" v-if="currentPage === 1" class="initialSize">
        <div class="sizing">
          <h1>Component Number 1</h1>
        </div>
      </div>
      <div id="contactsAnimated_2" v-if="currentPage === 2" class="initialSize">
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
import ContactForm from "../components/ContactForm";

export default {
  name: "Contacts",
  components: {
    Layout,
    AnimationWrapper,
    ContactForm
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
