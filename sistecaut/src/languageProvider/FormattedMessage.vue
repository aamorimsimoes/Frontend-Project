<template>
  <span>{{ getTranslation(id) }}</span>
</template>
<script>
import MessagesEN from "./EN_en.json";
import MessagesPT from "./PT_pt.json";
import localStorage from "local-storage";
export default {
  name: "FormattedMessage",
  props: ["id"],
  methods: {
    getTranslation: function(id) {
      const currentLanguage = localStorage.get("language") || "English";
      switch (currentLanguage) {
        case "Portuguese":
          return MessagesPT[id];
        default:
          return MessagesEN[id];
      }
    }
  }
};
</script>
