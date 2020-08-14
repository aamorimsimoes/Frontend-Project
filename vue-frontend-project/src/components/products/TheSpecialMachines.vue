<template>
  <div>
    <span class="titleSize">
      <FormattedMessage id="products.page.product02" />
    </span>
    <p>
      <FormattedMessage id="products.product02.description" />
    </p>
    <div class="productsWrapper">
      <Card
        class="productsCards"
        v-for="card in products"
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
  name: "SpecialMachines",
  components: {
    Card,
    FormattedMessage
  },
  data() {
    return {
      products: [
        {
          imgSource: "products/specialMachines/specialMachines_card00.jpg",
          id: "special00",
          title: "products.product02.card00.title",
          bodyContent: ["products.product02.card00.content"]
        },
        {
          imgSource: "products/specialMachines/specialMachines_card01.jpg",
          id: "special01",
          title: "products.product02.card01.title",
          bodyContent: ["products.product02.card01.content"]
        },
        {
          imgSource: "products/specialMachines/specialMachines_card02.jpg",
          id: "special02",
          title: "products.product02.card02.title",
          bodyContent: ["products.product02.card02.content"]
        }
      ]
    };
  }
};
</script>
