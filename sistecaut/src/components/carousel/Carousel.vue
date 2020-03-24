<template>
  <div class="carouselViewport">
    <button
      v-on:click="handlePreviousClick"
      class="arrowButtons buttonPrevious"
    >
      &lt; <!-- symbol for the less than char (<) -->
    </button>
    <button v-on:click="handleNextClick" class="arrowButtons buttonNext">
      &gt; <!-- symbol for the greater than char (>) -->
    </button>
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      :id="slide.id"
      class="carouselSlider"
      :style="{ zIndex: slides.length - index }"
    >
      <CarouselContent :title="slide.title" :imgSource="slide.img" :subtitle="slide.subtitle" />
    </div>
  </div>
</template>

<script>
let current = 0;
const slides = [
  {
    id: "slider0",
    title: "This is the first slide",
    subtitle: "THIS IS A SUBTITLE",
    img: "myImg.jpg"
  },
  {
    id: "slider1",
    title: "This is the second slide",
    img: "myImgMechanical.jpg"
  },
  {
    id: "slider2",
    title: "This is the third slide"
  }
];

/**
 * Handles the carousel movement according to the direction choosen
 * @param {"left" | "right"} direction
 */
function handleArrowClick(direction) {
  // get the current top div
  const currentDiv = document.getElementById(slides[current].id);
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
  const nextDiv = document.getElementById(slides[current].id);
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
}

import CarouselContent from "./CarouselContent";

export default {
  name: "Carousel",
  data() {
    return {
      slides
    };
  },
  methods: {
    handlePreviousClick: function() {
      handleArrowClick("left");
    },
    handleNextClick: function() {
      handleArrowClick("right");
    }
  },
  components: {
    CarouselContent
  }
};
</script>

<style>
.carouselViewport {
  height: 95vh;
  width: 100%;
  display: inline-block;
  overflow: hidden;
}

.arrowButtons {
  z-index: 99;
  position: absolute;
  top: 50vh;
  color: white;
  background-color: rgba(0, 0, 0, .3);
  height: 5vh;
  width: 5vh;
  border-radius: 10vh;
  border: none;
  font-weight: lighter;
  font-size: larger;
}

.arrowButtons:focus {
  outline: none;
}

.arrowButtons:hover {
  background-color: rgba(0, 0, 0, 1);
}

.buttonPrevious {
  left: 15px;
}

.buttonNext {
  right: 15px;
}

.carouselSlider {
  width: 100vw;
  height: 95vh;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}

@media (min-width: 1025px) {
  .carouselViewport,
  .carouselSlider {
    height: 90vh;
  }
}

</style>
