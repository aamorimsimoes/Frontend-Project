<template>
  <!-- <div class="contactMe">
    <h3>Contact Me</h3>
  <p>
    <ul>
      <li>Email: {{email}}</li>
      <li>Website: {{web}}</li>
    </ul>
  </p> -->
  
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
        <label>
        Don’t fill this out: <input name="bot-field" />
        </label>
        </p>
        <div class="sender-info">
          <div>
            <label for="name" class="label" >Full Name</label>
            <input type="text" name="name" v-model="formData.name" />
          </div>
          <div>
            <label for="email">Your Email</label>
            <input type="email" name="email" v-model="formData.email" />
          </div>
        </div>

        <div class="message-wrapper">
          <label for="message">Message</label>
          <textarea name="message" cols="30" rows="10" placeholder="Message" v-model="formData.message"></textarea>
        </div>

        <button type="submit">Submit form</button>
      </form>



      <!-- <div>
      <input type="text" name="name" v-model="formData.name" placeholder="Full Name" />
    </div>
      <input type="email" name="email" v-model="formData.email" placeholder="Email">
      <label>
        Your Role: 
      <select name="role[]" multiple>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select>
    </label>
      <input type="email" placeholder="sistecaut@example.com" disabled>
      <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
  </div> -->
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

// .contactMe {
//   margin: 15px;
//   height: 90vh;
//   width: 90vw;
//   padding: 0vh 5vw 0vh 5vw;
// }

// @media (min-width: 1025px) {
//   .contactMe {
//     height: 40vh;
//   }
// }

// form input,
// form textarea {
//   display: block;
//   width: 500px;
//   padding: 20px;
//   border: 3px solid lightgray;
//   margin: 20px 0;
//   outline: none;
//   font-size: 1.2rem;
//   color: black;
//   position: relative;
//   left: 50%;
//   right: 50%;
//   transform: translateX(-50%);
// }

// form input:last-child {
//   width: 150px;
//   background-color: darkgray;
//   border: none;
//   cursor: pointer;
// }
</style>