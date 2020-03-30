<template>
  <span>
    {{ getTranslation(id) }}
  </span>
</template>

<script>
import MessagesEN from "./EN_en.json";
import MessagesPT from "./PT_pt.json";

export default {
  name: "LanguageProvider",
  props: ["id"],
  methods: {
    getTranslation: function(id) {
      const currentLanguage = localStorage.getItem("language") || "english";

      switch (currentLanguage) {
        case "portuguese":
          return MessagesPT[id];
        default:
          return MessagesEN[id];
      }
    }
  }
};
</script>
