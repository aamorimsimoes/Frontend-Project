<template>
  <div>
    <slot />
  </div>
</template>

<script>
// export function changeLanguage(newLanguage) {
//   localStorage.setItem("language", newLanguage);
//   locale = newLanguage;
// }
export default {
  name: "LanguageProvider",
  data() {
    return {
      locale: localStorage.getItem("language") || "english"
    };
  },
  methods: {
    changeLanguage: function(newLanguage) {
      localStorage.setItem("language", newLanguage);
      this.locale = newLanguage;
    }
  },
  // watch: {
  //   locale: {
  //     immediate: true,
  //     handler(newValue, oldValue) {
  //       console.log("languaged changed to ", newValue);
  //     }
  //   }
  // }
};
</script>
