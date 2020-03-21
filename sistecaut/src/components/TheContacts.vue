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
    height: 50vh;
    width: 100%;
  }
</style>