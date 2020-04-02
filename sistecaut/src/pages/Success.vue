<template>
  <div class="successBox">
    <div class="handleText">
      Thank you for filling out our form We have received your message and would
      like to thank you for writing to us. If your inquiry is urgent, please use
      the telephone number listed below to talk to one of our staff members.
      Otherwise, we will reply by email as soon as possible. Talk to you soon,
      Sistecaut, Lda
    </div>
    <send />
  </div>
</template>

<script>
import Send from "@/assets/svgs/send.svg";

export default {
  name: "Success",
  components: {
    Send
  }
};
</script>

<style>
.handleText {
  border: 2px solid black;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  height: 50vh;
  width: 50vw;
}
.sendSVG {
  width: 50px;
  height: 50px;
}
</style>
