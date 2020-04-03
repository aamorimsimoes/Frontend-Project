<template>
  <Layout>
    <AnimationWrapper
      idStart="indexAnimated"
      :pageTitles="pageTitles"
      :currentPage="currentPage"
      :setCurrentPage="setCurrentPage"
    >
      <BaseComponent
        ref="indexAnimated_0"
        v-if="currentPage === 0"
        class="initialSize"
      >
        <Carousel />
      </BaseComponent>
      <BaseComponent
        ref="indexAnimated_1"
        v-else-if="currentPage === 1"
        class="initialSize"
      >
        <About />
      </BaseComponent>
      <BaseComponent
        ref="indexAnimated_2"
        v-else-if="currentPage === 2"
        class="initialSize"
      >
        <Spotlight />
      </BaseComponent>
      <BaseComponent
        ref="indexAnimated_3"
        v-else-if="currentPage === 3"
        class="initialSize"
      >
      </BaseComponent>
    </AnimationWrapper>
  </Layout>
</template>

<script>
import Carousel from "../components/home/carousel/Carousel";
import Spotlight from "../components/home/TheSpotlight";
import About from "../components/home/TheAbout";
import Layout from "../layouts/Default";
import AnimationWrapper from "../layouts/AnimationWrapper";
import BaseComponent from "../components/general/BaseComponent";

export default {
  components: {
    Carousel,
    Spotlight,
    About,
    Layout,
    AnimationWrapper,
    BaseComponent
  },
  name: "Sistecaut",
  data() {
    return {
      pageTitles: [
        "navbar.home",
        "home.page.about",
        "home.page.news",
      ], // pages titles
      currentPage: 0 // current page showing
    };
  },
  methods: {
    // updates the current page
    setCurrentPage: function(updated) {
      this.currentPage = updated;
    }
    // handleSliderClick: function(pageNumber) {
    //   this.scrolling = true;
    //   this.nextPage = pageNumber;
    // },
  },
  created() {
    setTimeout(() => {
      const initialComponent = this.$refs["indexAnimated_0"];
      if (initialComponent && initialComponent.$el) {
        initialComponent.$el.style.transform = "scale(1)";
        initialComponent.$el.style.opacity = "1";
      }
    }, 1);
  }
};
</script>

<style lang="scss">
.home-links a {
  margin-right: .1rem;
}

// .sliderColumn {
//   position: absolute;
//   top: 10vh;
//   left: 0;
//   width: 8vw;
//   height: 90vh;
//   background-color: #f08013;
//   z-index: 99;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   text-align: center;
//   align-content: center;
// }

// .sliderLinks {
//   color: white;
//   cursor: pointer;
// }

// .sliderLinks:hover {
//   filter: drop-shadow(8px 8px 5px gray);
// }

// .sliderLinksSelected {
//   border-bottom: 5px solid white;
// }

.initialSize {
  transition: .5s ease-in-out;
  transform: scale(.75);
  opacity: 0;
}
</style>
