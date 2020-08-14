<template>
  <span :key="currentLanguage">{{ getTranslation(id) }}</span>
</template>
<script>
import MessagesEN from "./EN_en.json";
import MessagesPT from "./PT_pt.json";
import localStorage from "local-storage";

export function getTranslationExported(id, language) {
  switch (language) {
    case "Português":
      return MessagesPT[id];
    default:
      return MessagesEN[id];
  }
}

export default {
  name: "FormattedMessage",
  props: ["id"],
  data() {
    return {
      currentLanguage: localStorage.get("language") || "English"
    };
  },
  methods: {
    getTranslation: function(id) {
      switch (this.currentLanguage) {
        case "Português":
          return MessagesPT[id];
        default:
          return MessagesEN[id];
      }
    }
  },
  mounted() {
    // catches a language change and updates the localLanguage at the local storage and here, to update all components
    this.$root.$on("languageChange", newLanguage => {
      localStorage.set("language", newLanguage);
      this.currentLanguage = newLanguage;
    });
  }
};
</script>
