<template>
  <div class="languageSelect">
    <span v-on:click="showLanguageOptions" class="spanCurrentLanguage"
      >{{ localeLanguage }} &#8964;</span
    >
    <form ref="languageForm" class="languageForm">
      <ul class="optionsContainer">
        <li class="optionList" v-on:click="handleLanguageChange('Português')">
          <span class="languageOption" value="Português">Português</span>
        </li>
        <li class="optionList" v-on:click="handleLanguageChange('English')">
          <span class="languageOption" value="English">English</span>
        </li>
      </ul>
    </form>
  </div>
</template>
<script>
import localStorage from "local-storage";
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      localeLanguage: localStorage.get("language") || "English"
    };
  },
  methods: {
    handleLanguageChange: function(newLanguage) {
      // emits/triggers a language change at the root
      this.$root.$emit("languageChange", newLanguage);
      this.showLanguageOptions();
    },
    showLanguageOptions: function() {
      const form = this.$refs.languageForm;
      if (form) {
        if (form.style.display === "table") {
          form.style.display = "none";
        } else {
          form.style.display = "table";
        }
      }
    }
  }
};
</script>
<style>
.languageSelect {
  display: inline-block;
  width: 150px;
  height: 20px;
  text-align: center;
  font-family: Geomanist-Complete-Desktop;
  font-size: 20px;
  font-weight: bold;
  color: var(--grey-color);
  background-color: transparent;
  border: var(--orange-color) solid 3px;
  cursor: pointer;
}
.spanCurrentLanguage {
  padding: 0 5px 0 5px;
}
.optionsContainer {
  margin: 0;
  padding: 0;
  border: var(--orange-color) solid 3px;
}
.languageOption {
  font-weight: var(--font-weight);
  width: 100%;
}
.optionList {
  list-style-type: none;
  transition: 1s;
}
.optionList:hover {
  background-color: lightgray;
}
.languageForm {
  display: none;
  position: relative;
  top: 0;
  width: 150px;
  height: fit-content;
  background-color: white;
  margin-top: 2px;
}
</style>
