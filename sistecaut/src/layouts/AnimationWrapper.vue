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
          const oldComp = this.$children[0];
          // if the old Component exists
          if (oldComp) {
            oldComp.handleZoomOut();
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
          const newComp = this.$children[0];
          if (newComp) {
            newComp.handleZoomIn();
          }
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
  color: black;
  /* background-color: rgba(0, 0, 0, .2); */
  height: 7vh;
  width: 7vh;
  left: 20px;
  border-radius: 10vh;
  border: none;
  font-weight: lighter;
  font-size: larger;
}

.slideButtons:focus {
  outline: none;
}

.slideButtons:hover {
  background-color: rgba(0, 0, 0, .1);
}

.slideUp {
  top: 15vh;
}

.slideDown {
  bottom: 5vh;
}
</style>
