<template>
  <div>
    <span class="titleSize">Orange Company Lda.</span>
    <p>
      <FormattedMessage id="about.bodyContent00" />
    </p>
    <p>
      <FormattedMessage id="about.bodyContent01" />
    </p>
    <p>
      <FormattedMessage id="about.bodyContent02" />
    </p>
    <p>
      <FormattedMessage id="about.bodyContent03" />
    </p>
    <p>
      <FormattedMessage id="about.bodyContent04" />
    </p>
    <g-image
      class="fullWidthImage handleImage bottomImage"
      src="~/assets/img/grayScale.jpg"
      alt="aboutImage"
    />
  </div>
</template>

<script>
import FormattedMessage from "../../languageProvider/FormattedMessage";
export default {
  metaInfo: {
    title: "About Us"
  },
  name: "About",
  components: { FormattedMessage }
};
</script>
