<template>
  <Layout>
    <AnimationWrapper
      idStart="contactsAnimated"
      :pageTitles="pageTitles"
      :currentPage="currentPage"
      :setCurrentPage="setCurrentPage"
    >
      <BaseComponent
        ref="contactsAnimated_0"
        v-if="currentPage === 0"
        class="initialSize"
      >
        <ContactForm />
      </BaseComponent>
      <BaseComponent
        ref="contactsAnimated_1"
        v-else-if="currentPage === 1"
        class="initialSize"
      >
        <h1>Component Number 1</h1>
      </BaseComponent>
      <BaseComponent
        ref="contactsAnimated_2"
        v-else-if="currentPage === 2"
        class="initialSize"
      >
        <h1>Component Number 2</h1>
      </BaseComponent>
    </AnimationWrapper>
  </Layout>
</template>

<script>
import Layout from "../layouts/Default";
import AnimationWrapper from "../layouts/AnimationWrapper";
import ContactForm from "../components/ContactForm";
import BaseComponent from "../components/general/BaseComponent";

export default {
  name: "Contacts",
  components: {
    Layout,
    AnimationWrapper,
    ContactForm,
    BaseComponent
  },
  data() {
    return {
      pageTitles: ["Contacts", "Page 2", "Page 3"], // pages titles
      currentPage: 0 // current page showing
    };
  },
  methods: {
    // updates the current page
    setCurrentPage: function(updated) {
      this.currentPage = updated;
    }
  },
  created() {
    setTimeout(() => {
      const initialComponent = this.$refs["contactsAnimated_0"];
      if (initialComponent && initialComponent.$el) {
        initialComponent.$el.style.transform = "scale(1)";
        initialComponent.$el.style.opacity = "1";
      }
    }, 1);
  }
};
</script>

<style lang="scss">
.initialSize {
  transition: .5s ease-in-out;
  transform: scale(.75);
  opacity: 0;
}
</style>
