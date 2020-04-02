<template>
  <Layout>
    <AnimationWrapper
      idStart="productsAnimated"
      :pageTitles="pageTitles"
      :currentPage="currentPage"
      :setCurrentPage="setCurrentPage"
    >
      <BaseComponent
        ref="productsAnimated_0"
        v-if="currentPage === 0"
        class="initialSize"
      >
        <RobotisedCells />
      </BaseComponent>
      <BaseComponent
        ref="productsAnimated_1"
        v-else-if="currentPage === 1"
        class="initialSize"
      >
        <SpecialMachines />
      </BaseComponent>
      <BaseComponent
        ref="productsAnimated_2"
        v-else-if="currentPage === 2"
        class="initialSize"
      >
        <ElectricalServices />
      </BaseComponent>
      <BaseComponent
        ref="productsAnimated_3"
        v-else-if="currentPage === 3"
        class="initialSize"
      >
        <MachiningServices />
      </BaseComponent>
    </AnimationWrapper>
  </Layout>
</template>

<script>
import Layout from "../layouts/Default";
import AnimationWrapper from "../layouts/AnimationWrapper";
import FormattedMessage from "../languageProvider/FormattedMessage";
import RobotisedCells from "../components/products/TheRobotisedCells";
import SpecialMachines from "../components/products/TheSpecialMachines";
import ElectricalServices from "../components/products/TheElectricalServices";
import MachiningServices from "../components/products/TheMachiningServices";
import BaseComponent from "../components/general/BaseComponent";

export default {
  name: "Products",
  components: {
    Layout,
    AnimationWrapper,
    FormattedMessage,
    RobotisedCells,
    SpecialMachines,
    ElectricalServices,
    MachiningServices,
    BaseComponent
  },
  data() {
    return {
      pageTitles: [
        "products.page.robotCells",
        "products.page.specialMach",
        "products.page.eletricServs",
        "products.page.machServs"
      ], // pages titles
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
    }
  },
  created() {
    setTimeout(() => {
      const initialComponent = this.$refs["productsAnimated_0"];
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
