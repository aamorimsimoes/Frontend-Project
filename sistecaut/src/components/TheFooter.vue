<template>
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
            © 2020 <!-- search this information according to calendar date (always updated) -->
          </li>
        </ul>
      </div>
</div>

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  @import "~/assets/styles/_components";

  #footer {
    //background-color: #6286a9;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch; // baseline adapts height in relation to content
  }

  .item {
    width: 400px;
    color: black;
    //background: white;
    margin: 15px;    
  }

  .item:nth-child(1) {
    order: 1;
    flex-grow: 1;
  }
  .item:nth-child(2) {
    order: 2;
    flex-grow: 1;
  }
  .item:nth-child(3) {
    order: 3;
    flex-grow: 1;
  }

</style>