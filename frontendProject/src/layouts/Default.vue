<template>
  <!-- <LoadingWrapper
      :class="loading ? 'shownDisplay' : 'hiddenDisplay'"
      v-if="loading"
    /> -->
  <!-- <Navbar :class="loading ? 'hiddenDisplay' : 'shownDisplay'"> -->
  <Navbar>
    <slot />
  </Navbar>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "../components/navbar/TheNavbar";
// import LoadingWrapper from "./LoadingWrapper";

export default {
  metaInfo: {
    title: "Orange"
  },
  // data() {
  //   return {
  //     loading: true
  //   };
  // },
  components: {
    Navbar
    // LoadingWrapper,
  }
  // created() {
  //   setTimeout(() => {
  //     this.loading = false;
  //   }, 2000);
  // }
};
</script>

<style>
@font-face {
  font-family: Geomanist-Complete-Desktop;
  src: url("../assets/fonts/Geomanist-Bold.otf");
  font-weight: bold;
}

@font-face {
  font-family: Geomanist-Complete-Desktop;
  src: url("../assets/fonts/Geomanist-ExtraLight.otf");
  font-weight: lighter;
}

/* @font-face {
  font-family: Iosevka Term Nerd Font Complete;
  src: url("../assets/fonts/Iosevka Term Nerd Font Complete.ttf");
  font-weight: normal;
} */

body {
  font-family: Geomanist-Complete-Desktop;
}

.bigTemplate {
  display: block;
}

.hiddenDisplay {
  display: none;
}

.shownDisplay {
  display: initial;
}
</style>
