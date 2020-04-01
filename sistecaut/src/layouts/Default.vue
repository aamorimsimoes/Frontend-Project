<template>
  <LanguageProvider>
    <!-- <LoadingWrapper
      :class="loading ? 'shownDisplay' : 'hiddenDisplay'"
      v-if="loading"
    /> -->
    <Navbar :class="loading ? 'hiddenDisplay' : 'shownDisplay'">
      <slot />
    </Navbar>
  </LanguageProvider>
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
import LanguageProvider from "../languageProvider/LanguageProvider";

export default {
  metaInfo: {
    title: "Sistecaut, Lda"
  },
  // data() {
  //   return {
  //     loading: true
  //   };
  // },
  components: {
    Navbar,
    LoadingWrapper,
    LanguageProvider
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
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
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
