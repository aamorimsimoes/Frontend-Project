<template>
  <Layout>
    <AnimationWrapper
      idStart="productsAnimated"
      :nPages="nPages"
      :currentPage="currentPage"
      :setCurrentPage="setCurrentPage"
    >
      <RobotisedCells
        id="productsAnimated_0"
        v-if="currentPage === 0"
        class="initialSize"
      />
      <SpecialMachines
        id="productsAnimated_1"
        v-if="currentPage === 1"
        class="initialSize"
      />

      <ElectricalServices
        id="productsAnimated_2"
        v-if="currentPage === 2"
        class="initialSize"
      />

      <MachiningServices
        id="productsAnimated_3"
        v-if="currentPage === 3"
        class="initialSize"
      />
    </AnimationWrapper>
  </Layout>
</template>

<script>
import Layout from "../layouts/Default";
import AnimationWrapper from "../layouts/AnimationWrapper";
import FormattedMessage from "../languageProvider/FormattedMessage";
import LanguageProvider from "../languageProvider/LanguageProvider";
import RobotisedCells from "../components/products/TheRobotisedCells";
import SpecialMachines from "../components/products/TheSpecialMachines";
import ElectricalServices from "../components/products/TheElectricalServices";
import MachiningServices from "../components/products/TheMachiningServices";

export default {
  name: "Products",
  components: {
    Layout,
    AnimationWrapper,
    FormattedMessage,
    LanguageProvider,
    RobotisedCells,
    SpecialMachines,
    ElectricalServices,
    MachiningServices
  },
  data() {
    return {
      nPages: 4, // number of available pages
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
.initialSize {
  transition: .5s ease-in-out;
  transform: scale(.75);
  opacity: 0;
}
</style>
