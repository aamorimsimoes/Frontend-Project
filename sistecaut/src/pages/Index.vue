<template>
  <Layout>
    <AnimationWrapper
      idStart="indexAnimated"
      :nPages="nPages"
      :currentPage="currentPage"
      :setCurrentPage="setCurrentPage"
    >
      <Carousel
        id="indexAnimated_0"
        v-if="currentPage === 0"
        class="initialSize"
      />
      <About
        id="indexAnimated_1"
        v-else-if="currentPage === 1"
        class="initialSize"
      />
      <Spotlight
        id="indexAnimated_2"
        class="initialSize"
        v-else-if="currentPage === 2"
      />
      <Footer
        id="indexAnimated_3"
        class="initialSize"
        v-else-if="currentPage === 3"
      />
    </AnimationWrapper>
  </Layout>
</template>

<script>
import Carousel from "../components/home/carousel/Carousel";
import Spotlight from "../components/home/TheSpotlight";
import Footer from "../components/TheFooter";
import About from "../components/home/TheAbout";
import Layout from "../layouts/Default";
import AnimationWrapper from "../layouts/AnimationWrapper";

export default {
  components: {
    Carousel,
    Spotlight,
    Footer,
    About,
    Layout,
    AnimationWrapper
  },
  name: "Sistecaut",
  data() {
    return {
      nPages: 4, // number of pages available
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
      const initialComponent = document.getElementById("indexAnimated_0");
      initialComponent.style.transform = "scale(1)";
      initialComponent.style.opacity = "1";
    }, 1000);
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
