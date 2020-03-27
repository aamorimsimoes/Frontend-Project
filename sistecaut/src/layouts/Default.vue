<template>
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
import Navbar from "../components/TheNavbar";

export default {
  metaInfo: {
    title: "Sistecaut, Lda"
  },
  components: {
    Navbar,
    // ToggleTheme
  }
};
</script>

<style>

@font-face {
  font-family: Iosevka Term Nerd Font Complete;
  src: url("../assets/fonts/Iosevka Term Nerd Font Complete.ttf");
  font-weight: normal;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

.bigTemplate {
  display: block;
}
</style>
