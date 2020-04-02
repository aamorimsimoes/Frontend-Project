<template>
  <div>
    <slot />
  </div>
</template>
<script>
export default {
  name: "BaseComponent",
  methods: {
    handleZoomOut: function() {
      // the old component should execute a fade out with lower scale
      if (this.$el) {
        this.$el.style.opacity = 0;
        this.$el.style.transform = "scale(0.75)";
      }
    },
    handleZoomIn: function() {
      // the new component should execute a fade in to the proper scale animation
      if (this.$el) {
        this.$el.style.opacity = "1";
        this.$el.style.transform = "scale(1)";
      }
    }
  }
};
</script>
<style></style>
