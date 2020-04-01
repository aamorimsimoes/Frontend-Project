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
      &lt; -->
    <!-- symbol for the less than char (<) -->
    <!-- </button> -->
    <!-- <button v-on:click="handleNextClick" class="arrowButtons buttonNext">
      &gt;
      <! symbol for the greater than char (>) -->
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
    title: "Missão",
    bodyContent: [
      "Analisar, projetar e desenvolver conceitos e soluções inovadoras no mercado industrial, com elevada competência e qualidade. Atuar nos mercados superando as expetativas do cliente e requisitos contratados.",
      "Prestar apoio após venda associado às atividades acima descritas."
    ],
    img: "ideasWhiteboard.jpg"
  },
  {
    id: "slider1",
    title: "Competências",
    bodyContent: [
      "Para poder inovar no mercado privilegia o conhecimento, o empreendedorismo e a criatividade.",
      "Dispõe de competências profissionais de engenharia, produção e serviços, nas áreas: mecânica, pneumática, hidráulica, eletrotécnica, tecnologias de informação e computação.",
      "É estratégia da Sistecaut, Lda apresentar conceitos e soluções inovadoras, visando a melhoria de eficiência de processos e soluções."
    ],
    img: "engineersAtWork.jpg"
  },
  {
    id: "slider2",
    title: "Mercados",
    bodyContent: [
      "O nosso conhecimento, capacidade e flexibilidade, são valores reconhecidos nos diversos mercados onde atuamos, especificamente no mercado automóvel.",
      "Para estes desenvolvemos máquinas especiais, sistemas de fabrico, de inspeção e controlo.",
      "Participamos também noutros sectores como parceiros, desenvolvendo sistemas de controlo e monitorização de processo dedicados e abertos.",
      "Analisamos necessidades e apresentamos também soluções aos mercados no campo da manutenção e remodelação de sistemas existentes."
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

<style lang="scss">
.carouselViewport {
  display: inline-block;
  overflow: hidden;
}

.arrowButtons {
  z-index: 99;
  position: absolute;
  top: 40vh;
  color: black;
  /* background-color: rgba(0, 0, 0, .3); */
  height: 7vh;
  width: 7vh;
  border-radius: 10vh;
  border: none;
  font-weight: lighter;
  font-size: larger;
}

.arrowButtons:focus {
  outline: none;
}

.arrowButtons:hover {
  /* background-color: rgba(0, 0, 0, 1); */
  background-color: rgba(0, 0, 0, .1);
}

.buttonPrevious {
  left: 20px;
}

.buttonNext {
  right: 20px;
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
