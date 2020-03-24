<template>
  <Layout>
    <button
      v-if="currentPage > 0"
      v-on:click="handlePreviousClick"
      class="slideButtons slideUp"
    >
      &#8963;
    </button>
    <button
      v-if="currentPage < nPages - 1"
      v-on:click="handleNextClick"
      class="slideButtons slideDown"
    >
      &#8964;
    </button>
    <AnimationWrapper currentPage="currentPage" direction="direction">
      <Carousel v-if="currentPage === 0" />
      <About v-else-if="currentPage === 1" />
      <Spotlight v-else-if="currentPage === 2" />
      <Footer v-else-if="currentPage === 3" />
      <div v-else-if="currentPage === 4" class="main" id="section1">
        <h2 style="margin:0px;">Section 1</h2>
        <p>Click on the link to see the "smooth" scrolling effect.</p>
        <a href="#section2">
          Click Me to Smooth Scroll to Section 2 Below
        </a>
        <p>
          Note: Remove the scroll-behavior property to remove smooth scrolling.
        </p>
      </div>
      <div v-else-if="currentPage === 5" class="main" id="section2">
        <h2 style="margin:0px;">Section 2</h2>
        <a href="#section1">
          Click Me to Smooth Scroll to Section 1 Above
        </a>
      </div>
    </AnimationWrapper>
  </Layout>
</template>

<script>
import Carousel from "@/components/Carousel/Carousel";
import Spotlight from "@/components/TheSpotlight";
import Footer from "@/components/TheFooter";
import About from "@/components/TheAbout";
import Layout from "@/layouts/Default";
import AnimationWrapper from "@/layouts/AnimationWrapper";

export default {
  components: {
    // insert here the name of the component
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
      nPages: 6, // number of pages available
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
    },
  }
};
</script>

<style>
.home-links a {
  margin-right: .1rem;
}

.slideButtons {
  z-index: 99;
  position: absolute;
  left: 1vw;
  color: white;
  background-color: rgba(255, 183, 0, .5);
  height: 5vh;
  width: 5vh;
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
