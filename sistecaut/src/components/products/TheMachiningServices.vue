<template>
  <div>
    <span class="titleSize">
      <FormattedMessage id="products.page.product04" />
    </span>
    <p>
      <FormattedMessage id="products.product04.description" />
    </p>
    <div class="productsWrapper">
      <Card
        class="productsCards"
        v-for="(card) in products"
        :key="card.id"
        :title="card.title"
        :bodyContent="card.bodyContent"
        :imgSource="card.imgSource"
      />
    </div>
  </div>
</template>

<script>
import Card from "~/components/general/ReusableCard";
import FormattedMessage from "~/languageProvider/FormattedMessage";

export default {
  name: "MachiningServices",
  components: {
    Card,
    FormattedMessage
  },
  data() {
    return {
      products: [
        {
          imgSource: "products/machiningServices/machiningServices_card00.jpg",
          id: "robot00",
          title: "products.product04.card00.title",
          bodyContent: ["products.product04.card00.content"]
        },
        {
          imgSource: "products/machiningServices/machiningServices_card01.jpg",
          id: "robot01",
          title: "products.product04.card01.title",
          bodyContent: ["products.product04.card01.content"]
        },
        {
          imgSource: "products/machiningServices/machiningServices_card02.jpg",
          id: "robot02",
          title: "products.product04.card02.title",
          bodyContent: ["products.product04.card02.content"]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
// .productMachining {
//   background-color: lightsalmon;
//   background-position: center;
//   background-size: cover;
//   height: 40%;
//   object-fit: cover;
//   object-position: right;
//   overflow: hidden;
//   width: 20%;
// }</style
>>
