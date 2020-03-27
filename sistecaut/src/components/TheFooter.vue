<template>
  <div id="footerWrapper">
    <!-- only one component inside template (div id=footer & <TheContacts />) -->
    <div id="footer">
      <div class="item">
        <h3>CONTATOS</h3>
        <ul>
          <li>
            SISTECAUT Lda.
          </li>
          <li>
            Tlm: +351 915 022 818
          </li>
          <li>
            Tel: +351 234 314 322
          </li>
          <li>
            E-mail:
          </li>
          <li>
            sistecaut@sistecaut.com
          </li>
          <li>
            Morada:
          </li>
          <li>
            R. João Francisco do Casal 87/89, 3800-266 Aveiro
          </li>
        </ul>
      </div>
      <div class="item">
        <h3>HORÁRIO</h3>
        <ul>
          <li>
            2.ª a 6.ª feira, das 08h30 às 13h00 e das 14h00 às 17h30
          </li>
        </ul>
        <h3>ENCERRADOS</h3>
        <ul>
          <li>
            - 2 e 3 de Janeiro
          </li>
          <li>
            - 11 de Maio
          </li>
          <li>
            - 11 de Junho
          </li>
          <li>
            - 30 de Novembro
          </li>
          <li>
            - 24 a 31 de Dezembro
          </li>
        </ul>
      </div>
      <div class="item">
        <ul>
          <li>
            SISTECAUT Lda.
          </li>
          <li>
            © 2020
            <!-- search this information according to calendar date (always updated) -->
          </li>
        </ul>
      </div>
    </div>
    <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
    <!-- <TheContacts /> -->
  </div>
</template>

<script>
import TheContacts from "@/components/TheContacts";

export default {
  name: "Footer",
  components: {
    TheContacts
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/_components";

#footer {
  background-color: #6286a9;
  height: 90vh;
  width: 90vw;
  padding: 0vh 5vw 0vh 5vw;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

#footer ul {
  list-style-type: none;
  text-align: center;
}

@media (min-width: 1025px) {
  #footer {
    height: 40vh;
  }
}

.item {
  // width: 100px;
  color: black;
  background: white;
  margin: 15px;
}

.item:nth-child(1) {
  order: 1;
  flex: 1;
}
.item:nth-child(2) {
  order: 2;
  flex: 1;
}
.item:nth-child(3) {
  order: 3;
  flex: 1;
}
</style>
