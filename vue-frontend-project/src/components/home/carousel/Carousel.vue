<template>
  <div class="carouselViewport">
    <ArrowLeft
      v-on:click="handlePreviousClick"
      class="arrowButtons buttonPrevious"
    />
    <ArrowRight v-on:click="handleNextClick" class="arrowButtons buttonNext" />
    <!-- <button
      v-on:click="handlePreviousClick"
      class="arrowButtons buttonPrevious"
    >
    &lt;-->
    <!-- symbol for the less than char (<) -->
    <!-- </button> -->
    <!-- <button v-on:click="handleNextClick" class="arrowButtons buttonNext">
      &gt;
    <! symbol for the greater than char (>)-->
    <!-- </button> -->
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      :ref="slide.id"
      class="carouselSlider"
      :style="{ zIndex: slides.length - index }"
    >
      <CarouselContent
        :title="slide.title"
        :imgSource="slide.img"
        :bodyContent="slide.bodyContent"
      />
    </div>
  </div>
</template>

<script>
let current = 0;
const slides = [
  {
    id: "slider0",
    title: "slider.slider0.title",
    bodyContent: [
      "slider.slider0.bodyContent00",
      "slider.slider0.bodyContent01"
    ],
    img: "ideasWhiteboard.jpg"
  },
  {
    id: "slider1",
    title: "slider.slider1.title",
    bodyContent: [
      "slider.slider1.bodyContent00",
      "slider.slider1.bodyContent01",
      "slider.slider1.bodyContent02"
    ],
    img: "engineersAtWork.jpg"
  },
  {
    id: "slider2",
    title: "slider.slider2.title",
    bodyContent: [
      "slider.slider2.bodyContent00",
      "slider.slider2.bodyContent01",
      "slider.slider2.bodyContent02",
      "slider.slider2.bodyContent03"
    ],
    img: "femaleEngineer.jpg"
  }
];
import CarouselContent from "./CarouselContent";
import ArrowLeft from "@/assets/svgs/chevron-left.svg";
import ArrowRight from "@/assets/svgs/chevron-right.svg";
export default {
  name: "Carousel",
  data() {
    return {
      slides
    };
  },
  methods: {
    handleArrowClick: function(direction) {
      // get the current top div
      const currentDiv = this.$refs[slides[current].id][0];
      let translationCurrentDiv;
      let translationNextDiv;
      // get the id of the div to show
      // if it is to the right, it should sum, except if it is the last one in the array; in that case, go to the start
      if (direction === "right") {
        if (current === slides.length - 1) {
          current = 0;
        } else {
          current++;
        }
        // set the direction for the transition
        translationCurrentDiv = "translate(100vw, 0)";
        translationNextDiv = "translate(-100vw, 0)";
      }
      // if it is to the left, it should subtract, except if it is the first one in the array; in that case, go to the end
      else {
        if (current === 0) {
          current = slides.length - 1;
        } else {
          current--;
        }
        translationCurrentDiv = "translate(-100vw, 0)";
        translationNextDiv = "translate(100vw, 0)";
      }
      // get the div to show (with the current value updated)
      const nextDiv = this.$refs[slides[current].id][0];
      // remove the transition time from the div to show
      nextDiv.style.transition = "";
      // to make the transition of the next one possible, translate it 100vw to the oposite direction
      nextDiv.style.transform = translationNextDiv;
      // this time out prevents the execution of the previous translation to be within 1s
      setTimeout(() => {
        // set the transition time in both divs
        currentDiv.style.transition = "1s ease-in-out";
        nextDiv.style.transition = "1s ease-in-out";
        // translate the current top div to the given direction
        currentDiv.style.transform = translationCurrentDiv;
        // translate the div to show back to the center
        nextDiv.style.transform = "translate(0, 0)";
      }, 1);
    },
    handlePreviousClick: function() {
      this.handleArrowClick("left");
    },
    handleNextClick: function() {
      this.handleArrowClick("right");
    }
  },
  components: {
    CarouselContent,
    ArrowLeft,
    ArrowRight
  }
};
</script>
