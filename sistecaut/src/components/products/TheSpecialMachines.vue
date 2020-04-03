<template>
  <div>
    <span class="titleSize">
      <FormattedMessage id="products.page.specialMach" />
    </span>
    <p>
      <FormattedMessage id="products.specialMach.description" />
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
          title: "products.specialMach.card00.title",
          bodyContent: ["products.specialMach.card00.content"]
        },
        {
          imgSource: "products/specialMachines/specialMachines_card01.jpg",
          id: "special01",
          title: "products.specialMach.card01.title",
          bodyContent: ["products.specialMach.card01.content"]
        },
        {
          imgSource: "products/specialMachines/specialMachines_card02.jpg",
          id: "special02",
          title: "products.specialMach.card02.title",
          bodyContent: ["products.specialMach.card02.content"]
        }
      ]
    };
  }
};
</script>
