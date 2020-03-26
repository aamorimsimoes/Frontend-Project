<template>
  <!-- <div class="contactMe">
    <h3>Contact Me</h3>
  <p>
    <ul>
      <li>Email: {{email}}</li>
      <li>Website: {{web}}</li>
    </ul>
  </p> -->
    <div class="formWrapper">
      <form 
        class="contactMe"
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
          Don’t fill this out: <input name="bot-field" />
          </label>
          </p>
          <div class="sender-info">
            <div>
              <label for="name" class="label" placeholder="Write here your name">Full Name</label>
              <input type="text" name="name" v-model="formData.name" />
            </div>
            <div>
              <label for="email" placeholder="Email">Your Email</label>
              <input type="email" name="email" v-model="formData.email" />
            </div>
          </div>

          <div class="message-wrapper">
            <label for="message">Message</label>
            <textarea name="message" cols="30" rows="10" placeholder="Message" v-model="formData.message"></textarea>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button type="submit">Submit form</button>
        </form>
      </div>

</template>

<script>
export default {
  // name: 'TheContacts',
  // data(){
  //   return {
  //     email: 'maegan@maeganwilson.com',
  //     web: 'maeganjwilson.github.com'
  //   }
  // }
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

  }
}
</script>

<

<style lang='scss'>

#formName {
  margin: 15px;
  height: 90vh;
  width: 90vw;
  padding: 0vh 5vw 0vh 5vw;
}

@media (min-width: 1025px) {
  .contactMe {
    height: 40vh;
  }
}

form input,
form textarea, {
  border: 3px solid lightgray;
  color: black;
  display: block;
  font-size: 1.2rem;
  left: 50%;
  margin: 20px 0;
  outline: none;
  padding: 20px;
  position: relative;
  right: 50%;
  transform: translateX(-50%);
  width: 500px;
}

label {
  color: black;
  display: block;
  font-size: 1.2rem;
  left: 50%;
  margin: 20px 0;
  outline: none;
  position: relative;
  right: 50%;
  transform: translateX(-50%);
  width: 500px;
}

form button:last-child {
  background-color: lightgray;
  border: none;
  color: black;
  cursor: pointer;
  display: block;
  width: 150px;
  font-size: 1.2rem;
  left: 50%;
  margin: 20px 0;
  outline: none;
  position: relative;
  right: 50%;
  transform: translateX(-50%);
  
}
</style>