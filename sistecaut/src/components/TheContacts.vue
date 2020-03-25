<template>
  <div class="contactMe">
    <h3>Contact Me</h3>
  <p>
    <ul>
      <li>Email: {{email}}</li>
      <li>Website: {{web}}</li>
    </ul>
  </p>
  <div class="formContainer">
    <h1>Contacto</h1>
    <form name="contact" method="POST" data-netlify="true">
      <input type="text" name="name" placeholder="Full Name">
      <input type="email" name="email" placeholder="Email">
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
  </div>
</template>

<script>
export default {
  name: 'TheContacts',
  data(){
    return {
      email: 'maegan@maeganwilson.com',
      web: 'maeganjwilson.github.com'
    }
  }
}
</script>

<style>

.contactMe {
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
form textarea {
  display: block;
  width: 500px;
  padding: 20px;
  background-color: lightgray;
  border: 3px solid gray;
  margin: 20px 0;
  outline: none;
  font-size: 1.2rem;
  color: black;
  position: relative;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
}

form input:last-child {
  width: 150px;
  background-color: darkgray;
  border: none;
  cursor: pointer;
}
</style>