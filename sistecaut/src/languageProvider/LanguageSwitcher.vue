<template>
  <div class="languageSelect">
    <span v-on:click="showLanguageOptions" class="spanCurrentLanguage"
      ><FormattedMessage id="language" /> &#8964;</span
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
import FormattedMessage from "./FormattedMessage";
export default {
  name: "LanguageSwitcher",
  components: {
    FormattedMessage
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
</style>
