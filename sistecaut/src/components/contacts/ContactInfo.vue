<template>
  <div class="contactWrapper">
    <!-- only one component inside template -->
    <div class="contactGeneral">
      <div class="generalWrapper">
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
      <div class="scheduleWrapper">
        <h3>HORÁRIO</h3>
        <ul>
          <li>
            2.ª a 6.ª feira, das 08h30 às 13h00 e das 14h00 às 17h30
          </li>
        </ul>
      </div>
      <div class="closedWrapper">
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
    </div>
    <div class="contactMap">
      <TravelMap class="travel-map"/>
    </div>
  </div>
</template>

<script>
import TravelMap from "../googleMaps/TravelMap";

export default {
  name: "ContactInfo",
  components: {
    TravelMap
  }
};
</script>

<style lang="scss" scoped>
.travel-map {
  height: 400px;
}

.contactGeneral {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.contactGeneral ul {
  list-style-type: none;
  padding-inline-start: 0px;
}

// .contactMap {
//   border: 2px black solid;
//   width: 85vw;
//   height: 50vh;
//   background-color: lightgray;
// }

.contactWrapper {
  display: flex;
  flex-direction: column;
}

// flex box application
// .item {
//   // width: 100px;
//   color: black;
//   background: white;
//   margin: 15px;
// }

// .item:nth-child(1) {
//   order: 1;
//   flex: 1;
// }
// .item:nth-child(2) {
//   order: 2;
//   flex: 1;
// }
// .item:nth-child(3) {
//   order: 3;
//   flex: 1;
// }
</style>
