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
        <ContactInfo />
      </BaseComponent>
    </AnimationWrapper>
  </Layout>
</template>

<script>
import Layout from "../layouts/Default";
import AnimationWrapper from "../layouts/AnimationWrapper";
import ContactForm from "../components/contacts/ContactForm";
import BaseComponent from "../components/general/BaseComponent";
import ContactInfo from "~/components/contacts/ContactInfo";

export default {
  name: "Contacts",
  components: {
    Layout,
    AnimationWrapper,
    ContactForm,
    BaseComponent,
    ContactInfo
  },
  data() {
    return {
      pageTitles: ["form.title", "navbar.contacts"], // pages titles
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
