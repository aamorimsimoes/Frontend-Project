<template>
  <div class="contactWrapper">
    <div class="formContact">
      <form
        :key="currentLanguage"
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h3>
          <FormattedMessage id="form.title" />
        </h3>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:
            <input name="bot-field" />
          </label>
        </p>
        <div class="sender-info">
          <div>
            <label for="name" class="label">
              <FormattedMessage id="form.name" />
            </label>
            <input
              :placeholder="namePlaceholder"
              type="text"
              name="name"
              v-model="formData.name"
              required
            />
          </div>
          <div>
            <label for="email">
              <FormattedMessage id="form.email" />
            </label>
            <input
              :placeholder="emailPlaceholder"
              type="email"
              name="email"
              v-model="formData.email"
              required
            />
          </div>
        </div>

        <div class="message-wrapper">
          <label for="message">
            <FormattedMessage id="form.message" />
          </label>
          <textarea
            rows="10"
            :placeholder="messagePlaceholder"
            name="message"
            v-model="formData.message"
          ></textarea>
        </div>

        <button class="buttonSubmit" type="submit">
          <FormattedMessage id="form.submit" />
        </button>
      </form>
    </div>
    <div class="footer">
      <!-- search this information according to calendar date (always updated) -->
      <span class="footer__copyright"
        >Copyright © {{ new Date().getFullYear() }}.</span
      >
      <span class="footer__links">
        Powered by
        <a href="//gridsome.org">
          Gridsome
          <Vue class="vueSVG" />
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import Vue from "~/assets/svgs/vue.svg";
import FormattedMessage, {
  getTranslationExported
} from "~/languageProvider/FormattedMessage";
import localStorage from "local-storage";

export default {
  data() {
    return {
      formData: {},
      currentLanguage: localStorage.get("language"),
      namePlaceholder: getTranslationExported(
        "form.name.placeholder",
        localStorage.get("language")
      ),
      emailPlaceholder: getTranslationExported(
        "form.email.placeholder",
        localStorage.get("language")
      ),
      messagePlaceholder: getTranslationExported(
        "form.message.placeholder",
        localStorage.get("language")
      )
    };
  },
  components: {
    Vue,
    FormattedMessage
  },
  name: "ContactForm",
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  },
  mounted() {
    // catches a language change and updates the localLanguage at the local storage and here, to update all components
    this.$root.$on("languageChange", newLanguage => {
      (this.namePlaceholder = getTranslationExported(
        "form.name.placeholder",
        localStorage.get("language")
      )),
        (this.emailPlaceholder = getTranslationExported(
          "form.email.placeholder",
          localStorage.get("language")
        )),
        (this.messagePlaceholder = getTranslationExported(
          "form.message.placeholder",
          localStorage.get("language")
        ));
    });
  }
};
</script>

<style lang="scss">
// .formContact {
//   // background-image: url("../assets/img/whiteSmartphone.jpg");
//   // background-origin: content-box;
//   // background-position: center;
//   // background-repeat: no-repeat;
//   // background-size: cover;
//   // height: 90vh;
//   // width: 100vw;
//   // float: left;
// }

form input,
form textarea {
  border: 2px solid black;
  display: block;
  font-size: 1.2rem;
  left: 50%;
  margin: 5px;
  outline: none;
  padding: 5px;
  position: relative;
  right: 50%;
  transform: translate(-50%);
  width: 500px;
}

form input {
  border-bottom-style: solid;
  border-left-style: none;
  border-right-style: none;
  border-top-style: none;
}

form label,
form {
  font-weight: 900;
  display: block;
  font-size: 1.2rem;
  left: 50%;
  margin-top: 30px;
  outline: none;
  position: relative;
  right: 50%;
  transform: translate(-50%);
  width: 500px;
}

.buttonSubmit {
  background: #ffffff;
  border: 4px solid #494949 !important;
  color: #494949 !important;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .4s ease 0s;
}

.buttonSubmit:hover {
  background: var(--orange-color);
  border-color: var(--orange-color) !important;
  color: #ffffff !important;
  transition: all .8s ease 0 s;
}

.footer {
  color: var(--gray-color);
  left: 0;
  position: fixed;
  text-align: center;
  top: 80vh;
  width: 100%;
}

.vueSVG {
  position: absolute;
  top: -17px;
}
</style>
