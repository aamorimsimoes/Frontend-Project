<template>
  <div class="formContact">
    <form
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label> Don’t fill this out: <input name="bot-field" /> </label>
      </p>
      <div class="sender-info">
        <div>
          <label for="name" class="label">Full name</label>
          <input
            placeholder="Write your full name"
            type="text"
            name="name"
            v-model="formData.name"
            required
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            placeholder="Write your email"
            type="email"
            name="email"
            v-model="formData.email"
            required
          />
        </div>
      </div>

      <div class="message-wrapper">
        <label for="message">Message</label>
        <textarea
          rows="10"
          placeholder="Write your message here"
          name="message"
          v-model="formData.message"
        ></textarea>
      </div>

      <button class="buttonSubmit" type="submit">Submit form</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
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
  name: "ContactForm"
};
</script>

<style lang="scss">
.formContact {
  // background-image: url("../assets/img/whiteSmartphone.jpg");
  // background-origin: content-box;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // height: 90vh;
  // width: 100vw;
  float: left;
}

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
  display: block;
  font-size: 1.2rem;
  left: 50%;
  outline: none;
  margin-top: 30px;
  position: relative;
  right: 50%;
  transform: translate(-50%);
  width: 500px;
}

.buttonSubmit {
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 10px;
  border: 4px solid #494949 !important;
  display: inline-block;
  transition: all .4s ease 0s;
}

.buttonSubmit:hover {
  color: #ffffff !important;
  background: var(--orange-color);
  border-color: var(--orange-color) !important;
  transition: all .8s ease 0 s;
}
</style>
