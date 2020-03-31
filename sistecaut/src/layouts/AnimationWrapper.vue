<template>
  <div>
    <ArrowUp
      class="slideButtons slideUp"
      v-on:click="handleUpClick"
      v-if="currentPage > 0"
    />
    <ArrowDown
      class="slideButtons slideDown"
      v-on:click="handleDownClick"
      v-if="currentPage < nPages - 1"
    />
    <slot />
  </div>
</template>

<script>
import ArrowUp from "@/assets/svgs/chevrons-up.svg";
import ArrowDown from "@/assets/svgs/chevrons-down.svg";
export default {
  name: "AnimationWrapper",
  components: {
    ArrowUp,
    ArrowDown
  },
  props: ["idStart", "nPages", "currentPage", "setCurrentPage"],
  data() {
    return {
      nextPage: null,
      scrolling: false
    };
  },
  methods: {
    handleUpClick: function() {
      this.scrolling = true;
      if (this.currentPage > 0) {
        this.nextPage = this.currentPage - 1;
      } else {
        this.nextPage = 0;
      }
    },
    handleDownClick: function() {
      this.scrolling = true;
      if (this.currentPage < this.nPages - 1) {
        this.nextPage = this.currentPage + 1;
      } else {
        this.nextPage = this.nPages - 1;
      }
    },
    handlePageChange: function() {
      this.scrolling = false;
      this.setCurrentPage(this.nextPage);
      this.nextPage = null;
    }
  },
  // watch the change of the scolling prop
  watch: {
    scrolling: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          // get the "old" component
          const oldComp = document.getElementById(
            `${this.idStart}_${this.currentPage}`
          );

          // if the old Component exists
          if (oldComp) {
            // the old component should execute a fade out with lower scale
            oldComp.style.opacity = 0;
            oldComp.style.transform = "scale(0.75)";

            // give the necessary time to the old component to do its animation
            setTimeout(() => {
              // go up or down by setting the proper value to the current page
              this.handlePageChange();
            }, 500);
          }
        }
      }
    },
    currentPage: {
      immediate: true,
      handler(newValue, oldValue) {
        // gives a little of time to the parent component to render the new component
        setTimeout(() => {
          // get the new Component
          const newComp = document.getElementById(
            `${this.idStart}_${newValue}`
          );
          // the new component should execute a fade in to the proper scale animation
          newComp.style.opacity = "1";
          newComp.style.transform = "scale(1)";
        }, 1);
      }
    }
  }
};
</script>

<style>
.slideButtons {
  z-index: 100;
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, .3);
  height: 5vh;
  width: 5vh;
  left: 5px;
  border-radius: 10vh;
  border: none;
  font-weight: lighter;
  font-size: larger;
}

.slideButtons:focus {
  outline: none;
}

.slideButtons:hover {
  background-color: var(--grey-color);
}

.slideUp {
  top: 15vh;
}

.slideDown {
  bottom: 5vh;
}
</style>
