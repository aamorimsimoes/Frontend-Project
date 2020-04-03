<template>
  <div class="successBox">
    <div class="handleText">
      <FormattedMessage id="form.success" />
    </div>
    <CornerDownLeft v-on:click="goBack" class="CornerDownLeftSVG" />
  </div>
</template>

<script>
import CornerDownLeft from "@/assets/svgs/cornerDownLeft.svg";
import FormattedMessage from "@/languageProvider/FormattedMessage";

export default {
  name: "Success",
  components: {
    CornerDownLeft,
    FormattedMessage,
  },
  methods: {
    goBack: function () {
      this.$router.push("/contacts");
    },
  },
};
</script>

<style>
.handleText {
  font-size: x-large !important;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  height: 50vh;
  width: 50vw;
}
.CornerDownLeftSVG {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 72%;
  top: 60%;
  cursor: pointer;
}
</style>
