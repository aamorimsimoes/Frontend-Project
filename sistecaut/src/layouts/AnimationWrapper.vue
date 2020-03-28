<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AnimationWrapper",
  props: ["currentPage", "direction"],
  // watch: {
  //   currentPage: {
  //     immediate: true,
  //     deep: true,
  //     handler(newValue, oldValue) {
  //       console.log("new = ", newValue)
  //     }
  //   }
  // },
  }
</script>

<style></style>
