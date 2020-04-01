<template>
  <!-- key changes force update -->
  <div :key="localeLanguage">
    <slot />
  </div>
</template>
<script>
import localStorage from "local-storage";
export default {
  name: "LanguageProvider",
  data() {
    return {
      localeLanguage: localStorage.get("language") || "English"
    };
  },
  mounted() {
    // catches a language change and updates the localLanguage at the local storage and here, to update all components
    this.$root.$on("languageChange", newLanguage => {
      localStorage.set("language", newLanguage);
      this.localeLanguage = newLanguage;
    });
  }
};
</script>
