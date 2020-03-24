<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AnimationWrapper",
  props: ["currentPage", "direction"],
  watch: {
    currentPage: function(newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    }
  }
};
</script>

<style></style>
