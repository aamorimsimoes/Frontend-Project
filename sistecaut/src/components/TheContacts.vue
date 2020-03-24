<template>
  <div class="contactMe">
    <h3>Contact Me</h3>
  <p>
    <ul>
      <li>Email: {{email}}</li>
      <li>Website: {{web}}</li>
    </ul>
  </p>
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
</style>