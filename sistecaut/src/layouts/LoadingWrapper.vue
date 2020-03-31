<template>
  <div>
    <!-- <g-image
      alt="STAlogo"
      src="~/assets/icons/staFull.png"
      width="75px"
      height="75px"
      fit="outside"
      class="logoLoading"
    /> -->
    <div class="loader" />
  </div>
</template>

<script>
export default {
  name: "LoadingWrapper"
};
</script>

<style>
.loadingPage {
  display: inline-block;
  filter: blur(50px) grayscale(.5);
  pointer-events: none;
}

.logoLoading {
  position: absolute;
  top: calc(50% - 120px - 35px);
  left: calc(50% - 120px);
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #f08013;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
