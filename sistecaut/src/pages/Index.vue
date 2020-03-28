<template>
  <Layout>
    <!-- <button
      v-if="currentPage > 0"
      v-on:click="handlePreviousClick"
      class="slideButtons slideUp"
    > -->
    <ArrowUp
      class="slideButtons slideUp"
      v-on:click="handlePreviousClick"
      v-if="currentPage > 0"
    />
    <!-- </button> -->
    <!-- <button
      v-if="currentPage < nPages - 1"
      v-on:click="handleNextClick"
      class="slideButtons slideDown"
    > -->
    <ArrowDown
      class="slideButtons slideDown"
      v-on:click="handleNextClick"
      v-if="currentPage < nPages - 1"
    />
    <!-- </button> -->
    <AnimationWrapper currentPage="currentPage" direction="direction">
      <Carousel v-if="currentPage === 0" />
      <About v-else-if="currentPage === 1" />
      <Spotlight v-else-if="currentPage === 2" />
      <Footer v-else-if="currentPage === 3" />
    </AnimationWrapper>
  </Layout>
</template>

<script>
import Carousel from "@/components/carousel/Carousel";
import Spotlight from "@/components/TheSpotlight";
import Footer from "@/components/TheFooter";
import About from "@/components/TheAbout";
import Layout from "@/layouts/Default";
import AnimationWrapper from "@/layouts/AnimationWrapper";
import ArrowUp from "@/assets/svgs/chevrons-up.svg";
import ArrowDown from "@/assets/svgs/chevrons-down.svg";

export default {
  components: {
    // insert here the name of the component
    Carousel,
    Spotlight,
    Footer,
    About,
    Layout,
    AnimationWrapper,
    ArrowUp,
    ArrowDown
  },
  name: "Sistecaut",
  data() {
    return {
      nPages: 4, // number of pages available
      currentPage: 0, // current page showing
      scrolling: false // flag that enables the scrolling
    };
  },
  methods: {
    handlePreviousClick: function() {
      if (this.currentPage > 0) {
        this.currentPage--;
      } else {
        this.currentPage = 0;
      }
    },
    handleNextClick: function() {
      if (this.currentPage < this.nPages - 1) {
        this.currentPage++;
      } else {
        this.currentPage = this.nPages - 1;
      }
    }
  }
};
</script>

<style lang="scss">
.home-links a {
  margin-right: .1rem;
}

.slideButtons {
  z-index: 99;
  position: absolute;
  left: .2vw;
  color: white;
  /* background-color: rgba(255, 183, 0, .5); */
  height: 10vh;
  width: 10vh;
  border-radius: 10vh;
  border: none;
  font-weight: lighter;
  font-size: larger;
}

.slideButtons:focus {
  outline: none;
}

.slideButtons:hover {
  background-color: rgba(255, 183, 0, 1);
}

.slideUp {
  top: 15vh;
}

.slideDown {
  bottom: 5vh;
}
</style>
